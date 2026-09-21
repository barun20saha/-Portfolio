import { Python } from '@/components/icons/tech/Python';
import MongoDB from '@/components/icons/tech/MongoDB';
import LLM from '@/components/icons/tech/LLM';
import JavaScript from '@/components/icons/tech/JavaScript';
import ReactJs from '@/components/icons/tech/ReactIcon';

export const ProjectCardData = [
  {
    id: 1,
    title: 'Annapurna',
    subheading: 'AI-Powered Farming Companion',
    img: null,
    description:
      'Smart farming assistant using AI and agricultural data to help farmers make informed decisions.',
    links: {
      website: '',
      github: 'https://github.com/barun20saha',
      details: '/projects/annapurna',
    },
    technologies: [
      { name: 'Python', icon: <Python />, href: '#' },
      { name: 'AI Models', icon: <LLM />, href: '#' },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
  },
  {
    id: 2,
    title: 'SmartClass Manager',
    subheading: 'Real-time Classroom Allocation',
    img: null,
    description:
      'Real-time classroom allocation and maintenance management system.',
    links: {
      website: '',
      github: 'https://github.com/barun20saha',
      details: '/projects/smartclass',
    },
    technologies: [
      { name: 'JavaScript', icon: <JavaScript />, href: '#' },
      { name: 'React', icon: <ReactJs />, href: '#' },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
  },
  {
    id: 3,
    title: 'HRMS',
    subheading: 'Human Resource Management System',
    img: null,
    description:
      'Human Resource Management System built with Spring Boot and MongoDB Atlas.',
    links: {
      website: '',
      github: 'https://github.com/barun20saha/hrms_odoo',
      details: '/projects/hrms',
    },
    technologies: [
      { name: 'MongoDB', icon: <MongoDB />, href: '#' },
      { name: 'Java', href: '#' },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
  },
  {
    id: 4,
    title: 'Wheat/Rice Disease Detection',
    subheading: 'Deep-learning-based Classifier',
    img: null,
    description:
      'Deep-learning-based plant disease classification using EfficientNet.',
    links: {
      website: '',
      github: 'https://github.com/barun20saha/wheat-disease-classifier.git',
      details: '/projects/wheat',
    },
    technologies: [
      { name: 'Python', icon: <Python />, href: '#' },
      { name: 'Deep Learning', icon: <LLM />, href: '#' },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
  },
  {
    id: 5,
    title: 'Aqua Marine',
    subheading: 'Smart India Hackathon Project',
    img: null,
    description:
      'Smart India Hackathon project focused on solving a real-world problem through technology.',
    links: {
      website: '',
      github: 'https://github.com/barun20saha',
      details: '/projects/aquamarine',
    },
    technologies: [
      { name: 'Python', icon: <Python />, href: '#' },
      { name: 'AI Models', icon: <LLM />, href: '#' },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
  },
];
