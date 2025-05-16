import { Icons } from "@/components/icons";
import { url } from "inspector";
import { HomeIcon, Twitter } from "lucide-react";

export const DATA = {
  name: "Hasaan Ahmad",
  initials: "HA",
  url: "https://hasaanahmad.vercel.app",
  location: "ISLAMABAD, PAKISTAN",
  locationLink: "https://www.google.com/maps/place/Islamabad",
  description:
    "Full Stack Software Engineer specializing in Next.js and Digital Creator. Building scalable web applications and sharing tech knowledge through YouTube and Instagram content.",
  summary:
    "Software Engineer with 2+ years of experience in full-stack web development and 10+ client projects delivered. Proficient in Next.js, React.js, and Node.js, with a strong focus on building scalable, user-focused applications. Experienced in leading small teams and effective communication. Currently pursuing BS in Software Engineering at COMSATS Islamabad while actively creating tech content on [YouTube](https://www.youtube.com/@hasaandotdev) and [Instagram](https://www.instagram.com/hasaandotdev). Passionate about clean code, performance, and collaborative problem-solving.",
  avatarUrl: "/profile.jpg",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Python",
    "Java",
    "C++",
    "TailwindCSS",
    "Firebase",
    "NextAuth",
    "Stripe",
    "Docker",
    "Git",
    "AWS",
    "REST APIs",
    "CI/CD",
    "SEO",
    "MDX",
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
        name: "Instagram",
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
        name: "Youtube",
        url: "https://youtube.com/@hasaandotdev",
        icon: Icons.youtube,
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
      company: "Upwork",
      href: "https://www.upwork.com/freelancers/~0147607dcb1792d71a",
      badges: [],
      location: "Remote",
      title: "Freelancer Web Developer",
      logoUrl: "/upwork.svg",
      start: "2022",
      end: " Ongoing",
      description:
        "As a full-stack web developer, I specialize in creating dynamic, responsive websites and applications using Next.js and Tailwind CSS, backed by robust databases like MongoDB and PostgreSQL. With experience on platforms like Upwork, I've successfully delivered high-quality solutions that meet clients' needs and exceed their expectations.",
    },
    {
      company: "YouTube",
      href: "https://www.youtube.com/@hasaandotdev",
      badges: ["Content Creator"],
      location: "Remote",
      title: "Tech Content Creator",
      logoUrl: "/yt-logo.webp",
      start: "2024",
      end: "Ongoing",
      description:
        "Creating educational content about Next.js and web development. Sharing tutorials, coding tips, and project walkthroughs to help developers learn and grow in their careers.",
    },
    {
      company: "Instagram",
      href: "https:www.instagram.com/hasaandotdev",
      badges: [],
      location: "Remote",
      title: "Digital Creator",
      logoUrl: "Instagram.png",
      start: "Jul 2024",
      end: " Ongoing",
      description:
        "Creating tech reels and web development content on Instagram. Sharing insights, tutorials, and fun commentary that have attracted over 8k followers in just 20 days—and still growing!",
    },
    {
      company: "GDSC CUI",
      badges: ["CO LEAD"],
      href: "",
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/gdsc.png",
      start: "Sep 2023",
      end: "Feb 2024",
      description:
        "As the Co-Lead of GDSC CUI, I played a key role in leading web development initiatives, mentoring students, and organizing events to foster a collaborative learning environment. My focus was on guiding the team in building impactful projects using the latest web technologies, helping our university community grow in technical expertise and innovation.",
    },
  ],
  education: [
    {
      school: "COMSATS Univeristy Islamabad",
      href: "https://www.comsats.edu.pk/",
      degree: "Bachelors in Software Engineering",
      logoUrl: "/Comsats.jpg",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Nexus Core",
      href: "#",
      dates: "2024 - Present",
      active: true,
      description:
        "Enterprise-grade SaaS ERP platform integrating business operations, AI automation, and custom domain support. Streamlines workflows, inventory, payroll, and project management for service-based organizations.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "PostgreSQL",
        "Docker",
        "AWS",
        "AI Integration",
        "Custom DNS",
      ],
      links: [
      
      ],
      image: "",
      video: "./nexuscore.mp4",
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
      title: "Taskify Skiptrace",
      href: "#",
      dates: "Dec 2023 - Mar 2024",
      active: false,
      description:
        "Leading Skip Tracing Solutions Catering to Real Estate Investors.",
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
