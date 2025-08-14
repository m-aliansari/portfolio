import { SKILLS_DATA } from "./skills"

export const NAV_LINKS = [
    { name: 'Reviews', path: '/#reviews' },
    { name: 'Highlights', path: '/#highlights' },
    { name: 'About', path: '/#about' },
    { name: 'Skills', path: '/#skills', nested: true, subPaths: SKILLS_DATA.map(data => ({ name: data.title, path: `/#skills-${data.id}` })) },
    { name: 'Experience', path: '/#experience' },
    { name: 'Contact', path: '/#contact' }
]

export const SECTIONS = [
    {
        id: '#reviews',
        nested: false
    },
    {
        id: '#highlights',
        nested: false
    },
    {
        id: '#about',
        nested: false
    },
    {
        id: '#skills',
        nested: true,
        subSections: SKILLS_DATA.map(data => `#skills-${data.id}`)
    },
    {
        id: '#experience',
        nested: false
    },
    {
        id: '#contact',
        nested: false
    }
]