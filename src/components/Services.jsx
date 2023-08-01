import { Section } from "./common/Section";
import { servicesData } from "./data/servicesData";

export const Services = () => {
    return (
        <Section
            title='Services ⚒️'
            subtitle={`These are the technologies I've worked with`}
        >
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 ">
                {servicesData.map(({ id, image, title, description }) => (
                    <div
                        key={id}
                        className='flex flex-col items-center justify-center p-4 shadow-lg shadow-gray-600 rounded-xl duration-300 ease-in-out hover:scale-110'
                    >
                        <img
                            src={image}
                            alt={description}
                            className='w-16 h-16 md:w-24 md:h-24 object-contain'
                        />
                        <h3 className='mt-5 text-base'>{title}</h3>
                    </div>
                ))}
            </div>
        </Section>
    );
};
