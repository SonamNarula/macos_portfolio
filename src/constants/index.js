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
  id, name, description, github, techStack, live = null,
  category = "Project", highlights = [], architecture = [], role = null,
}) => ({
  id, name, icon: "/images/folder.png", kind: "folder", category,
  description, github, techStack, live, highlights, architecture, role,
  children: [{
    id: id * 10 + 1, name: `${name}.txt`, icon: null, kind: "file",
    fileType: "txt", subtitle: name, category, description, github,
    techStack, live, highlights, architecture, role,
  }],
});

const WORK_LOCATION = {
  id: 1, type: "work", name: "Projects", icon: "/icons/work.svg",
  kind: "folder",
  children: [
    projectFolder({
      id: 16,
      name: "CardioSense",
      category: "Machine Learning / Healthcare",
      description: [
        "CardioSense is an educational heart disease prediction project built around a tabular health dataset. It combines exploratory analysis, a reproducible scikit-learn training pipeline, model comparison, and a Flask interface for entering patient attributes and viewing a prediction.",
        "The training pipeline removes exact duplicate records, applies StandardScaler to numerical features and OneHotEncoder to categorical features through a ColumnTransformer, and compares K-Nearest Neighbors, Decision Tree, and Random Forest classifiers. Model comparison uses stratified 5-fold cross-validation on the training split, with mean ROC-AUC used to select the candidate model.",
        "Random Forest was selected with a mean cross-validation ROC-AUC of 0.8995. On the separate held-out test split, the saved pipeline recorded 0.7869 accuracy, 0.8169 F1 score, and 0.8983 ROC-AUC. These are results from one split of a small dataset, not clinical validation.",
        "The Flask application accepts the 13 dataset input features, calls the shared prediction module, and returns the predicted class with the positive-class probability. The fitted preprocessing and classifier pipeline is serialized with Joblib for reuse.",
        "CardioSense is a learning project and must not be used for diagnosis or medical decision-making."
      ],
      highlights: [
        "Dataset inspection, missing-value checks and exact-duplicate removal",
        "ColumnTransformer pipeline with StandardScaler and OneHotEncoder",
        "Comparison of KNN, Decision Tree and Random Forest classifiers",
        "Stratified 5-fold cross-validation and held-out test evaluation",
        "Accuracy, precision, recall, F1, ROC-AUC and confusion-matrix reporting",
        "Reusable preprocessing and model pipeline saved with Joblib",
        "Flask form for patient attributes and prediction output"
      ],
      architecture: [
        "Pandas dataset loading and cleaning",
        "scikit-learn ColumnTransformer and Pipeline for preprocessing",
        "KNN, Decision Tree and Random Forest model comparison",
        "Stratified 5-fold cross-validation and 80/20 stratified train/test split",
        "Joblib-serialized model pipeline",
        "Flask application with HTML/CSS form interface"
      ],
      techStack: [
        "Python",
        "Pandas",
        "NumPy",
        "scikit-learn",
        "StandardScaler",
        "OneHotEncoder",
        "ColumnTransformer",
        "Random Forest",
        "K-Nearest Neighbors",
        "Decision Tree",
        "Joblib",
        "Flask",
        "HTML",
        "CSS",
        "Matplotlib",
        "Seaborn"
      ],
      github: "https://github.com/SonamNarula/CardioSense",
    }),
    projectFolder({
      id: 17,
      name: "Chromatica",
      category: "Deep Learning / Computer Vision",
      description: [
        "Chromatica is an image colorization project that uses a pretrained deep neural network to add color to grayscale images. It is built with Python, OpenCV's DNN module and NumPy.",
        "The pipeline converts images into the CIE LAB color space and uses a pretrained Caffe model based on the colorization approach by Zhang et al. (ECCV 2016). The network predicts quantized chrominance values across 313 color bins, which are combined with the luminance channel to produce a colorized output.",
        "The project focuses on understanding an end-to-end computer vision inference pipeline, image preprocessing, color-space conversion and model integration. Large pretrained model weights are kept out of the Git repository."
      ],
      highlights: [
        "Grayscale image colorization using a pretrained deep learning model",
        "OpenCV DNN integration with Caffe model files",
        "CIE LAB color-space conversion and image preprocessing",
        "313 quantized color-bin predictions for chrominance",
        "Inference pipeline using Python, OpenCV and NumPy"
      ],
      architecture: [
        "Python image loading and preprocessing",
        "OpenCV DNN loading of the pretrained Caffe network",
        "CIE LAB luminance and chrominance processing",
        "Neural-network inference over 313 quantized color bins",
        "Reconstruction of the colorized image"
      ],
      techStack: ["Python", "OpenCV", "OpenCV DNN", "NumPy", "Caffe", "CIE LAB", "Deep Learning", "Computer Vision"],
      github: "https://github.com/SonamNarula/chromatica-image-colorization",
    }),
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
      id: 15,
      name: "AcornFolio",
      category: "AI / FinTech",
      description: [
        "AcornFolio — Mutual Fund Co-Pilot is an AI-powered mutual fund dashboard designed for Indian retail investors. It helps make the hidden costs and trade-offs in mutual fund investing easier to understand, especially the difference between Regular and Direct plans.",
        "The dashboard helps users inspect expense-ratio leakage, compare Direct and Regular plan outcomes, understand portfolio overlap and risk, and evaluate switching decisions alongside capital-gains tax, exit load and holding periods.",
        "It brings fund discovery, portfolio analysis, SIP / SWP / STP planning, XIRR, tax and exit-load calculations, savings estimates, rebalancing and stress-testing tools into one experience. Visual dashboards, charts and alerts make the results easier to explore.",
        "The AI Co-Pilot is designed to explain results using portfolio and retrieved fund context. LanceDB semantic search supplies relevant fund information, while deterministic code handles important financial calculations instead of asking an LLM to guess numerical results.",
        "The project uses a Next.js App Router architecture with API routes, Prisma and SQLite. The README describes it as a hackathon/demo-oriented educational decision-support tool, not certified financial advice."
      ],
      highlights: [
        "Direct vs Regular mutual fund plan comparison and expense-ratio leakage analysis",
        "Portfolio analysis covering allocation, risk, overlap, sector exposure and benchmark comparison",
        "Calculators for SIP, SWP, STP, XIRR, tax, exit load and future-value differences",
        "Switching trade-off analysis that considers tax and exit-load implications",
        "AI Co-Pilot that explains portfolio results using retrieved fund context",
        "LanceDB semantic retrieval for relevant mutual fund information",
        "Charts, rankings, heatmaps, alerts, watchlists and portfolio tools"
      ],
      architecture: [
        "Next.js App Router with React + TypeScript",
        "Next.js API routes for application backend functionality",
        "Prisma ORM with SQLite for structured fund and portfolio data",
        "Zustand for client-side state management",
        "LanceDB vector search for semantic fund retrieval",
        "AI chat integration with local Ollama / ZAI fallback options",
        "Recharts for portfolio and fund visualizations"
      ],
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Framer Motion",
        "Zustand",
        "Next.js API Routes",
        "Prisma ORM",
        "SQLite",
        "LanceDB",
        "Recharts",
        "AI Chat API",
        "Ollama",
        "ZAI SDK"
      ],
      github: "https://github.com/SonamNarula/AcornFolio"
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
    })
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
      icon: null,
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
      icon: null,
      kind: "file",
      fileType: "txt",
      subtitle: "DSA Wing Captain",
      category: "Leadership / Mentoring",
      imageUrl: "/images/devcrest.png",
      role: "Captain — DSA Wing",
      organization: "DevCrest JU",
      description: [
        "My journey with DevCrest JU began unusually early. I was one of just 3–4 second-year students selected by the seniors to help build the community. We were not simply joining an already-established club; we got to be part of shaping what the community would become.",
        "That experience gave me a close look at how a student tech community is built from the ground up: working with seniors and peers, taking ownership, figuring things out as a team and creating an environment where students could learn and grow together.",
        "I went on to serve as Captain of the DSA Wing. The work brought me closer to the part of computer science I enjoy most—Data Structures and Algorithms, competitive problem-solving, breaking down patterns and helping other students become more confident with difficult problems.",
        "More than a title, DevCrest was a hands-on lesson in initiative, responsibility, collaboration and community building. I got to contribute while learning how much effort goes into turning a group of interested students into a genuine technical community."
      ],
      highlights: [
        "Selected by seniors as one of 3–4 second-year students to help build the DevCrest JU community",
        "Took on leadership responsibility as Captain of the DSA Wing",
        "Contributed to building a student space centred on DSA and problem-solving",
        "Worked with seniors and peers to grow the community and its learning culture",
        "Helped make complex DSA concepts and problem-solving patterns more approachable"
      ],
    },
    {
      id: 32,
      name: "JECRC Incubation Centre.txt",
      icon: null,
      kind: "file",
      fileType: "txt",
      subtitle: "Incubation Ambassador",
      category: "Campus / Innovation",
      imageUrl: "/images/jic.png",
      role: "Incubation Ambassador",
      organization: "JECRC Incubation Centre",
      description: [
        "Being an Incubation Ambassador at JECRC Incubation Centre gave me a chance to experience the entrepreneurial side of campus life up close. I got to meet several well-known entrepreneurs and investors—the 'Sharks'—with Namita Thapar being the one I did not get to meet. Those interactions exposed me to different ways of thinking about ideas, execution, business and ambition.",
        "One of my most memorable experiences was helping organise an event where Mr. Ashneer Grover was the guest. Being part of bringing an event like that together taught me a lot beyond the stage itself: the preparation, coordination, teamwork and responsibility that go into making a large event happen.",
        "The experience helped me look beyond technology alone. I learned to pay attention to how people communicate ideas, how businesses think about scale and execution, and how much planning sits behind a successful event. It remains one of my favourite experiences at JECRC."
      ],
      highlights: [
        "Represented the JECRC Incubation Centre as an Incubation Ambassador",
        "Met several prominent entrepreneurs and investors from the 'Sharks' community",
        "Helped organise an event featuring Mr. Ashneer Grover as the guest",
        "Learned first-hand about event preparation, coordination, teamwork and execution",
        "Gained exposure to entrepreneurship, business thinking and turning ideas into action"
      ],
    },
    {
      id: 33,
      name: "TakeUForward.txt",
      icon: null,
      kind: "file",
      fileType: "txt",
      subtitle: "Campus Ambassador",
      category: "Community",
      imageUrls: ["/images/tuf%201.png", "/images/tuf%202.png"],
      role: "Campus Ambassador · Team Member (3 months)",
      organization: "TakeUForward",
      description: [
        "TakeUForward has been one of the most meaningful parts of my DSA journey. I first knew the community through its learning resources and through Striver—someone I genuinely looked up to as 'the god of DSA'. Getting the opportunity to interact with him was a full-circle moment: from learning through his teaching to being part of the team behind the community.",
        "I was part of the TakeUForward team for three months, where I got to understand the community from the inside and contribute as a Campus Ambassador. It was an opportunity to learn from people whose work had already influenced the way I approached Data Structures and Algorithms.",
        "I also conducted DSA sessions for students at my college through online meets. Being able to share what I had learned, explain problem-solving approaches and help other students with their preparation made the experience even more special.",
        "The best part was the journey itself—from being a learner inspired by TUF to interacting with Striver, becoming part of the team and taking DSA sessions for my own college community."
      ],
      highlights: [
        "Interacted with Striver, whose DSA teaching had been a major learning influence",
        "Worked as part of the TakeUForward team for three months",
        "Represented TakeUForward as a Campus Ambassador",
        "Conducted DSA learning sessions for college students through online meets",
        "Helped bring structured DSA learning and problem-solving approaches to peers"
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
      icon: null,
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
  // Desktop project shortcuts open Finder directly inside each project folder.
  codefusion: WORK_LOCATION.children.find((project) => project.name === "CodeFusion"),
  acornfolio: WORK_LOCATION.children.find((project) => project.name === "AcornFolio"),
  hirelens: WORK_LOCATION.children.find((project) => project.name === "HireLens"),
  cardiosense: WORK_LOCATION.children.find((project) => project.name === "CardioSense"),
};

// Safari projects list: use the same verified project data without PNG previews.
const blogPosts = WORK_LOCATION.children.map((project) => ({
  id: project.id,
  name: project.name,
  title: project.name,
  description: project.description,
  tech: project.techStack,
  techStack: project.techStack,
  highlights: project.highlights,
  architecture: project.architecture,
  link: project.github,
  github: project.github,
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
