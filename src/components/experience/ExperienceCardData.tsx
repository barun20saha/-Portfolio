import { Python } from "@/components/icons/tech/Python";
import LLM from "@/components/icons/tech/LLM";

import type { Experience } from "./types";

const ExperienceCardData: Experience[] = [
  {
    id: "adamas-university",
    companyName: "Adamas University",
    companyLogo: "/adamas.png",
    companyWebsite: "https://adamasuniversity.ac.in",
    isCurrentEmployer: true,
    positions: [
      {
        id: "btech-cse",
        title: "B.Tech in Computer Science & Engineering",
        employmentType: "Education",
        employmentPeriod: {
          start: "2021",
          end: "Present",
        },
        duration: "Current",
        location: "India",
        description: "Focus on Data Science. Experience includes academic projects, AI/ML experimentation, and hackathons.",
        skills: [
          {
            name: "Data Science",
            href: "#",
            icon: <Python />,
          },
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "ieee-cis",
    companyName: "IEEE CIS",
    companyLogo: "/ieee.png",
    companyWebsite: "#",
    isCurrentEmployer: false,
    positions: [
      {
        id: "intern",
        title: "Intern",
        employmentType: "Internship",
        employmentPeriod: {
          start: "May 2024",
          end: "July 2024",
        },
        duration: "3 mos",
        location: "India",
        description: "Internship involving Computer Vision, Deep Learning, Transformers, CLIP, ViT, Mamba, and PyTorch.",
        skills: [
          {
            name: "Computer Vision",
            href: "#",
            icon: <LLM />,
          },
          {
            name: "PyTorch",
            href: "#",
            icon: <Python />,
          },
        ],
        isExpanded: false,
      },
    ],
  },
];

export default ExperienceCardData;
