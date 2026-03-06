# Alvin Lam - Personal Portfolio

A personal portfolio website built to showcase my projects, technical skills, and professional profile as an aspiring software engineer and quantitative developer.

## About

This site serves as my online portfolio, featuring:

- **Hero Section** - A brief introduction and professional summary.
- **Tech Stack** - A categorised overview of technologies I know and am currently learning, displayed with icons and visual indicators.
- **Projects** - Highlighted projects with descriptions, tech stack icons, and links to live demos and GitHub repositories.
- **Get in Touch** - Contact cards linking to my LinkedIn and GitHub profiles.
- **Dark / Light Mode** - A theme toggle that persists the user's preference across sessions.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) and [Devicon](https://devicon.dev/)
- **Fonts**: Inter, JetBrains Mono (via Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
git clone https://github.com/Alfin0226/website.git
cd website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/
    layout.tsx       # Root layout with theme provider and metadata
    page.tsx         # Main page with all sections
    globals.css      # Global styles, theme variables, and component styles
  components/
    Navbar.tsx       # Floating bottom navigation bar
    ProjectCard.tsx  # Project card with tech icons and links
    Section.tsx      # Reusable animated section wrapper
    ThemeProvider.tsx # Dark/light mode context provider
    Typewriter.tsx   # Typing animation component
    ui/              # Base UI primitives (Card, Badge)
  lib/
    utils.ts         # Utility functions (cn for class merging)
```

## Licence

This project is for personal use.
