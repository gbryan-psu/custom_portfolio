# Gabien Bryan Portfolio

A polished personal portfolio built to support my transition from Quality Engineering into Software Engineering. The site presents my professional story, project work, automation experience, and contact paths in a responsive Next.js application that I can continue evolving as my experience grows.

The portfolio is live at [gabien-bryan.com](https://gabien-bryan.com).

## Why This Exists

This project is both a public portfolio and a hands-on software engineering project. I wanted something more personal than a static resume: a site that shows how I think about product quality, frontend development, automation, CI/CD, and reliable delivery.

The content focuses on my current professional direction:

- Quality Engineer transitioning into Software Engineering
- React and TypeScript product development work
- Playwright automation framework ownership
- CI/CD improvements and release validation
- Practical project work across frontend, automation, and embedded systems

## Feature Highlights

- Multi-page portfolio built with the Next.js App Router
- Responsive layout across home, about, projects, hobbies, and contact pages
- Shared content model for profile metadata, navigation, homepage cards, project cards, and page copy
- Reusable component system for page shells, heroes, section intros, actions, cards, and dialogs
- Custom dark visual design with CSS variables, Tailwind CSS v4, animated background accents, and Google font loading through `next/font`
- Search and social metadata with Open Graph, Twitter card data, structured JSON-LD, sitemap, and robots configuration
- Accessible contact modal with focus management, Escape handling, validation, disabled sending state, and status toasts
- Contact API protections including field limits, request body size checks, honeypot handling, basic in-memory rate limiting, email validation, HTML escaping, and safe error responses
- ESLint, Prettier, TypeScript, and Tailwind class sorting for code quality

## Tech Stack

| Area      | Tools                                                                     |
| --------- | ------------------------------------------------------------------------- |
| Framework | Next.js 16 App Router                                                     |
| UI        | React 19, TypeScript                                                      |
| Styling   | Tailwind CSS v4, CSS custom properties                                    |
| Icons     | Lucide React, React Icons                                                 |
| Email     | Nodemailer                                                                |
| Quality   | ESLint 9, Prettier 3, `eslint-config-next`, `prettier-plugin-tailwindcss` |
| Build     | Turbopack through Next.js                                                 |

## Project Structure

```text
src
|-- app
|   |-- api/contact/route.ts     # Contact form API route
|   |-- about/page.tsx           # About page
|   |-- contact/page.tsx         # Contact page
|   |-- hobbies/page.tsx         # Hobbies page
|   |-- projects/page.tsx        # Projects page
|   |-- layout.tsx               # Root layout, metadata, fonts, JSON-LD
|   |-- page.tsx                 # Home page
|   |-- robots.ts                # Robots configuration
|   |-- sitemap.ts               # Sitemap configuration
|   `-- app.css                  # Global styles and design tokens
|-- components
|   |-- general                  # Shared layout, hero, nav, dialog, and section components
|   `-- home                     # Home-specific cards and background effects
`-- lib
    |-- content.ts               # Site copy, profile metadata, navigation, cards, and project data
    |-- types.ts                 # Shared TypeScript types
    `-- utils.ts                 # Utility helpers
```

Most page content is centralized in `src/lib/content.ts`, which keeps the route components focused on layout and presentation.

## Getting Started

### Prerequisites

- Node.js 20 or newer recommended
- npm, which is used by the included `package-lock.json`

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Environment Variables

The site can run without email configuration, but the contact form API will return `Message service unavailable` unless Gmail credentials are provided.

Create a local `.env.local` file when testing the contact form:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-gmail-app-password
```

For Gmail, `GMAIL_PASS` should be an app password rather than the normal account password. The API route uses `GMAIL_USER` as both the authenticated sender and recipient.

## Contact API Notes

The contact endpoint lives at `src/app/api/contact/route.ts` and accepts `POST` requests with this shape:

```json
{
  "name": "Optional name",
  "email": "sender@example.com",
  "message": "Message body",
  "website": ""
}
```

The `website` field is a honeypot used by the form. If it contains a value, the API returns a successful response without sending email.

Current safeguards include:

- Maximum request body size of 8 KB
- Maximum field lengths for name, email, message, and honeypot values
- Required email and message validation
- Basic email format validation
- In-memory rate limit of 5 requests per 15 minutes per client IP
- HTML escaping before building the email body
- Generic server responses for failed mail delivery

## Design and Implementation Notes

This project intentionally keeps the architecture simple. It is a personal site, so the main goal is clarity rather than heavy abstraction.

- Page routes compose shared components instead of duplicating hero and section markup.
- Content is stored as typed data in `src/lib/content.ts`, making it easy to revise the portfolio copy without changing component logic.
- Global styling lives in `src/app/app.css`, with CSS variables defining the core color palette, panel treatments, typography hooks, and animation primitives.
- The root layout owns SEO metadata, social preview configuration, font loading, JSON-LD structured data, and the persistent navigation.
- The contact dialog is a client component because it manages modal state, form state, focus behavior, validation, and async submission.
- The contact API stays server-side so credentials are never exposed to the browser.

## Deployment

This app is designed for deployment on Vercel or any platform that supports Next.js App Router applications.

For production contact form support, configure these environment variables in the hosting provider:

- `GMAIL_USER`
- `GMAIL_PASS`

The public site URL is currently set in `src/lib/content.ts` as `https://gabien-bryan.com` and is used by metadata, sitemap generation, and structured data.

## About Me

I am Gabien Bryan, a Quality Engineer at Minitab moving intentionally toward Software Engineering. My recent work combines product development support, React and TypeScript implementation, test automation framework ownership, release validation, CI/CD improvements, and practical debugging across real user workflows.

You can find me on [GitHub](https://github.com/gbryan-psu) and [LinkedIn](https://www.linkedin.com/in/gabien-bryan-a0a460159/).
