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
  { category: "Languages", items: ["C++", "Python", "SQL", "JavaScript"] },
  { category: "Frontend", items: ["React.js", "TypeScript", "Vite", "Tailwind CSS"] },
  { category: "Backend", items: ["Python", "FastAPI", "REST APIs", "Node.js", "Express"] },
  { category: "AI / ML", items: ["Generative AI", "LLMs", "RAG", "LangChain", "Hugging Face"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman"] },
  { category: "Core CS", items: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"] },
];

const socials = [
  { id: 1, text: "GitHub", icon: "/icons/github.svg", bg: "#24292f", link: "https://github.com/SonamNarula" },
  { id: 2, text: "LinkedIn", icon: "/icons/linkedin.svg", bg: "#0A66C2", link: "https://www.linkedin.com/in/sonamnarula" },
  { id: 3, text: "Email", icon: "/icons/share.svg", bg: "#5551d9", link: "mailto:sonamnarula2108@gmail.com" },
];

const projectFolder = ({
  id,
  name,
  description,
  github,
  techStack,
  live = null,
  category = "Project",
  highlights = [],
  architecture = [],
  role = null,
}) => ({
  id,
  name,
  icon: "/images/folder.png",
  kind: "folder",
  category,
  description,
  github,
  techStack,
  live,
  highlights,
  architecture,
  role,
  // Keep one detail document only. No decorative project PNG files.
  children: [
    {
      id: id * 10 + 1,
      name: `${name}.txt`,
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "txt",
      subtitle: name,
      category,
      description,
      github,
      techStack,
      live,
      highlights,
      architecture,
      role,
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
    projectFolder({
      id: 11,
      name: "HireLens",
      category: "AI / Full-stack",
      description: [
        "HireLens is a full-stack, resume-aware AI workspace for role-specific interview preparation. A candidate uploads a PDF resume, provides a target job description and can add optional context about their goals.",
        "The backend extracts readable resume text, combines it with the target role and sends a schema-constrained request to Gemini. The generated report is structured and persisted against the authenticated user.",
        "A report includes a bounded role-match score, technical questions with intent and model answers, behavioural questions with intent and model answers, skill gaps classified by severity, and a day-wise preparation plan.",
        "The platform also supports account registration and login, protected report access, PDF resume processing, and ATS-oriented PDF export using generated HTML and Puppeteer.",
        "The project is deliberately positioned as a preparation and feedback workspace—not as a tool that guarantees interviews or bypasses an ATS.",
      ],
      highlights: [
        "Resume PDF upload and text extraction using pdf-parse",
        "Role-specific interview preparation reports generated with Gemini",
        "Technical and behavioural question banks with explanations and model answers",
        "Skill-gap analysis with low, medium and high severity",
        "Day-wise preparation plans and persistent report history",
        "JWT cookie authentication and user-owned reports",
        "HTML-to-PDF export using Puppeteer",
      ],
      architecture: [
        "React 19 + Vite frontend",
        "Node.js 20+ + Express API",
        "MongoDB with Mongoose models",
        "Gemini via @google/genai",
        "Multer PDF upload, pdf-parse extraction and Puppeteer PDF rendering",
      ],
      techStack: [
        "React 19",
        "Vite 6",
        "React Router",
        "Axios",
        "Node.js 20+",
        "Express 5",
        "MongoDB",
        "Mongoose",
        "Gemini API",
        "@google/genai",
        "bcryptjs",
        "jsonwebtoken",
        "cookie-parser",
        "cors",
        "Multer",
        "pdf-parse",
        "Puppeteer",
        "dotenv",
      ],
      github: "https://github.com/SonamNarula/hirelens-nexus",
    }),

    projectFolder({
      id: 12,
      name: "Trackify",
      category: "Productivity / Analytics",
      description: [
        "Trackify is a student productivity and placement tracking dashboard built to bring day-to-day preparation into one place: tasks, study hours, DSA questions and placement applications.",
        "The Task Manager supports priorities, filters and completion states. The Study Tracker records daily study hours and DSA questions and calculates consecutive-day streaks. The Placement Tracker represents application progress through applied, interview, selected and rejected states.",
        "The Analytics area visualizes study hours, DSA progress, task priorities and placement outcomes through charts. The productivity coach is intentionally rule-based: a pure function reads tasks, study logs and streak data and returns explainable observations. It does not call an LLM or require an AI API key.",
        "The current implementation uses browser localStorage for application data, so data persists across refreshes in that browser but is not synchronized across devices or isolated per account.",
      ],
      highlights: [
        "Task manager with priority tags, filters and completion states",
        "Study tracker for hours, DSA questions and consecutive-day streaks",
        "Placement tracker with applied, interview, selected and rejected stages",
        "Analytics charts for study, DSA, task priorities and placement outcomes",
        "Rule-based productivity coach with explainable thresholds",
        "Light and dark themes",
        "Firebase Authentication",
        "LocalStorage persistence in the current implementation",
      ],
      architecture: [
        "React + TypeScript single-page application",
        "Vite development and production bundling",
        "App-level state and handlers shared with presentational pages",
        "useLocalStorage hook for browser persistence",
        "Firebase Authentication and ProtectedRoute",
        "Chart.js visualizations and pure-function productivity insights",
      ],
      techStack: [
        "React 18",
        "TypeScript",
        "Vite",
        "React Router",
        "Chart.js",
        "Firebase Authentication",
        "CSS custom properties",
        "LocalStorage",
        "Custom React hooks",
      ],
      github: "https://github.com/SonamNarula/Trackify-college-minor-project",
      live: "https://trackify.wasmer.app",
    }),

    projectFolder({
      id: 13,
      name: "NeuroNews",
      category: "AI / Exploration",
      description: [
        "NeuroNews is an AI-focused news and information experience listed in this portfolio. The public portfolio repository identifies it as an AI-focused news experience.",
        "A matching public source repository and technical README could not be verified during this review. To avoid inventing implementation details, the exact feature set and technology stack are not claimed here.",
      ],
      highlights: [
        "AI-focused news and information experience",
        "Implementation details pending source-repository verification",
      ],
      techStack: ["Technology details not yet verified"],
      github: null,
    }),

    projectFolder({
      id: 14,
      name: "CodeFusion",
      category: "Collaborative Development",
      description: [
        "CodeFusion is a browser-based collaborative development workspace. Multiple people can join a room, work on a shared multi-file project, see collaborators' presence and cursors, run supported code in their browsers, preview web files, and communicate without leaving the workspace.",
        "The collaboration model uses Yjs CRDT documents. Shared files are represented through Yjs structures, Monaco editor models are bound to shared text using y-monaco, and WebSocket messages carry document synchronization and awareness updates.",
        "The client supports JavaScript execution in a sandboxed iframe, TypeScript transpilation through Monaco's TypeScript worker, and Python execution in a Web Worker with Pyodide. HTML previews are rendered in a sandboxed iframe.",
        "The Node.js/Express server hosts a WebSocket collaboration endpoint, manages active room documents and awareness, and persists room snapshots as Yjs binary files. The current project documentation explicitly notes that it is a single-process implementation without account-based room authorization or distributed multi-instance coordination.",
      ],
      highlights: [
        "Room-based collaborative coding with shared multi-file projects",
        "Yjs CRDT synchronization for concurrent editing",
        "Monaco Editor integration with remote cursors and presence",
        "WebSocket transport and room awareness",
        "Browser-side JavaScript execution in a sandboxed iframe",
        "TypeScript transpilation through Monaco",
        "Python execution through Pyodide in a Web Worker",
        "Sandboxed HTML/CSS/JS preview",
        "Shared Markdown notes, room chat and console",
        "Room snapshot persistence using Yjs binary documents",
      ],
      architecture: [
        "React 18 + Vite client",
        "Monaco Editor + y-monaco bindings",
        "Yjs shared documents and awareness",
        "y-websocket client provider",
        "Node.js + Express 4 + ws server",
        "y-protocols and lib0 for synchronization messages",
        "Pyodide WebAssembly runtime in a Web Worker",
        "Filesystem-backed .ydoc room snapshots",
      ],
      techStack: [
        "React 18",
        "Vite",
        "React Router",
        "Monaco Editor",
        "Yjs",
        "y-monaco",
        "y-websocket",
        "y-protocols",
        "lib0",
        "Node.js",
        "Express",
        "ws",
        "Pyodide",
        "Web Workers",
        "WebAssembly",
        "Marked",
        "DOMPurify",
        "Concurrently",
      ],
      github: "https://github.com/SonamNarula/CodeFusion-a-collaborative-real-time-code-editor",
    }),
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
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "txt",
      subtitle: "A little introduction",
      category: "About",
      description: [
        "Hey, I'm Sonam Narula — a Computer Science undergraduate at JECRC University (2027).",
        "My interests sit at the intersection of problem-solving, Data Structures and Algorithms, competitive programming, and Artificial Intelligence / Machine Learning.",
        "I enjoy understanding how systems work, breaking down complex problems, and building practical software—from full-stack applications to AI-powered tools.",
        "I also enjoy learning with and mentoring peers through student technology communities.",
      ],
      highlights: [
        "DSA and competitive programming",
        "AI / ML and Generative AI",
        "Full-stack application development",
        "Peer learning and technical communities",
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
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "txt",
      subtitle: "DSA Wing Captain",
      category: "Leadership / Mentoring",
      imageUrl: "/images/experience-devcrest.svg",
      role: "Captain — DSA Wing",
      organization: "DevCrest JU",
      description: [
        "Serving as Captain of the DSA Wing at DevCrest JU, a student developer community at JECRC University.",
        "The role centres on problem-solving, Data Structures and Algorithms, and helping peers build stronger fundamentals through collaborative learning and mentoring.",
        "I bring a pattern-oriented approach to DSA: understanding constraints, comparing brute-force and optimized solutions, explaining trade-offs, and practising implementation and dry runs.",
      ],
      highlights: [
        "DSA learning and problem-solving",
        "Peer mentoring and concept explanation",
        "Brute-force to optimized reasoning",
        "Pattern-based practice and technical discussions",
      ],
    },
    {
      id: 32,
      name: "JECRC Incubation Centre.txt",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "txt",
      subtitle: "Incubation Ambassador",
      category: "Campus / Innovation",
      imageUrl: "/images/experience-incubation.svg",
      role: "Incubation Ambassador",
      organization: "JECRC Incubation Centre",
      description: [
        "Incubation Ambassador at JECRC Incubation Centre.",
        "The ambassador role connects me with the university's student innovation and entrepreneurship ecosystem.",
        "I am interested in helping students discover incubation initiatives, innovation opportunities and the support available to turn early ideas into projects.",
      ],
      highlights: [
        "Student-facing incubation ambassador role",
        "Awareness of campus innovation initiatives",
        "Connecting peers with the incubation ecosystem",
      ],
    },
    {
      id: 33,
      name: "TakeUForward.txt",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "txt",
      subtitle: "Campus Ambassador",
      category: "Community",
      imageUrl: "/images/experience-tuf.svg",
      role: "Campus Ambassador",
      organization: "TakeUForward",
      description: [
        "Campus Ambassador for TakeUForward (TUF).",
        "This role is connected to the student DSA and interview-preparation community, helping peers discover structured learning resources and problem-solving practice.",
        "My focus is on making high-quality DSA preparation resources more visible and encouraging consistent learning.",
      ],
      highlights: [
        "Campus ambassador representation",
        "Promoting structured DSA learning resources",
        "Encouraging peer participation in problem-solving",
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

// Safari projects list: use the same verified project data without PNG previews.
const blogPosts = WORK_LOCATION.children.map((project) => ({
  id: project.id,
  title: project.name,
  description: project.description,
  tech: project.techStack,
  link: project.github,
  live: project.live,
  category: project.category,
}));

const photosLinks = [
  { id: 1, icon: "/icons/gicon1.svg", title: "Library" },
  { id: 2, icon: "/icons/gicon2.svg", title: "Memories" },
  { id: 3, icon: "/icons/file.svg", title: "Projects" },
  { id: 4, icon: "/icons/gicon4.svg", title: "Moments" },
  { id: 5, icon: "/icons/gicon5.svg", title: "Favorites" },
];

const gallery = [
  { id: 1, img: "/images/sonam%20narula%201.PNG" },
  { id: 2, img: "/images/sonam%20narula%202.jpg" },
  { id: 3, img: "/images/sonam%20narula%203.jpg" },
  { id: 4, img: "/images/sonam%20narula%204.JPG" },
  { id: 5, img: "/images/sonam%20narula%205.JPG" },
  { id: 6, img: "/images/sonam%20narula%206.JPG" },
];

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
