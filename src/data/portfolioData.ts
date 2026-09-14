import { Project, SkillTechnique, TimelineMilestone, Achievement, NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Mastery", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Timeline", href: "#timeline" },
];

export const SKILLS_DATA: SkillTechnique[] = [
  {
    technique: "Three-Eyed Raven AI",
    tech_stack: "Machine Learning & Data Science",
    tag: "AI / ML",
    lore: "Predicting patterns and analyzing complex datasets to transform raw data into intelligent insights.",
    desc: [
      "Data processing and modeling using NumPy, Pandas, Scikit-learn, and Matplotlib",
      "Building ML recommendation engines like TF-IDF for personalized content",
      "Analyzing complex datasets to generate visual insights and accurate predictions"
    ],
    realmAccent: "purple"
  },
  {
    technique: "Valyrian Code Mastery",
    tech_stack: "Python & C / C++",
    tag: "PYTHON",
    lore: "Writing high-performance Python scripts, CLI tools, and core algorithmic logic.",
    desc: [
      "Strong mastery of Python for backend microservices, automation, and data pipelines",
      "Solid C and C++ foundation for algorithmic thinking and memory efficiency",
      "Writing clean, scalable, modular, and maintainable production code"
    ],
    realmAccent: "yellow"
  },
  {
    technique: "King’s Landing Citadel",
    tech_stack: "Django & Flask",
    tag: "DJANGO",
    lore: "Building secure, scalable Web APIs and enterprise-grade backend web architectures.",
    desc: [
      "Full-stack web application development using Django & Django REST Framework",
      "Building lightweight REST microservices with Flask and FastAPI",
      "Implementing secure user authentication, CRUD operations, and admin dashboards"
    ],
    realmAccent: "red"
  },
  {
    technique: "Winterfell Guard",
    tech_stack: "HTML5, CSS3 & JavaScript",
    tag: "WEB TECH",
    lore: "Designing clean, responsive, and cross-browser modern web interfaces.",
    desc: [
      "Mastery of semantic HTML5, CSS3 (Flexbox & CSS Grid), and modern ES6+ JavaScript",
      "Crafting mobile-responsive UI layouts with Bootstrap and smooth CSS animations",
      "Handling async API integrations, DOM updates, and interactive user experiences"
    ],
    realmAccent: "cyan"
  },
  {
    technique: "Iron Bank Vault",
    tech_stack: "MySQL & SQLite",
    tag: "DATABASES",
    lore: "Structuring and securing mission-critical data with optimized database queries.",
    desc: [
      "Designing relational database schemas in MySQL and SQLite",
      "Writing efficient SQL queries, indexes, and managing data relationships",
      "Ensuring strong data integrity, persistence, and reliable transaction processing"
    ],
    realmAccent: "emerald"
  },
  {
    technique: "Dragon Glass Components",
    tech_stack: "React & Component Architecture",
    tag: "REACT",
    lore: "Crafting modular, lightning-fast UI components for dynamic web applications.",
    desc: [
      "Building interactive Single Page Applications (SPAs) with React & TypeScript",
      "Managing state, custom hooks, and scalable frontend architectures",
      "Creating sleek, responsive user interfaces with smooth state transitions"
    ],
    realmAccent: "blue"
  },
  {
    technique: "Hand of the King Suite",
    tech_stack: "VS Code & Development Tools",
    tag: "TOOLS",
    lore: "Utilizing modern developer toolchains for efficient debugging and deployment.",
    desc: [
      "Expert environment setup in VS Code, live server, and terminal tooling",
      "Managing package installations, virtual environments, and debugging workflows",
      "Maintaining code quality with linting, formatting, and dev productivity tools"
    ],
    realmAccent: "indigo"
  },
  {
    technique: "The Raven Post Network",
    tech_stack: "Git & GitHub",
    tag: "GIT",
    lore: "Managing version history, branch workflows, and seamless project deployments.",
    desc: [
      "Mastering Git version control, commits, branching, and merge conflict resolution",
      "Collaborating via GitHub repositories, pull requests, and code reviews",
      "Deploying live applications on platforms like Vercel, Netlify, and GitHub Pages"
    ],
    realmAccent: "orange"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Urban Flood Nowcasting System",
    rank: "Valyrian Order (SIH Selected)",
    desc: "AI-powered urban flood early warning platform built for Smart India Hackathon (SIH26085). Fuses real-time IMD Doppler radar rainfall and municipal drainage data via a 6-stage AI pipeline to predict street/ward level flood risks before roads submerge. Includes live engineer dashboards and SMS fallback alerts.",
    highlightText: "A real-time disaster management AI pipeline coupling IMD rainfall radar and municipal drainage networks to provide street-level flood early warnings.",
    tech: ["Python", "AI / ML", "FastAPI", "Scikit-learn", "Disaster Mgmt", "SIH Selected"],
    img: "https://images.unsplash.com/photo-1547683905-f686c993aae5?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/mohitnarsinghani",
    live: "https://github.com/mohitnarsinghani"
  },
  {
    id: 2,
    title: "AI Power Grid Fault Detection System",
    rank: "Valyrian Order (AI-Nexus Selected)",
    desc: "Intelligent 3-phase power transmission line fault detection and classification platform built for AI-Nexus Hackathon. Combines hybrid CNN-LSTM Deep Learning, Discrete Wavelet Transform (DWT db4), Fast Fourier Transform (FFT) signal analytics, and an interactive Streamlit web dashboard with live signal waveform visualization and automated alert gauges.",
    highlightText: "An intelligent spatio-temporal deep learning network coupling DWT wavelet analytics and CNN-LSTM models for real-time 3-phase power grid fault detection.",
    tech: ["Python", "TensorFlow", "CNN-LSTM", "DWT / FFT", "Streamlit", "AI-Nexus Selected"],
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/mohitnarsinghani/Fault-Detection-System-in-Power-Lines-",
    live: "https://github.com/mohitnarsinghani/Fault-Detection-System-in-Power-Lines-"
  },
  {
    id: 3,
    title: "Forkly Chess WebApp",
    rank: "Valyrian Order",
    desc: "A full-stack chess web application featuring a polished, Chess.com-inspired UI. Powered by Stockfish 18 and FastAPI, it includes offline Pass & Play, ELO-scaled bot opponents (200–2800 ELO), dynamic tactical puzzle map with move evaluation from CSV datasets, and real-time game analysis with multi-PV engine evaluation and PGN parsing.",
    highlightText: "A tactical mind engine powered by Stockfish 18 and FastAPI, scaling strategic intelligence from novice to grandmaster level.",
    tech: ["React", "TypeScript", "FastAPI", "Python", "Stockfish 18"],
    img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/mohitnarsinghani/forkly-chess",
    live: "https://forkly-chess.vercel.app/"
  },
  {
    id: 4,
    title: "CineMate - Multi-OTT AI Engine",
    rank: "Valyrian Order",
    desc: "AI-powered Multi-OTT streaming recommendation web app built with React & Flask. Features TF-IDF Cosine Similarity engine across 1960+ titles, direct platform links (Netflix, Hotstar, Prime) & SQLite user watchlist.",
    highlightText: "An intelligent sensory engine analyzing 1960+ cinematic titles using TF-IDF cosine similarity to guide users directly to their desired entertainment.",
    tech: ["React", "Flask", "Python", "TF-IDF AI", "SQLite"],
    img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/mohitnarsinghani/CineMate",
    live: "https://cine-mate-nu.vercel.app/"
  },
  {
    id: 5,
    title: "Sweet Delight Bakery Management System",
    rank: "Valyrian Order",
    desc: "Full-stack, real-time commercial bakery management system built with Node.js, Express, MongoDB & Socket.IO. Features live WebSocket inventory updates, role-based JWT authentication, interactive owner sales analytics dashboard, automated PDF invoice generation with payment QR codes, and custom glassmorphism UI.",
    highlightText: "A real-time commercial bakery engine coupling WebSocket inventory broadcasts, JWT role authorization, and server-side PDF invoice generation.",
    tech: ["Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "PDFKit"],
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop",
    github: "https://github.com/mohitnarsinghani/Bakery-Management-System",
    live: "https://github.com/mohitnarsinghani/Bakery-Management-System"
  },
  {
    id: 6,
    title: "Restaurant Billing System",
    rank: "Maester Craft",
    desc: "A command-line Python application designed to generate, format, and calculate customer bills with itemized pricing and automated tax calculations.",
    highlightText: "An automated calculation technique engineered to streamline financial transactions, itemized bill generation, and tax auditing.",
    tech: ["Python", "CLI", "File I/O", "Automation"],
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/mohitnarsinghani/restaurant-billing-system",
    live: "https://github.com/mohitnarsinghani/restaurant-billing-system"
  },
  {
    id: 7,
    title: "Tweet Microblogging System",
    rank: "Maester Craft",
    desc: "Feature-rich Django microblogging web application supporting secure user authentication, timeline feed rendering, tweet CRUD operations, and customized user profiles.",
    highlightText: "A communication network service enabling secure message broadcasts, timeline feeds, and authenticated user profile interactions.",
    tech: ["Python", "Django", "HTML/CSS", "SQLite"],
    img: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/mohitnarsinghani/tweet-site",
    live: "https://github.com/mohitnarsinghani/tweet-site"
  },
  {
    id: 8,
    title: "Netflix Responsive Clone",
    rank: "Citadel Work",
    desc: "A responsive Netflix landing page clone developed using HTML5 and CSS3. Features responsive layouts with media queries, embedded video sections, Flexbox, CSS Grid, and interactive hover effects.",
    highlightText: "A visual interface design recreating high-fidelity streaming platforms with responsive CSS grid layout mastery.",
    tech: ["HTML5", "CSS3", "Flexbox", "CSS Grid"],
    img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/mohitnarsinghani/netflix-responsive-clone",
    live: "https://github.com/mohitnarsinghani/netflix-responsive-clone"
  }
];

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: "2025",
    title: "Python & Django Backend Intern — H&B Pvt. Ltd.",
    desc: "Developed and maintained backend modules and RESTful APIs using Django REST Framework. Designed and optimized database schemas with complex ORM-based queries, and built scalable application logic for business workflows and third-party API integrations.",
    rank: "MAESTER IN TRAINING"
  },
  {
    year: "2025",
    title: "Diploma in Computer Engineering",
    desc: "Graduated with an 8.5 CPI from Government Polytechnic, Gandhinagar, establishing a strong foundation in programming, data structures, web technologies, and software engineering.",
    rank: "VALYRIAN GRADUATE"
  },
  {
    year: "2025 – Present",
    title: "B.Tech in Computer Engineering (SALITER)",
    desc: "Admitted via Diploma-to-Degree (D2D) into Direct 2nd Year (Sem 3) at SAL Institute of Technology & Engineering Research. Mastering full-stack web development, Python, AI, and modern web frameworks.",
    rank: "HAND OF THE KING"
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    title: "SIH HACKATHON SELECTION",
    desc: "SELECTED IN SMART INDIA HACKATHON INTERNAL ROUND AT SALITER FOR BUILDING THE URBAN FLOOD NOWCASTING AI SYSTEM (SIH26085).",
    type: "ai"
  },
  {
    title: "DIPLOMA CE DISTINCTION",
    desc: "GRADUATED WITH AN OUTSTANDING 8.5 CPI IN DIPLOMA COMPUTER ENGINEERING FROM GOVERNMENT POLYTECHNIC, GANDHINAGAR.",
    type: "academic"
  },
  {
    title: "FULL-STACK & PYTHON DEVELOPER",
    desc: "ENGINEERED HIGH-PERFORMANCE APPLICATIONS INCLUDING FORKLY CHESS (STOCKFISH 18), CINEMATE AI ENGINE, AND DJANGO BACKENDS.",
    type: "api"
  }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/mohitnarsinghani",
  linkedin: "https://www.linkedin.com/in/mohit-narsinghani-432349395/",
  email: "mohitnarsinghani007@gmail.com",
  phone: "+91 9879475183",
  instagram: "https://www.instagram.com/mohitnarsinghani?igsh=MTZjOTJ3c3YydW90NA==",
  resume: "/RESUME_Mohit.pdf"
};
