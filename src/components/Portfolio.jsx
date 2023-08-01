import { Section } from "./common/Section"
import { portfolioData } from "./data/portfolioData"

import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa'

export const Portfolio = () => {

    return (
        <Section
            title='Portfolio 🗒️'
            subtitle='Check out some of my work right here'
        >

            <div className="grid gap-8 lg:gap-10 lg:grid-cols-2">

                {portfolioData.map(({ id, image, title, github, demo }) => (
                    <div
                        key={id}
                        className='max-w-md flex shadow-lg shadow-gray-600 rounded-2xl overflow-hidden duration-200 hover:scale-105 lg:hover:scale-110'
                    >
                        <img
                            src={image}
                            alt={title}
                            className='w-2/3'
                        />
                        <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                            <h2>{title}</h2>
                            <a
                                className="text-2xl lg:text-4xl cursor-pointer hover:text-rose-600 duration-300 "
                                href={github}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={`GitHub repository of ${title}`}
                            >
                                <FaGithub />
                            </a>
                            <a
                                className="text-2xl lg:text-4xl cursor-pointer hover:text-rose-600 duration-300 "
                                href={demo}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={`Live demo of ${title}`}
                            >
                                <FaExternalLinkSquareAlt />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Section >
    )
}
