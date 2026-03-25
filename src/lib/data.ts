import { Github, Linkedin, Instagram, Codepen, Mail, Wind, Database, Server, FileCode2, RectangleHorizontal, Code, Code2, CodeSquare } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type SocialLink = {
    name: string;
    url: string;
    icon: LucideIcon;
};

type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    liveDemoUrl: string;
    repoUrl: string;
};

type Skill = {
    name: string;
    icon: LucideIcon;
};

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/robbyjhay', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/okikioluwa-jefferson/', icon: Linkedin },
  { name: 'Twitter', url: 'https://twitter.com/robby_jhay', icon: Github },
  { name: 'Gmail', url: 'mailto:jeffersonokikioluwa@gmail.com', icon: Mail }
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform-Backend',
    description: 'This project provides a RESTful API for managing e-commerce operations such as user authentication, category management, product management, and cart functionality. It is built using Node.js, Express.js, and MongoDB, and includes features like JWT-based authentication, CRUD operations for categories and products, and cart management with quantity updates.',
    image: 'project-1',
    liveDemoUrl: 'https://documenter.getpostman.com/view/34764585/2sA3JQ3yun',
    repoUrl: 'https://github.com/deveshyaara/E-Commerce-Backend.git',
  },
  {
    id: 'project-2',
    title: 'WealthWise-AI Finance Platform',
    description: 'Built a modern, AI-powered personal finance management platform that enables users to track income and expenses, manage multiple financial accounts, set budgets, and gain personalized financial insights. The platform includes a Google Gemini-powered receipt scanner to automatically extract transaction details from images, as well as features for recurring transactions, monthly financial reports, budget alerts, and interactive visual analytics.',
    image: 'project-2',
    liveDemoUrl: 'https://wealthwise.devesh.co.in/',
    repoUrl: 'https://github.com/deveshyaara/WealthWise',
  },
  {
    id: 'project-3',
    title: 'Portfolio Website',
    description: 'Devfolio is a personal portfolio website that displays a developer’s projects, technical skills, certifications, and contact information. It serves as an interactive online resume, allowing visitors to view detailed overviews of completed work, technology expertise, and ways to connect or collaborate.',
    image: 'project-3',
    liveDemoUrl: 'https://devfolio-taupe.vercel.app/',
    repoUrl: 'https://github.com/deveshyaara/devfolio.git',
  },
  {
    id: 'project-4',
    title: 'Healthlink-Etherium Health Records',
    description: 'HealthLink is a decentralized health records management system built on the Ethereum blockchain. It allows patients to securely store and share their medical records with healthcare providers, ensuring data integrity and privacy through blockchain technology. The platform includes features for record creation, access control, and audit trails.',
    image: 'project-4',
    liveDemoUrl: 'https://healthlink.devesh.co.in/',
    repoUrl: 'https://github.com/deveshyaara/Healthlink_RPC.git',
  },
  {
    id: 'project-5',
    title: 'QR Mapper - Badge to Ticket Linker',
    description: 'A staff-facing QR mapping tool that links pre-printed badge QR codes to dynamic event ticket URLs. Staff scan a badge then scan the attendee\'s QR ticket to create a mapping in Supabase. When attendees later scan their own badge, they are instantly redirected to their ticket page. Built with Next.js 16 (App Router, TypeScript), Supabase (PostgreSQL), Tailwind CSS v4, and @yudiel/react-qr-scanner for camera-based scanning.',
    image: 'project-5',
    liveDemoUrl: 'https://qr-mapper-mu.vercel.app/',
    repoUrl: 'https://github.com/deveshyaara/qr-mapper',
  },
  {
    id: 'project-6',
    title: 'Chat Application',
    description: 'A full-stack web chat application that allows users to create accounts, search for other users, and communicate through text messages, voice messages, multimedia files, documents, and links.',
    image: 'project-1', // Reusing placeholder for now
    liveDemoUrl: '#',
    repoUrl: 'https://github.com/robbyjhay',
  },
  {
    id: 'project-7',
    title: 'Quest of Legends Landing Page',
    description: 'A fantasy adventure game landing page developed for a hackathon. The project includes dynamic UI sections such as a hero section, game trailer, character showcase, and interactive design elements. This project won 2nd place in a hackathon.',
    image: 'project-2', // Reusing placeholder
    liveDemoUrl: '#',
    repoUrl: 'https://github.com/robbyjhay',
  },
  {
    id: 'project-8',
    title: 'Coca-Cola Website Redesign',
    description: 'A user interface and experience redesign of the Coca-Cola website created during a hackathon challenge. The project focused on improving layout structure and user experience, earning 3rd place in the competition.',
    image: 'project-3', // Reusing placeholder
    liveDemoUrl: '#',
    repoUrl: 'https://github.com/robbyjhay',
  },
  {
    id: 'project-9',
    title: 'Anchor University Nursery & Primary School Website',
    description: 'Designed and developed a modern responsive website for a school to improve its online presence and accessibility.',
    image: 'project-4', // Reusing placeholder
    liveDemoUrl: '#',
    repoUrl: 'https://github.com/robbyjhay',
  },
];

