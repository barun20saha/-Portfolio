# Barun Saha | Full Stack Developer Portfolio

> A modern, interactive portfolio website built with **Next.js 15**, **React 19**, and **Tailwind CSS v4**. Showcases projects, work experience, skills, and technical articles with smooth animations and a clean, minimalist design.

---

## 🚀 Live Demo

[Visit Portfolio](https://barunsaha.dev) *(Update this with your actual deployment link)*

---

## ✨ Features

- **Theme Support** — Dark and light mode with system preference detection, persisted in local storage
- **Minimalist Aesthetic** — Professional, ultra-clean UI with no unnecessary borders or clutter
- **Smooth Animations** — Fluid transitions using Framer Motion for UI elements
- **Responsive Design** — Mobile-first approach ensuring perfect display on all devices
- **Photo Gallery** — High-performance image grid utilizing Next.js Image optimization
- **Project Showcase** — Detailed project pages with live demo links, GitHub repositories, technology stacks, and timelines
- **Contact Form** — Fully functional form with Zod validation, integrated with Appwrite backend
- **GitHub Activity** — Live GitHub contribution calendar integration
- **SEO Optimized** — Native Next.js Metadata API for automatic meta tags, Open Graph, and sitemap generation

---

## 🛠 Tech Stack

| Category          | Technologies                                               |
| ----------------- | ---------------------------------------------------------- |
| **Framework**     | Next.js 15 (App Router), React 19                         |
| **Language**      | TypeScript                                                |
| **Styling**       | Tailwind CSS v4, @tailwindcss/postcss                     |
| **Animations**    | Motion (Framer Motion v12)                                |
| **Forms**         | React Hook Form, Zod v4, @hookform/resolvers              |
| **Backend**       | Appwrite, node-appwrite (server-side)                     |
| **Markdown**      | react-markdown, remark-gfm, rehype-highlight, gray-matter |
| **Icons**         | Lucide React, Custom SVG components, Tabler Icons         |
| **Analytics**     | Vercel Analytics                                          |

---

## 💻 Getting Started

### Prerequisites
- **Node.js** 22.13 or higher
- **pnpm** package manager (recommended)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/barun20saha/-Portfolio.git
cd -Portfolio
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Set up environment variables**
Copy the example file and fill in your values:
```bash
cp .env.example .env
```

4. **Start the development server**
```bash
npm run dev
```
The app will be available at `http://localhost:3000`

---

## 📝 Configuration

### Adding a New Project
1. Create a markdown file in `src/data/projects/`.
2. Add project data to `src/config/projects/ProjectCardData.jsx`.

### Adding a New Blog Post
1. Create a markdown file in `src/data/blogs/`.
2. Add blog data to `src/config/blog/BlogCardData.jsx`.

---

## 🚀 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).
1. Push your code to GitHub.
2. Import the repository in Vercel.
3. Add your environment variables in the Vercel dashboard.
4. Deploy!

---

## 👏 Acknowledgments

- **The UI Company** — For the exceptional UI development, components, and overall interface design of this portfolio.

---

## 📄 License

MIT License — feel free to use this project as a reference for your own portfolio.
