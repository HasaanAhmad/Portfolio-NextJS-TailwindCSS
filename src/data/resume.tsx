import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Hasaan Ahmad",
  initials: "HA",
  url: "https://hasaanahmad.vercel.app",
  location: "ISLAMABAD, PAKISTAN",
  locationLink: "https://www.google.com/maps/place/Islamabad",
  cvUrl:
    "https://drive.google.com/file/d/1MxxN3hsOIFLfqgiu6r-B6hHN5yhKosmi/view?usp=sharing",
  description:
    "Software Engineer specializing in ERPs, SaaS Apps, CRMs, and AI Chatbots. Founder of Nexus Core. Building scalable web applications and sharing tech knowledge—20k followers on Instagram, 1k subscribers on YouTube @hasaandotdev.",
  summary:
    "Software Engineer with 3+ years of experience building scalable SaaS platforms, ERP systems, and AI-powered web applications. Skilled in full-stack development, software architecture, and DevOps automation. Founder of **Nexus Core**—an AI-powered SaaS ERP. Experienced in designing intelligent systems and generative AI solutions for automation, chatbots, and agents. Working mainly on ERPs, SaaS Apps, CRMs, AI Chatbots, and workflows using Gemini, ChatGPT, Python, and RAG systems. Strong focus on performance, modularity, and cross-functional collaboration. Currently pursuing BS in Software Engineering at COMSATS Islamabad (GPA: 3.5/4.0) while creating tech content on [YouTube](https://www.youtube.com/@hasaandotdev) (1k subscribers) and [Instagram](https://www.instagram.com/hasaandotdev) (20k followers).",
  avatarUrl: "/me.jpg",
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "TailwindCSS",
    "LangChain",
    "OpenAI",
    "Gemini",
    "ChatGPT",
    "RAG Systems",
    "AI Chatbots",
    "Docker",
    "CI/CD",
    "WebSockets",
    "ShadCN",
    "Zustand",
    "Git",
    "Vercel",
    "Railway",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hasaanahmad10023@gmail.com",
    tel: "+923057564619",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/HasaanAhmad",
        icon: Icons.github,

        navbar: true,
      },
      Instagram: {
        name: "Instagram (20k followers)",
        url: "https://instagram.com/hasaandotdev",
        icon: Icons.instagram,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/hasaan-ahmad",
        icon: Icons.linkedin,

        navbar: true,
      },
      Youtube: {
        name: "YouTube (1k subscribers) @hasaandotdev",
        url: "https://youtube.com/@hasaandotdev",
        icon: Icons.youtube,
        navbar: true,
      },
      CV: {
        name: "Download CV",
        url: "https://drive.google.com/file/d/1MxxN3hsOIFLfqgiu6r-B6hHN5yhKosmi/view?usp=sharing",
        icon: Icons.fileText,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:hasaanahmad10023@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      Twitter: {
        name: "Twitter",
        url: "https://x.com/hasaandotdev",
        icon: Icons.x,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "DevoraOne",
      href: "https://devoraone.com",
      badges: [],
      location: "Remote – International",
      title: "Software Engineer",
      logoUrl: "/upwork.svg",
      start: "Jul 2025",
      end: "Present",
      description:
        "Lead development across multiple projects including ERP, logistics, and eCommerce systems. Architected scalable solutions, implemented CI/CD automation, and managed cloud infrastructure. Collaborated with global teams to deliver production-grade applications with modern DevOps workflows.",
    },
    {
      company: "Decimal Solutions",
      href: "#",
      badges: [],
      location: "Islamabad, Pakistan",
      title: "Software Engineer",
      logoUrl: "/upwork.svg",
      start: "Jul 2025",
      end: "Sep 2025",
      description:
        "Enhanced existing web applications and enforced clean architecture and maintainable code practices.",
    },
    {
      company: "SBM Consultants",
      href: "https://sb-mc.com",
      badges: [],
      location: "Islamabad, Pakistan",
      title: "Full-Stack Engineer",
      logoUrl: "/upwork.svg",
      start: "Nov 2024",
      end: "Jun 2025",
      description:
        "Developed SBM's official website and a high-performance MDX-based blog using Next.js and TailwindCSS.",
    },
    {
      company: "Nexus Core",
      href: "https://nexus-core.online",
      badges: ["Founder"],
      location: "Remote",
      title: "Full Stack Engineer & Architect",
      logoUrl: "/upwork.svg",
      start: "2024",
      end: "Present",
      description:
        "Architecting a SaaS-based, multi-tenant ERP with AI-driven automation, chatbots, and real-time analytics. Includes modular apps for HR, payroll, CRM, and inventory, with tenant-based routing and scalability. Tech: Next.js, PostgreSQL, Prisma, WebSockets, DNS-based multi-tenancy.",
    },
    {
      company: "YouTube",
      href: "https://www.youtube.com/@hasaandotdev",
      badges: ["1k subscribers"],
      location: "Remote",
      title: "Tech Content Creator",
      logoUrl: "/yt-logo.webp",
      start: "2024",
      end: "Ongoing",
      description:
        "Creating educational content about Next.js, web development, and AI. Sharing tutorials, coding tips, and project walkthroughs to help developers learn and grow.",
    },
    {
      company: "Instagram",
      href: "https://www.instagram.com/hasaandotdev",
      badges: ["20k followers"],
      location: "Remote",
      title: "Digital Creator",
      logoUrl: "Instagram.png",
      start: "Jul 2024",
      end: "Ongoing",
      description:
        "Creating tech reels and web development content on Instagram. Sharing insights, tutorials, and commentary with 20k+ followers.",
    },
  ],
  education: [
    {
      school: "COMSATS University Islamabad, Pakistan",
      href: "https://www.comsats.edu.pk/",
      degree: "Bachelor of Science in Software Engineering – GPA: 3.5/4.0",
      logoUrl: "/Comsats.jpg",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Nexus Core",
      href: "https://nexus-core.online",
      dates: "2024 - Present",
      active: true,
      description:
        "AI-powered SaaS ERP platform. Founder & Architect. Multi-tenant ERP with AI-driven automation, chatbots, and real-time analytics. Modular apps for HR, payroll, CRM, and inventory with tenant-based routing.",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Prisma",
        "WebSockets",
        "AI Chatbots",
        "Multi-tenancy",
        "Custom DNS",
      ],
      links: [
        {
          type: "Website",
          href: "https://nexus-core.online",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/nexus-core.png",
      video: "",
    },
    {
      title: "SBM Consultants",
      href: "https://sb-mc.com",
      dates: "Nov 2024 - Present",
      active: true,
      description:
        "Professional business consultancy website with integrated SEO-friendly blog system using MDX. Designed to enhance online presence and client engagement through modern web technologies.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "TypeScript",
        "MDX",
        "SEO",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://sb-mc.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "./sbmc.mp4",
    },
    {
      title: "TaxSoft",
      href: "https://taxsoft.pk",
      dates: "Apr 2024 - Jul 2024",
      active: true,
      description:
        "Comprehensive tax management platform featuring a responsive and user-friendly interface. Built with modern web technologies to ensure optimal performance across all devices.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "TypeScript",
        "PostgreSQL",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://taxsoft.pk",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "./taxsoft.mp4",
    },
    {
      title: "GoTaskify",
      href: "#",
      dates: "Nov 2023 - Mar 2024",
      active: false,
      description:
        "SaaS tool for skip tracing and lead management with Stripe-based subscriptions. Built for Carlos Pineda (CEO). Focused on UI speed, UX optimization, and maintainable architecture.",
      technologies: [
        "Next.js",
        "Firebase",
        "TailwindCSS",
        "TypeScript",
        "NextAuth",
        "Stripe",
      ],
      links: [],
      image: "",
      video: "./Taskify.mp4",
    },
    {
      title: "LU Training",
      href: "#",
      dates: "Sep 2023 - Dec 2023",
      active: false,
      description:
        "An LMS for an academy that provides various courses like WordPress development and graphic designing. Build skills with our courses and mentors from world-class companies.",
      technologies: [
        "Next.js",
        "Firebase",
        "TailwindCSS",
        "TypeScript",
        "NextAuth",
        "EmailJS",
      ],
      links: [],
      image: "",
      video: "./lutraining.mp4",
    },
    {
      title: "Realtime Object Identification",
      href: "https://real-time-object-identification.vercel.app/",
      dates: "May 2024 - Aug 2024",
      active: false,
      description:
        "A semester project for a university course. A Next.js app that uses YOLO model and the live camera of the device to detect objects. It is a progressive web app.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "TypeScript",
        "YOLO",
        "PWA",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://real-time-object-identification.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/HasaanAhmad/Realtime-Object-Identification-System-NextJS-YOLO-Human-Computer-Interaction",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./objectidentification.mp4",
    },
    {
      title: "Abstract Systems",
      href: "https://abstract-systems-prod.vercel.app/",
      dates: "Jul 2023 - Nov 2023",
      active: true,
      description:
        "A landing page for an agency that provides software solutions.",
      technologies: ["Next.js", "TailwindCSS", "TypeScript", "Vercel"],
      links: [
        {
          type: "Website",
          href: "https://abstract-systems-prod.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/HasaanAhmad/abstract-systems",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "./abstract.mp4",
    },
  ],
} as const;
