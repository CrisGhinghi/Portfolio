import { useEffect, useRef } from "react";
import { socialData } from "./data/socialData";
import { FaArrowDown } from "react-icons/fa";
import avatar from "../assets/avatar.png";

export const Hero = () => {
    const downArrowRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 90) {
                downArrowRef.current.classList.add('hide-down-arrow');
            } else {
                downArrowRef.current.classList.remove('hide-down-arrow');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
            <h2 className="text-4xl lg:text-5xl text-rose-600 font-bold uppercase">Cristina Ghinghiloschi</h2>
            <h3 className="py-3 text-2xl">Front End Developer</h3>
            <p className="max-w-xl font-light text-gray-500">
                Hi <span className="animate-pulse text-3xl">👋</span>, I{"'"}m Cris, and this is my digital playground.<br />
                Nice to meet you.
            </p>

            {/* social icons */}
            <div className="flex justify-evenly py-8 lg:py-12 text-4xl w-full md:w-1/3">
                {socialData.map(({ id, link, icon }) => (
                    <a
                        href={link}
                        key={id}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer duration-300 hover:text-rose-600">
                        {icon}
                    </a>
                ))}
            </div>

            {/* avatar */}
            <div>
                <img
                    src={avatar}
                    alt="avatar"
                    className="w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-rose-600 rounded-xl pt-5 pl-8"
                />
            </div>

            {/* arrow down animation */}
            <div
                className="mt-10 down-arrow"
                ref={downArrowRef}>
                <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
            </div>
        </section>
    )
}