export const skills: Skill[] = [
    { name: 'JavaScript', icon: Code2 },
    { name: 'Python', icon: FileCode2 },
    { name: 'C++', icon: FileCode2 },
    { name: 'HTML', icon: CodeSquare },
    { name: 'CSS', icon: CodeSquare },
    { name: 'Responsive Web Design', icon: RectangleHorizontal },
    { name: 'Modern UI Design', icon: Code },
    { name: 'API Integration', icon: Server },
    { name: 'Automation Systems', icon: Server },
    { name: 'Application Logic Development', icon: Server },
    { name: 'Git', icon: Github },
    { name: 'GitHub', icon: Github },
    { name: 'Google Apps Script', icon: Code },
    { name: 'VS Code', icon: CodeSquare },
    { name: 'Artificial Intelligence', icon: Code2 },
    { name: 'Machine Learning', icon: Code2 },
];

export const name: string = "Okikioluwa Robert Jefferson";
export const bio: string = "I am Okikioluwa Robert Jefferson, a Computer Science student at Anchor University, Lagos and a full-stack software developer passionate about building modern web applications and intelligent digital systems. I enjoy designing complete solutions — from user interfaces on the frontend to application logic and system functionality on the backend.";

// ---------- Resume / shared data ----------

export type Education = {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  description: string;
};

export type Experience = {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  link?: string;
};

export type ResumeSkillCategory = {
  category: string;
  items: string;
};

export type ResumeProject = {
  name: string;
  description: string;
  links: { name: string; url: string }[];
};

export type ResumeCertDetail = {
  label: string;
  text: string;
  link?: string;
};

export const education: Education[] = [
  {
    degree: 'Bachelor of Science (BSc) – Computer Science',
    institution: 'Anchor University, Lagos',
    location: 'Lagos, Nigeria',
    period: '2023 September – Present',
    description: 'Focusing on software engineering and AI. Udemy and NCS (Membership No: 16941)',
  },
];

export const experience: Experience[] = [
  {
    title: 'Frontend Developer (Intern)',
    company: 'Sellinton',
    period: '2025 AUG',
    responsibilities: [
      'Built and optimized responsive web interfaces using React.js, Tailwind CSS, and JavaScript improving load speed by 30%.',
      'Collaborated with team members in agile sprints to deliver new features ahead of deadlines.',
      'Enhanced UI performance and fixed cross-browser compatibility issues, improving user experience.',
    ],
  },
  {
    title: 'FullStack Web Developer (Volunteer)',
    company: 'Aquila Cyber',
    period: '2025',
    responsibilities: [
      'Built and optimized responsive web interfaces using React.js, Tailwind CSS, and JavaScript improving load speed by 30%.',
      'Collaborated with team members in agile sprints to deliver new features ahead of deadlines.',
      'Enhanced UI performance and fixed cross-browser compatibility issues, improving user experience.',
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: 'AI/ML & Data Science Training',
    issuer: 'LCDA Ojodu',
    date: 'Nov: 2025',
  },
  {
    name: 'MikroTik Certified Network Associate (MTCNA)',
    issuer: 'MikroTik',
    date: 'March 12, 2026',
  },
  {
    name: 'Completion Certificate',
    issuer: 'Udemy',
    date: '2024',
    link: '/resume.pdf', // Placeholder for download
  },
];

export const resumeSkills: ResumeSkillCategory[] = [
  { category: 'Languages', items: 'JavaScript, Python, C++, HTML, CSS' },
  { category: 'Frontend', items: 'Responsive Web Design, Modern UI Design' },
  { category: 'Backend', items: 'API Integration, Automation Systems, Application Logic Development' },
  { category: 'Tools', items: 'Git, GitHub, Google Apps Script, VS Code' },
];

export const resumeProjects: ResumeProject[] = [
  {
    name: 'Chat Application | Full-Stack',
    description: 'A full-stack web chat application that allows users to communicate through text messages, voice messages, multimedia files, documents, and links.',
    links: [
      { name: 'GitHub', url: 'https://github.com/robbyjhay' },
    ],
  },
  {
    name: 'Quest of Legends Landing Page | Hackathon Winner',
    description: 'Fantasy adventure game landing page with dynamic UI sections. Won 2nd place in a hackathon.',
    links: [
      { name: 'GitHub', url: 'https://github.com/robbyjhay' },
    ],
  },
  {
    name: 'Coca-Cola Website Redesign | Hackathon Winner',
    description: 'UI/UX redesign focused on improving layout structure and user experience. Earned 3rd place in the competition.',
    links: [
      { name: 'GitHub', url: 'https://github.com/robbyjhay' },
    ],
  },
];

export const resumeCertDetails: ResumeCertDetail[] = [
  {
    label: 'AI/ML & Data Science Training',
    text: 'Training in AI/ML and Data Science issued by LCDA Ojodu in November 2025.',
  },
  {
    label: 'MTCNA',
    text: 'Demonstrates knowledge of networking fundamentals including IP addressing, routing, firewall configuration, bandwidth management, and MikroTik RouterOS administration.',
  },
];

// ---------- Achievements ----------

export type Achievement = {
  title: string;
  organization: string;
  description: string;
};

export const achievements: Achievement[] = [
  {
    title: '2nd Place – Hackathon',
    organization: 'Hackathon',
    description: 'Quest of Legends Project',
  },
  {
    title: '3rd Place – Hackathon',
    organization: 'Hackathon',
    description: 'Coca-Cola Website Redesign',
  },
  {
    title: 'Assistant General Secretary',
    organization: 'Computer Science Department',
    description: 'Coordinating communication and student activities.',
  },
  {
    title: 'Course Representative',
    organization: 'Anchor University',
    description: 'Representing students in the department.',
  },
];
