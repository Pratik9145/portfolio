export interface Skill {
  name: string;
  level?: number; // percentage level for visual indicators
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'frontend' | 'fullstack';
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  performance: string;
}

export interface Certification {
  name: string;
  issuer: string;
  link?: string;
}

export const personalInfo = {
  name: 'Pratik Choure',
  title: 'Frontend Developer & MERN Stack Developer',
  shortIntro: 'Frontend Developer passionate about building scalable web applications and modern user experiences using React.js and the MERN stack.',
  aboutMe: [
    'I am a Master of Computer Applications (MCA) student at the Indira College of Engineering and Management, Pune. I have a strong foundation in modern frontend architecture, JavaScript, React.js, and API integrations.',
    'Currently, I am working as a Full-Time Frontend Developer at Mitroz Technologies, where I translate design mocks into high-performance responsive interfaces and build reusable React components.',
    'I am highly interested in frontend engineering, user experience (UI/UX), state management patterns, and building scalable web products.'
  ],
  location: 'Pune, India',
  email: 'chourepratik456@gmail.com',
  github: 'https://github.com/pratik9145',
  linkedin: 'https://linkedin.com/in/pratik9145',
};

export const skills: Skill[] = [
  // Frontend
  { name: 'React.js', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 88, category: 'frontend' },
  { name: 'HTML5', level: 92, category: 'frontend' },
  { name: 'CSS3', level: 88, category: 'frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend' },
  { name: 'Bootstrap', level: 80, category: 'frontend' },
  { name: 'Zustand', level: 85, category: 'frontend' },
  { name: 'Formik', level: 80, category: 'frontend' },
  { name: 'TanStack Query', level: 82, category: 'frontend' },
  { name: 'React Router', level: 90, category: 'frontend' },
  { name: 'Axios', level: 90, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 78, category: 'backend' },
  { name: 'Express.js', level: 80, category: 'backend' },
  { name: 'REST APIs', level: 88, category: 'backend' },

  // Database
  { name: 'MongoDB', level: 75, category: 'database' },
  { name: 'MySQL', level: 72, category: 'database' },

  // Tools
  { name: 'Git', level: 88, category: 'tools' },
  { name: 'GitHub', level: 90, category: 'tools' },
  { name: 'Postman', level: 85, category: 'tools' },
  { name: 'VS Code', level: 92, category: 'tools' },
  { name: 'Chrome DevTools', level: 88, category: 'tools' },
];

export const experience: Experience[] = [
  {
    company: 'Mitroz Technologies',
    role: 'Frontend Developer',
    duration: 'Dec 2025 – Present',
    location: 'Pune, India (Full-Time)',
    description: [
      'Developing responsive frontend interfaces using React.js and integrating REST APIs for business workflows.',
      'Improving UI responsiveness, page load performance, and web accessibility standards.',
      'Working closely with modern state management libraries, custom hooks, and reusable UI component packages.',
      'Collaborating across the team using Git version control and GitHub for agile workflows.'
    ]
  }
];

export const projects: Project[] = [
  {
    title: 'Mushroom System (Workspace Management System)',
    description: 'A comprehensive workspace management system designed to help teams organize tasks, manage projects, and streamline collaboration efficiently.',
    longDescription: 'Mushroom System is a full-stack workspace management platform built for teams to manage projects, track tasks, organize workflows, and improve productivity. It provides an intuitive interface for collaboration, task assignment, and workspace organization with a modern and responsive user experience.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/pratikchoure/mushroom-system',
    liveUrl: '#',
    category: 'fullstack',
    featured: true

  },
  {
    title: 'InsightMate AI – Data Cleaning Platform',
    description: 'An interactive web dashboard for CSV parsing, statistical summary generation, null-value detection, and smart AI-suggested dataset cleaning operations.',
    longDescription: 'InsightMate AI allows developers and data analysts to upload raw datasets and automatically detect anomalies, format discrepancies, and missing values, outputting sanitized CSV files with rich visual charts.',
    techStack: ['React.js', 'Zustand', 'Tailwind CSS', 'ChartJS', 'Python', 'Flask'],
    githubUrl: 'https://github.com/pratikchoure/insightmate-ai',
    liveUrl: '#',
    category: 'fullstack',
    featured: true
  },
  {
    title: 'Project Management System',
    description: 'A full-featured Kanban board and workspace management tool with real-time task updates, assignment flows, deadline tracking, and team workspace creation.',
    longDescription: 'A collaborative project workspace application allowing users to sign up, build teams, allocate tasks inside boards, write notes, and track sprint deadlines with an interactive UI.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Axios'],
    githubUrl: 'https://github.com/pratikchoure/project-management-system',
    liveUrl: '#',
    category: 'fullstack',
    featured: false
  },
  {
    title: 'EyeCare Admin Panel',
    description: 'A professional hospital administration and patient management dashboard featuring user access controls, appointment calendars, and billing reports.',
    longDescription: 'A custom hospital analytics dashboard created for optometrists to store patient history, schedule refraction checks, manage optical inventory, and track invoice generation.',
    techStack: ['React.js', 'Tailwind CSS', 'React Router', 'ChartJS', 'Axios'],
    githubUrl: 'https://github.com/pratikchoure/eyecare-admin-panel',
    liveUrl: '#',
    category: 'frontend',
    featured: false
  },
  {
    title: 'Gym Frontend Website',
    description: 'A highly aesthetic fitness promotion website featuring membership plan selectors, training routine carousels, and smooth scroll animations.',
    longDescription: 'A marketing website designed for premium fitness brands. Employs advanced hover states, parallax-like scrolling effects, and dynamic layouts to encourage customer registrations.',
    techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    githubUrl: 'https://github.com/pratikchoure/gym-website',
    liveUrl: '#',
    category: 'frontend',
    featured: false
  }
];

export const certifications: Certification[] = [
  {
    name: 'Java Spring Framework 6',
    issuer: 'Udemy',
    link: '#'
  },
  {
    name: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    link: '#'
  },
  {
    name: 'Back End Development and APIs',
    issuer: 'freeCodeCamp',
    link: '#'
  }
];

export const education: Education[] = [
  {
    degree: 'MCA (Master of Computer Applications)',
    institution: 'Indira College of Engineering and Management, Pune',
    duration: '2024 – 2026',
    performance: 'CGPA 8.42'
  },
  {
    degree: 'BCA (Bachelor of Computer Applications)',
    institution: 'Marathwada Mitra Mandal\'s College of Commerce (MMCC), Pune',
    duration: '2021 – 2024',
    performance: 'CGPA 7.98'
  },
  {
    degree: 'HSC (12th Grade)',
    institution: 'Maharashtra State Board',
    duration: '2021',
    performance: '78.67%'
  },
  {
    degree: 'SSC (10th Grade)',
    institution: 'Maharashtra State Board',
    duration: '2019',
    performance: '69.80%'
  }
];
