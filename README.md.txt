# SearchMind AI

AI-powered SEO keyword research SaaS built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Supabase**, and **Vercel**.

SearchMind AI helps marketers, creators, agencies, and businesses discover valuable keywords, analyze search opportunities, organize SEO projects, and improve content strategies using AI.

---

# Features

## Core Platform

- AI-powered keyword research
- Search intent analysis
- Keyword difficulty scoring
- Related keyword discovery
- Long-tail keyword suggestions
- SEO project management
- Search history tracking
- Export center
- User profiles
- Admin dashboard

---

# Technology Stack

## Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Chart.js

## Backend

- Supabase PostgreSQL
- Supabase Auth
- Supabase Storage
- Server Actions
- API Routes

## Deployment

- Vercel
- Vercel Analytics

---

# Project Structure

```text
searchmind-ai/

├── app/
├── components/
├── features/
├── hooks/
├── lib/
├── services/
├── store/
├── types/
├── utils/
├── public/
├── styles/
│
├── middleware.ts
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
Requirements
Before starting, install:
Node.js 22+
npm, pnpm, or yarn
Supabase account
Vercel account
Check Node version:
node -v
Installation
Clone repository:
git clone https://github.com/yourusername/searchmind-ai.git
Enter project folder:
cd searchmind-ai
Install dependencies:
npm install
Environment Setup
Create environment file:
cp .env.example .env.local
Add Supabase credentials:
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
Development
Start development server:
npm run dev
Open:
http://localhost:3000
Production Build
Create production build:
npm run build
Start production server:
npm run start
Code Quality
Type checking:
npm run type-check
Linting:
npm run lint
Formatting:
npm run format
Deployment
Deploy with Vercel:
Push repository to GitHub.
Import project into Vercel.
Add environment variables.
Deploy.
Security
Includes preparation for:
Supabase Row Level Security
Protected routes
Secure environment variables
API validation
Rate limiting
Accessibility
Built with:
Semantic HTML
Keyboard navigation
Screen reader support
Responsive design
Focus management
SEO
Includes:
Metadata API
Open Graph support
Twitter cards
Sitemap generation
Robots configuration
Performance optimization
License
MIT License
Copyright © SearchMind AI

After this, the next file to create is **`app/layout.tsx`**.