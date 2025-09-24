# Personal Portfolio

A modern, responsive portfolio website built with the latest web technologies. This project showcases professional experience through a clean, performant interface.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Frontend**: [React 19](https://react.dev) with TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with CSS-in-JS theming
- **Build Tool**: [Turbopack](https://turbo.build/pack) for fast development builds
- **Icons**: [Lucide React](https://lucide.dev) for scalable vector icons
- **Code Quality**: ESLint + Prettier with Tailwind class sorting
- **Utilities**: clsx + tailwind-merge for conditional styling

## Features

- Modern, clean interface optimized for performance
- CSS-based theming with CSS custom properties
- Built with Next.js 15 and Turbopack for optimal build performance
- TypeScript for type safety and better developer experience
- Responsive design principles

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:

```bash
git clone [your-repo-url]
cd my-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx         # Home page
│   ├── about/           # About page
│   ├── layout.tsx       # Root layout
│   └── app.css          # Global styles and theme variables
├── components/          # Reusable React components
├── utils/              # Utility functions
└── lib/                # Additional utilities and configurations
```

## Development

The project uses modern development tooling:

- **Turbopack**: Fast builds and hot module replacement
- **TypeScript**: Static type checking
- **ESLint**: Code linting and quality enforcement
- **Prettier**: Code formatting with Tailwind class sorting

## Deployment

### Build for Production

```bash
npm run build
npm start
```

The project is optimized for deployment on modern hosting platforms like Vercel, Netlify, or similar services.

## License

This project is open source and available under the [MIT License](LICENSE).
