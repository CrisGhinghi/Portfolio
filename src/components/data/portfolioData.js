import counter from '../../assets/portfolio/counter.png'
import likePhoto from '../../assets/portfolio/likePhoto.png'
import randomizeColors from "../../assets/portfolio/RandomizeColors.png"
import testimonials from '../../assets/portfolio/testimonials.png'
import dreamCity from '../../assets/portfolio/dreamCity.png'

export const portfolioData = [
    {
        id: 1,
        image: dreamCity,
        title: 'Dream City',
        github: 'https://github.com/CrisGhinghi/S2I-JS--Advanced',
        demo: 'https://yourdreamcity.netlify.app',
    },
    {
        id: 2,
        image: counter,
        title: 'Counter',
        github: 'https://github.com/CrisGhinghi/S2I-JS--Basics',
        demo: 'https://counter-app-crisghinghi.netlify.app',
    },
    {
        id: 3,
        image: randomizeColors,
        title: 'Random Colors',
        github: 'https://github.com/CrisGhinghi/React--01-Randomize-colors',
        demo: 'https://randomizecolors.netlify.app',
    },
    {
        id: 4,
        image: likePhoto,
        title: 'Like Photo',
        github: 'https://github.com/CrisGhinghi/React--02-Like-my-photo',
        demo: 'https://likemyphotoapp.netlify.app',
    },
    {
        id: 5,
        image: testimonials,
        title: 'Testimonials',
        github: 'https://github.com/CrisGhinghi/React--03-Testimonials',
        demo: 'https://testimonials-webapp.netlify.app',
    },
]