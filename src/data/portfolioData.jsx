import {
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub,
  FaJava, FaPython, FaPhp, FaLinux, FaDocker, FaAndroid,
  FaDatabase, FaServer, FaLeaf, FaBitcoin, FaHashtag,
  FaTerminal, FaNetworkWired, FaFigma,
} from 'react-icons/fa';
import { SiTailwindcss, SiKotlin, SiCplusplus, SiMysql, SiLaravel } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const skills = [
  { name: 'React JS', type: 'Web', icon: <FaReact className="text-blue-400" /> },
  { name: 'Laravel', type: 'Web', icon: <SiLaravel className="text-red-600" /> },
  { name: 'Tailwind', type: 'Web', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'JavaScript', type: 'Web', icon: <FaJs className="text-yellow-400" /> },
  { name: 'HTML5', type: 'Web', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', type: 'Web', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'PHP', type: 'Web', icon: <FaPhp className="text-indigo-400" /> },

  { name: 'Python', type: 'AI', icon: <FaPython className="text-blue-500" /> },
  { name: 'C++', type: 'AI', icon: <SiCplusplus className="text-blue-700" /> },

  { name: 'Java', type: 'Mobile', icon: <FaJava className="text-red-500" /> },
  { name: 'Kotlin', type: 'Mobile', icon: <SiKotlin className="text-cyan-500" /> },
  { name: 'Android Studio', type: 'Mobile', icon: <FaAndroid className="text-green-500" /> },
  { name: 'Jetpack Compose', type: 'Mobile', icon: <FaAndroid className="text-green-400" /> },

  { name: 'Linux', type: 'Infra', icon: <FaLinux className="text-black dark:text-white" /> },
  { name: 'Docker', type: 'Infra', icon: <FaDocker className="text-blue-500" /> },
  { name: 'Kubernetes (K3s)', type: 'Infra', icon: <FaServer className="text-blue-600" /> },
  { name: '5G Core', type: 'Infra', icon: <FaNetworkWired className="text-blue-400" /> },
  { name: 'Bash Script', type: 'Infra', icon: <FaTerminal className="text-slate-600 dark:text-slate-300" /> },
  { name: 'VirtualBox', type: 'Infra', icon: <FaServer className="text-slate-500" /> },

  { name: 'Git', type: 'Tools', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'GitHub', type: 'Tools', icon: <FaGithub className="text-slate-800 dark:text-white" /> },
  { name: 'SQL', type: 'Tools', icon: <SiMysql className="text-blue-600" /> },
  { name: 'SQL Server', type: 'Tools', icon: <FaDatabase className="text-red-500" /> },
  { name: 'VS Code', type: 'Tools', icon: <VscVscode className="text-blue-500" /> },
  { name: 'Figma', type: 'Tools', icon: <FaFigma className="text-cyan-400" /> },
  { name: 'Wireshark', type: 'Tools', icon: <FaNetworkWired className="text-blue-400" /> },
];

export const categories = ['All', 'Web', 'Mobile', 'AI', 'Infra', 'Tools'];

export const experiences = [
  {
    role: 'Lab Assistant for System Analysis & Design',
    org: 'Faculty of Computer Science (FILKOM) UB',
    year: 'Sep 2025 - Dec 2025',
    desc: 'Mentored students in understanding UML diagrams, System Requirements (SKPL), and Software Architecture. Evaluated final projects and provided technical feedback on system design documentation.',
  },
  {
    role: 'Lab Assistant for Advanced Programming',
    org: 'Faculty of Computer Science (FILKOM) UB',
    year: 'Feb 2025 - Jun 2025',
    desc: 'Assisted in teaching Object-Oriented Programming (OOP) concepts, Design Patterns, and Clean Code principles. Conducted code reviews and helped debug student programs in Java/Python.',
  },
];

export const blogs = [
  {
    title: 'Navigating Blockchain Security in the Cryptocurrency Era',
    desc: 'An analysis of 51% attack vulnerabilities in blockchain networks and the Proof of Stake (PoS) consensus solution for Gen Z digital investment security.',
    date: 'Jan 29, 2024',
    category: 'Fintech & Security',
    link: 'https://drive.google.com/file/d/1E0QItY4dQSDND9-zBSlJBwmckssPVsdK/view?usp=drive_link',
    icon: <FaBitcoin size={56} />,
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'IoT & Blockchain Innovation for Green Industry Taxation',
    desc: 'A concept for an environmental tax system using IoT Sensors (MQTT) and Blockchain to accurately and transparently detect industrial CO2 emissions.',
    date: 'Jul 25, 2024',
    category: 'IoT & Environment',
    link: 'https://drive.google.com/file/d/1_wyDL-rZPcbEf5VmfM-wtfXLaEN6BRLL/view?usp=drive_link',
    icon: <FaLeaf size={56} />,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Code-Mixing Phenomenon on Social Media X',
    desc: 'Identifying the practice of Indonesian-Korean (Hallyu Wave) code-mixing by Gen Z on Twitter/X and its impact on linguistic identity.',
    date: '2024',
    category: 'Social Research',
    link: 'https://drive.google.com/file/d/1obr5gPL_b9KKzpJMcPEus0NxiEVRNBnb/view?usp=drive_link',
    icon: <FaHashtag size={56} />,
    color: 'from-pink-500 to-rose-500',
  },
];

export const allProjects = [
  {
    title: 'Automated Dental Age Estimation',
    desc: 'Automated dental age estimation system based on Deep Learning using a hybrid YOLOv8 (object detection) and EfficientNet (classification) architecture.',
    images: ['https://wdeback.gitlab.io/img/opg.jpg'],
    link: 'https://drive.google.com/file/d/1vfXERK7ZB6X-l68c1XD62VH5g4rc2f5b/view',
    demoType: 'paper',
    github: 'https://github.com/Clydeew/YOLOv8s-and-EfficientNetB0-for-teeth-age-regression',
    tech: ['Python', 'YOLOv8', 'EfficientNet', 'Deep Learning'],
  },
  {
    title: 'TheraMind (CBT Platform)',
    desc: 'A mental health intervention platform integrated with CBT modules, recognized as a National Finalist in the Gemastik UI/UX competition.',
    images: ['/projects/CoverTheramind.png'],
    link: 'https://www.figma.com/proto/fyQ4FMToUS4aT93sDkFEn0/UI-Design-TheraMind',
    demoType: 'prototype',
    github: 'https://github.com/WAHYUDLP/theramind-ux',
    tech: ['System Analysis', 'Figma', 'UI/UX'],
  },
  {
    title: 'Smart Meal Planner',
    desc: 'A data-driven nutrition management system designed to optimize meal planning through automated BMR calculations and personalized diet tracking.',
    images: ['/projects/CoverBloodWellness2.png', '/projects/bloodwellness/page1.png', '/projects/bloodwellness/page2.png', '/projects/bloodwellness/page3.png', '/projects/bloodwellness/page4.png', '/projects/bloodwellness/page5.png', '/projects/bloodwellness/page6.png', '/projects/bloodwellness/page7.png'],
    link: null,
    demoType: 'inactive',
    github: 'https://github.com/WAHYUDLP/smart-meal-planner',
    tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind'],
  },
  {
    title: 'Plantify - Plant Care App',
    desc: 'A sleek native Android guide for plant enthusiasts, built with modern Jetpack Compose for a responsive and intuitive care experience',
    images: ['/projects/CoverPlantify.png'],
    link: 'https://www.figma.com/proto/oglJL6WBa9ZLOX9Ig8uxzK/Plantify',
    demoType: 'apk',
    github: 'https://github.com/orgs/Plantify-PAPB/repositories',
    tech: ['Kotlin', 'Jetpack Compose', 'Android'],
  },
  {
    title: '5G Core Network Simulation',
    desc: 'A complex End-to-End 5G network simulation deployed via Open5GS and Kubernetes to analyze cloud-native communication infrastructures',
    images: ['https://miro.medium.com/v2/resize:fit:1358/format:webp/1*l48MFToewAV_D9kosY4PFw.jpeg'],
    link: null,
    demoType: 'research',
    github: 'https://github.com/WAHYUDLP/5G-Network-Implementation',
    tech: ['Kubernetes', 'Docker', 'Linux', '5G Core'],
  },
  {
    title: 'Solar System Simulation',
    desc: 'An interactive 3D celestial visualization crafted with C++ and OpenGL, focusing on orbital mechanics and real-time rendering performance',
    images: ['/projects/tatasurya/all.png', '/projects/tatasurya/Jupiter.png'],
    link: null,
    demoType: 'local',
    github: 'https://github.com/WAHYUDLP/SolarSystem-OpenGL',
    tech: ['C++', 'OpenGL'],
  },
  {
    title: 'Pokemon Battle Game',
    desc: 'A Java-based turn-based combat game that demonstrates robust Object-Oriented Programming (OOP) principles and Swing GUI implementation.',
    images: ['/projects/gamepok/Login.png', '/projects/gamepok/Page 1.png', '/projects/gamepok/Page 2.png', '/projects/gamepok/Page 3.png', '/public/projects/gamepok/Page 4.png', '/projects/gamepok/Page 5.png', '/projects/gamepok/Page 6.png', '/projects/gamepok/Page 7.png'],
    link: null,
    demoType: 'local',
    github: 'https://github.com/WAHYUDLP/MiniPokemon',
    tech: ['Java', 'OOP', 'Swing'],
  },
];
