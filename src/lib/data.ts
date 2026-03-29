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
    title: 'DevFolio',
    description: 'Built with Next.js 15 and TypeScript, featuring a built-in AI assistant powered by LangGraph and a FAISS-based RAG pipeline to sync GitHub repositories in real-time.',
    image: 'project-3',
    liveDemoUrl: 'https://robby-devfolio.vercel.app/',
    repoUrl: 'https://github.com/robbyjhay/robby-devfolio',
  },
  {
    id: 'project-2',
    title: 'FaceID Pro',
    description: 'An advanced facial recognition system using Python, Flask, and dlib. Supports live webcam identification and multi-camera analysis for identity detection.',
    image: 'project-1',
    liveDemoUrl: '#',
    repoUrl: 'https://github.com/robbyjhay/faceidpro-v1',
  },
  {
    id: 'project-3',
    title: 'Freshies Home & Properties',
    description: 'A full-stack real estate platform with complete backend integration using Node.js and MongoDB, featuring property listings and efficient database models.',
    image: 'project-2',
    liveDemoUrl: 'https://freshiesipl.vercel.app',
    repoUrl: 'https://github.com/robbyjhay/freshiesipl',
  },
  {
    id: 'project-4',
    title: 'AUNAPS School Website',
    description: 'A responsive platform for Anchor University Nursery and Primary School designed to improve digital presence and accessibility for parents and students.',
    image: 'project-4',
    liveDemoUrl: 'https://aunaps.vercel.app',
    repoUrl: 'https://github.com/robbyjhay/aunaps',
  },
];

export const skills: Skill[] = [
    { name: 'JavaScript', icon: Code2 },
    { name: 'TypeScript', icon: FileCode2 },
    { name: 'Python', icon: FileCode2 },
    { name: 'C', icon: FileCode2 },
    { name: 'C++', icon: FileCode2 },
    { name: 'SQL', icon: Database },
    { name: 'HTML5', icon: CodeSquare },
    { name: 'CSS3', icon: CodeSquare },
    { name: 'React.js', icon: Code2 },
    { name: 'Next.js', icon: Wind },
    { name: 'Node.js', icon: Server },
    { name: 'Express.js', icon: Server },
    { name: 'Flask', icon: Server },
    { name: 'MongoDB', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Supabase', icon: Database },
    { name: 'Firebase', icon: Database },
    { name: 'Computer Vision', icon: Code2 },
    { name: 'Facial Recognition', icon: Code2 },
    { name: 'NLP', icon: Code2 },
    { name: 'Prompt Engineering', icon: Code2 },
    { name: 'Google Cloud (Vertex AI)', icon: Server },
    { name: 'MTCNA (Networking)', icon: Wind },
];

export const name: string = "Okikioluwa Robert Jefferson";
export const bio: string = "Software Engineer specializing in both web development and artificial intelligence. I use modern tools like TypeScript to build intuitive interfaces and Python to integrate smart features like computer vision. Experienced in taking projects from the database all the way to a live website.";

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
  description?: string;
  previewImage?: string;
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
    description: 'Focusing on software engineering and AI. NCS (Membership No: 16941)',
  },
];

export const experience: Experience[] = [
  {
    title: 'Frontend Developer (Intern)',
    company: 'Sellinton',
    period: 'Aug 2025 – Oct 2025',
    responsibilities: [
      'Developed user-facing components including landing pages, authentication systems, and interactive dashboards.',
      'Contributed to checkout and payment flows and integrated frontend components with backend systems.',
    ],
  },
  {
    title: 'Frontend Developer (Volunteer)',
    company: 'AquilaCyber',
    period: 'Nov 2025 – Jan 2026',
    responsibilities: [
      'Translated Figma UI designs into responsive, production-ready interfaces using React and Next.js.',
      'Built a structured user dashboard using mock data to enable seamless handoff to backend developers.',
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: 'MTCNA (MikroTik Certified Network Associate)',
    issuer: 'MikroTik',
    date: '2026 March 12th',
    description: 'Professional Networking Certification',
    previewImage: '/mikrotik certificate.png', // Placeholder
  },
  {
    name: 'Computer Vision: Hero to Zero',
    issuer: 'Udemy Certificate',
    date: '2025',
    description: 'Online Course',
    previewImage: '/computer vision certificate.png', // Placeholder
  },
];

export const resumeSkills: ResumeSkillCategory[] = [
  { category: 'Languages', items: 'JavaScript, TypeScript, Python, C, C++, SQL, HTML5, CSS3' },
  { category: 'Frameworks', items: 'React.js, Next.js, Node.js, Express.js, Flask' },
  { category: 'Databases', items: 'MongoDB, PostgreSQL, Supabase, Firebase' },
  { category: 'AI & ML', items: 'Computer Vision, Facial Recognition, NLP (Foundations), Prompt Engineering, Google Cloud (Vertex AI)' },
  { category: 'Networking', items: 'MTCNA (MikroTik Certified Network Associate) specializing in routing, switching, and network security' },
];

export const resumeProjects: ResumeProject[] = [
  {
    name: 'DevFolio',
    description: 'Built with Next.js 15 and TypeScript, featuring a built-in AI assistant powered by LangGraph and a FAISS-based RAG pipeline to sync GitHub repositories in real-time.',
    links: [
      { name: 'GitHub', url: 'https://github.com/robbyjhay/robby-devfolio' },
    ],
  },
  {
    name: 'FaceID Pro',
    description: 'An advanced facial recognition system using Python, Flask, and dlib. Supports live webcam identification and multi-camera analysis for identity detection.',
    links: [
      { name: 'GitHub', url: 'https://github.com/robbyjhay/faceidpro-v1' },
    ],
  },
  {
    name: 'Freshies Home & Properties',
    description: 'A full-stack real estate platform with complete backend integration using Node.js and MongoDB, featuring property listings and efficient database models.',
    links: [
      { name: 'GitHub', url: 'https://github.com/robbyjhay/freshiesipl' },
    ],
  },
  {
    name: 'AUNAPS School Website',
    description: 'A responsive platform for Anchor University Nursery and Primary School designed to improve digital presence and accessibility for parents and students.',
    links: [
      { name: 'GitHub', url: 'https://github.com/robbyjhay/aunaps' },
    ],
  },
];

export const resumeCertDetails: ResumeCertDetail[] = [
  {
    label: 'MTCNA (MikroTik Certified Network Associate)',
    text: 'Professional Networking Certification. Issued by MikroTik on March 12, 2026.',
  },
  {
    label: 'Computer Vision: Hero to Zero',
    text: 'Online Course Udemy Certificate (2025).',
  },
];

// ---------- Achievements ----------

export type Achievement = {
  title: string;
  organization: string;
  description: string;
  date: string;
  previewImage?: string;
};

export const achievements: Achievement[] = [
  {
    title: 'Quest of Legends Hackathon',
    organization: '2nd Place',
    description: 'Achievement',
    date: '2024',
    previewImage: '/#',
  },
  {
    title: 'Coca-Cola Website Redesign Hackathon',
    organization: '3rd Place',
    description: 'Achievement',
    date: '2024',
    previewImage: '/#', 
  },
  {
    title: 'NCS (Membership No: 16941)',
    organization: 'Education/Professional Body',
    description: 'Ongoing',
    date: 'Ongoing',
    previewImage: '/NCS certificate.jpg', 
  },
];
