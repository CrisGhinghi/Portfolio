import { Section } from "./common/Section";

export const About = () => {
    return (
        <Section
            title='Welcome to my digital playground 👾'
        >
            <div className="flex flex-col items-center justify-center gap-8 text-center">
                <p className="max-w-xs md:max-w-4xl md:text-xl">
                    I{"'"}m not just passionate about technology and innovation, but also about the magic they can create.<br />
                    <br />
                    It{"'"}s not just about writing lines of code - it{"'"}s about using that code to breathe life into ideas, to shape dreams into reality, and to craft digital solutions that solve real-world problems.<br />
                    I love the process of constructing, creating, and ultimately transforming a concept into a functioning application.<br />
                    <br />
                    Welcome to my world, where code meets creativity.
                </p>
            </div>
        </Section>
    )
}
