
const navLinks = [
    { id: 1, name: "Projects", type: "finder" },
    { id: 2, name: "Contact", type: "contact" },
    { id: 3, name: "Resume", type: "resume" },
];

const navIcons = [
    { id: 1, img: "/icons/wifi.svg" },
    { id: 2, img: "/icons/search.svg" },
    { id: 3, img: "/icons/user.svg" },
    { id: 4, img: "/icons/mode.svg" },
];

const dockApps = [
    { id: "finder", name: "Finder", icon: "finder.png", canOpen: true },
    { id: "safari", name: "Projects", icon: "safari.png", canOpen: true },
    { id: "photos", name: "Photos", icon: "photos.png", canOpen: true },
    { id: "contact", name: "Contact", icon: "contact.png", canOpen: true },
    { id: "terminal", name: "Terminal", icon: "terminal.png", canOpen: true },
    { id: "trash", name: "Trash", icon: "trash.png", canOpen: false },
];

const techStack = [
    {
        category: "Languages",
        items: ["C++", "Python", "SQL", "JavaScript"],
    },
    {
        category: "Frontend",
        items: ["React.js", "TypeScript", "Vite", "Tailwind CSS"],
    },
    {
        category: "Backend",
        items: ["Python", "FastAPI", "REST APIs"],
    },
    {
        category: "AI / ML",
        items: ["Generative AI", "LLMs", "RAG", "LangChain"],
    },
    {
        category: "Tools",
        items: ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
        category: "Core CS",
        items: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"],
    },
];

const socials = [
    {
        id: 1,
        text: "GitHub",
        icon: "/icons/github.svg",
        bg: "#24292f",
        link: "https://github.com/SonamNarula",
    },
    {
        id: 2,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#0A66C2",
        link: "https://www.linkedin.com/",
    },
    {
        id: 3,
        text: "Email",
        icon: "/icons/share.svg",
        bg: "#5551d9",
        link: "mailto:sonamnarula2108@gmail.com",
    },
];

const blogPosts = [
    {
        id: 1,
        date: "2026",
        title:
            "HireLens — A full-stack AI-powered job preparation platform.",
        image: "/images/project-1.png",
        link: "https://github.com/SonamNarula",
    },
    {
        id: 2,
        date: "2026",
        title:
            "Trackify — A project focused on tracking and organising information.",
        image: "/images/project-2.png",
        link: "https://github.com/SonamNarula",
    },
    {
        id: 3,
        date: "2026",
        title:
            "NeuroNews — Exploring AI and intelligent news experiences.",
        image: "/images/project-3.png",
        link: "https://github.com/SonamNarula",
    },
];

const photosLinks = [
    { id: 1, icon: "/icons/gicon1.svg", title: "Library" },
    { id: 2, icon: "/icons/gicon2.svg", title: "Memories" },
    { id: 3, icon: "/icons/file.svg", title: "Projects" },
    { id: 4, icon: "/icons/gicon4.svg", title: "Moments" },
    { id: 5, icon: "/icons/gicon5.svg", title: "Favorites" },
];

const gallery = [
    { id: 1, img: "/images/gal1.png" },
    { id: 2, img: "/images/gal2.png" },
    { id: 3, img: "/images/gal3.png" },
    { id: 4, img: "/images/gal4.png" },
];

const projectFolder = (id, name, description, image, position) => ({
    id,
    name,
    icon: "/images/folder.png",
    kind: "folder",
    position,
    windowPosition: position,
    children: [
        {
            id: id * 10 + 1,
            name: `${name}.txt`,
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            subtitle: name,
            description,
        },
        {
            id: id * 10 + 2,
            name: `${name}.png`,
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-32 left-10",
            imageUrl: image,
        },
    ],
});

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Projects",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        projectFolder(
            11,
            "HireLens",
            [
                "A production-oriented full-stack GenAI job preparation application.",
                "Designed to help users prepare for technical interviews with AI-powered assistance.",
                "Built as a practical exploration of full-stack development and Generative AI.",
            ],
            "/images/project-1.png",
            "top-10 left-5"
        ),
        projectFolder(
            12,
            "Trackify",
            [
                "A web application built with React, TypeScript and Vite.",
                "Focused on organising and tracking information through a clean interface.",
            ],
            "/images/project-2.png",
            "top-10 left-40"
        ),
        projectFolder(
            13,
            "NeuroNews",
            [
                "An AI-focused news project exploring intelligent information experiences.",
                "Part of my work exploring modern AI and application development.",
            ],
            "/images/project-3.png",
            "top-40 left-5"
        ),
        projectFolder(
            14,
            "CodeFusion",
            [
                "A university major project.",
                "A collaborative software project documented through a complete project report.",
            ],
            "/images/gal4.png",
            "top-40 left-40"
        ),
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About Me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 21,
            name: "About Sonam.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            subtitle: "A little introduction",
            description: [
                "Hey, I'm Sonam Narula — a Computer Science undergraduate at JECRC University.",
                "I enjoy solving problems, building software and exploring the world of Artificial Intelligence.",
                "My interests include Data Structures and Algorithms, Generative AI, full-stack development and technology.",
                "I'm always learning, experimenting and looking for opportunities to build meaningful things.",
            ],
        },
    ],
};

const EXPERIENCE_LOCATION = {
    id: 3,
    type: "experience",
    name: "Experience",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        {
            id: 31,
            name: "DevCrest JU.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            description: [
                "Captain — DSA Wing, DevCrest JU.",
                "Working with peers on problem-solving, DSA learning and mentoring.",
            ],
        },
        {
            id: 32,
            name: "JECRC Incubation Centre.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-32 left-10",
            description: [
                "Incubation Ambassador at JECRC Incubation Centre.",
                "Supporting student innovation and campus initiatives.",
            ],
        },
        {
            id: 33,
            name: "TakeUForward.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-10",
            description: [
                "Campus Ambassador at TakeUForward.",
                "Helping connect students with learning resources and the DSA community.",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 4,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 41,
            name: "Sonam_Narula_Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 5,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    experience: EXPERIENCE_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
    INITIAL_Z_INDEX,
    WINDOW_CONFIG,
};
