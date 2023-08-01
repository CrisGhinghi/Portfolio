import { Section } from "./common/Section"
import { socialData } from "./data/socialData";
import contact from '../assets/contact.png'

export const Contact = () => {

    return (
        <Section
            title='Contact 📞'
            subtitle='These are the ways you can get in contact with me. Hope to hear from you soon!'
        >

            <div className="flex flex-col items-center justify-center gap-8 text-center">
                <div>
                    <img
                        src={contact}
                        alt="contact info"
                        className="w-32 h-32" />
                </div>

                <div>
                    <p className="max-w-xs md:max-w-lg font-extralight">
                        I am open to talk regarding any job opportunities, collaborations or just to say hi.
                        Feel free to contact me via email or social media.
                    </p>
                </div>

                {/* social media */}
                <div className="flex w-full items-center justify-evenly text-4xl lg:text-4xl">
                    {socialData.map(({ id, link, icon }) => (
                        <a
                            key={id}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="duration-300 ease-in-out hover:text-rose-600"
                        >
                            {icon}
                        </a>
                    ))}
                </div>

                {/* bottom form */}
                <div className="p-8 text-left w-full flex items-center justify-center">
                    <form
                        action="https://getform.io/f/60d8cf34-8f8b-4ee0-98d0-a9d281e79068"
                        method="POST">
                        <div className="w-full">
                            <div className="flex flex-col">
                                <label className="capitalize text-sm py-2 font-extralight">
                                    name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="border-2 rounded-lg p-2 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="flex flex-col my-2">
                                <label className="capitalize text-sm py-2 font-extralight">
                                    phone
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    className="border-2 rounded-lg p-2 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            <div className="flex flex-col my-2">
                                <label className="capitalize text-sm py-2 font-extralight">
                                    email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    className="border-2 rounded-lg p-2 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="capitalize text-sm py-2 font-extralight">
                                    message
                                </label>
                                <textarea
                                    name="message"
                                    rows="10"
                                    className="border-2 rounded-lg p-2 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"
                                    placeholder="Enter your message"
                                    required
                                >
                                </textarea>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <button className="my-8 bg-gradient-to-r from-rose-600 to-rose-800 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Section>
    )
}
