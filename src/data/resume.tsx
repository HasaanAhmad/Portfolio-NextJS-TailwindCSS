import { Icons } from "@/components/icons";
import { url } from "inspector";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Hasaan Ahmad",
  initials: "HA",
  url: "https://hasaanahmad.me",
  location: "ISLAMABAD, PAKISTAN",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full Stack Web Developer (Currently using NEXTJS) and Digital Creator on Instagram. I build things for the web and make stuff for social media. You can check it out on instagram @hasaandotdev. ",
  summary:
    "My tech journey started when I was just 4—yep, I had a computer at that age, which was a big deal in my hometown! Fast forward to 2020, the year of Corona, while I was prepping for pre-engineering exams, I stumbled upon Python, and the rest is history. Now, I'm pursuing a BS in Software Engineering at [COMSATS Islamabad](https://www.comsats.edu.pk/), crafting websites with ReactJS, and leveling up to Next.js as a full-stack dev. Oh, and did I mention I've started sharing my tech musings on Instagram? You can find me at [@hasaandotdev💻✨](https://www.instagram.com/hasaandotdev).",
  avatarUrl: "/mine.png",
  skills: [
    "React",
    "NextJS",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express",
    "MongoDB",
    "Python",
    "Postgres",
    "Java",
    "C++",
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
      title: "Taskify Skiptrace",
      href: "https://www.lutrainingpvt.com/",
      dates: "Dec 2023 - Present",
      active: true,
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
      links: [
        {
          type: "Website",
          href: "https://www.lutrainingpvt.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "./Taskify.mp4",
    },
    {
      title: "LU Training",
      href: "https://www.lutrainingpvt.com/",
      dates: "Sep 2023 - Present",
      active: true,
      description:
        "An LMS for an academy that provides various courses like WordPress development and graphic designing. Build skills with our courses and mentors from world-class companies.",
      technologies: [
        "Next.js",
        "Firebase",
        "TailwindCSS",
        "TypeScript",
        "NextAuth",
        "EmailJS",
        ,
      ],
      links: [
        {
          type: "Website",
          href: "https://www.lutrainingpvt.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "./lutraining.mp4",
    },
    {
      title: "Realtime Object Identification",
      href: "https://real-time-object-identification.vercel.app/",
      dates: "May 2024 - Present",
      active: true,
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
      dates: "Jul 2023 - Present",
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
