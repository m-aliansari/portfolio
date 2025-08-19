import { SKILLS_DATA } from "./skills"

export const NAV_LINKS = [
    {
        name: 'About',
        path: '/#about',
        title: "About Muhammad Ali Ansari - Full-Stack Developer"
    },
    {
        name: 'Skills',
        path: '/#skills',
        title: "Technical Skills of Muhammad Ali Ansari: Vue, React, Node.js, Python, PostgreSQL, GCP",
        nested: true,
        subPaths: [{ name: 'Featured', path: '/#skills-featured' }, ...SKILLS_DATA.map(data => ({ name: data.title, path: `/#skills-${data.id}` }))]
    },
    {
        name: 'Highlights',
        path: '/#highlights',
        title: "Highlights of Muhammad Ali Ansari's Full Stack Development Career"
    },
    {
        name: 'Experience',
        path: '/#experience',
        title: "Professional Work Experience of Muhammad Ali Ansari"
    },
    {
        name: 'Reviews',
        path: '/#reviews',
        title: "Client Testimonials & Reviews of Muhammad Ali Ansari's work"
    },
    {
        name: 'Contact',
        path: '/#contact'
    }
]

export const SECTIONS = [
    {
        id: '#about',
        nested: false
    },
    {
        id: '#skills',
        nested: true,
        subSections: ['#skills-featured', ...SKILLS_DATA.map(data => `#skills-${data.id}`)]
    },
    {
        id: '#highlights',
        nested: false
    },
    {
        id: '#experience',
        nested: false
    },
    {
        id: '#reviews',
        nested: false
    },
    {
        id: '#contact',
        nested: false
    }
]