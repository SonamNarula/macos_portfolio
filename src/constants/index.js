
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

// TECH STACK
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
        items: ["Python", "FastAPI", "REST APIs", "Node.js", "Express"],
    },
    {
        category: "AI / ML",
        items: ["Generative AI", "LLMs", "RAG", "LangChain", "Hugging Face"],
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

// SOCIAL LINKS
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
        link: "https://www.linkedin.com/in/sonamnarula",
    },
    {
        id: 3,
        text: "Email",
        icon: "/icons/share.svg",
        bg: "#5551d9",
        link: "mailto:sonamnarula2108@gmail.com",
    },
];

// PROJECTS FOR SAFARI
const blogPosts = [
    {
        id: 1,
        date: "2026",
        title: "HireLens — AI-powered career preparation platform.",
        image: "/images/project-1.png",
        link: "https://github.com/SonamNarula/hirelens-nexus",
    },
    {
        id: 2,
        date: "2026",
        title: "Trackify — Student productivity and placement tracker.",
        image: "/images/project-2.png",
        link: "https://github.com/SonamNarula/Trackify-college-minor-project",
    },
    {
        id: 3,
        date: "2026",
        title: "NeuroNews — AI-focused news experience.",
        image: "/images/project-3.png",
        link: "https://github.com/SonamNarula?tab=repositories",
    },
    {
        id: 4,
        date: "2026",
        title: "CodeFusion — Real-time collaborative code editor.",
        image: "/images/gal4.png",
        link: "https://github.com/SonamNarula/CodeFusion-a-collaborative-real-time-code-editor",
    },
];

// PHOTOS APP
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

// PROJECT FOLDER GENERATOR
const projectFolder = (
    id,
    name,
    description,
    image,
    position,
    github,
    techStack,
    live = null
) => ({
    id,
    name,
    icon: "/images/folder.png",
    kind: "folder",
    position,
    windowPosition: position,

    description,
    imageUrl: image,
    github,
    techStack,
    live,

    children: [
        {
            id: id * 10 + 1,
            name: `${name}.txt`,
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            subtitle: name,
            description,
            github,
            techStack,
            live,
            imageUrl: image,
        },
        {
            id: id * 10 + 2,
            name: `${name}.png`,
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            imageUrl: image,
        },
    ],
});

// PROJECTS FOLDER
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
                "HireLens is a full-stack, resume-aware AI workspace for role-specific interview preparation.",
                "Upload your resume and provide a target job description to generate a structured preparation report.",
                "Features include role-match insights, skill-gap analysis, technical and behavioural interview questions, and a day-wise preparation plan.",
                "Built with a focus on AI reliability, authentication, document processing and persistent reports.",
            ],
            "/images/project-1.png",
            "top-10 left-5",
            "https://github.com/SonamNarula/hirelens-nexus",
            ["React 19", "Node.js", "Express", "MongoDB", "Gemini AI", "JWT"]
        ),

        projectFolder(
            12,
            "Trackify",
            [
                "Trackify is a student productivity and placement tracking dashboard.",
                "It brings tasks, study hours, DSA progress and placement applications into one workspace.",
                "Includes a study tracker with streaks, task manager, placement tracker, analytics dashboard and a rule-based productivity coach.",
                "The application uses Firebase Authentication and local persistence for user data.",
            ],
            "/images/project-2.png",
            "top-10 left-40",
            "https://github.com/SonamNarula/Trackify-college-minor-project",
            ["React", "TypeScript", "Vite", "Chart.js", "Firebase"],
            "https://trackify.wasmer.app"
        ),

        projectFolder(
            13,
            "NeuroNews",
            [
                "NeuroNews is an AI-focused project exploring intelligent news and information experiences.",
                "It is part of my exploration of Artificial Intelligence and modern application development.",
                "More project details and implementation documentation will be added here.",
            ],
            "/images/project-3.png",
            "top-40 left-5",
            "https://github.com/SonamNarula?tab=repositories",
            ["AI / ML", "Application Development"]
        ),

        projectFolder(
            14,
            "CodeFusion",
            [
                "CodeFusion is a browser-based real-time collaborative coding workspace.",
                "Multiple users can join a room, edit shared files, see live presence and cursors, execute supported code and communicate in one workspace.",
                "Its collaboration layer uses Yjs CRDT to synchronize concurrent edits.",
                "Features include Monaco Editor, multi-file projects, browser-based execution, live preview, room chat and shared notes.",
            ],
            "/images/gal4.png",
            "top-40 left-40",
            "https://github.com/SonamNarula/CodeFusion-a-collaborative-real-time-code-editor",
            ["React", "Vite", "Node.js", "Yjs CRDT", "Monaco Editor", "WebSocket"]
        ),
    ],
};

// ABOUT ME
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

// EXPERIENCE
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
            subtitle: "DSA Wing Captain",
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
            subtitle: "Incubation Ambassador",
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
            subtitle: "Campus Ambassador",
            description: [
                "Campus Ambassador at TakeUForward.",
                "Helping connect students with learning resources and the DSA community.",
            ],
        },
    ],
};

// RESUME
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

// TRASH
const TRASH_LOCATION = {
    id: 5,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [],
};

// ALL FINDER LOCATIONS
export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    experience: EXPERIENCE_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

// WINDOW SETTINGS
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
