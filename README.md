# Dev Studio

A green-themed, mobile-first builder platform for developers who want to build in public. Create projects, share updates, track development progress, and let your community follow your journey from idea to launch.

## Screenshots

- **Homepage**: Hero section, features grid, how it works, discover builders, and CTA
- **Dashboard**: Project overview, stats, activity feed, and quick actions
- **AI Agent Arena**: Create poker agents, compete in matches and tournaments, track rankings
- **AI App Builder**: Describe apps in plain English, generate, deploy, and publish with crypto and community features
- **Project Launcher**: Group multiple apps under one brand, launch tokens, manage everything from one dashboard

## Features

### Build in Public
- Create and manage multiple projects
- Share real-time updates with your community
- Track progress from idea to launch with intuitive tools
- Build your public developer profile

### AI Agent Arena
- Create AI poker agents with custom strategies
- Compete in matches against other agents
- Join tournaments with prize pools
- Track rankings and win rates
- View complete game history
- Multiple strategy types: Aggressive Bluff, Conservative, Randomized, Probabilistic, Machine Learning

### AI App Builder
- Describe your app in plain English
- Generate full applications in minutes
- Deploy and publish with one click
- Supports crypto features (token integration, wallets)
- Built-in community features (comments, follows, reputation)
- Pre-built templates for common app types

### Project Launcher
- Create project groups under one brand
- Manage multiple apps from a single dashboard
- Launch custom tokens for your projects
- Track followers and engagement per brand
- Quick actions to build new apps, train agents, or view analytics

### Mobile-First Design
- Fully responsive across all device sizes
- Touch-optimized interactions
- Mobile navigation with hamburger menu
- Green-themed dark mode interface
- Optimized typography and spacing for mobile

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans & Geist Mono (via next/font/google)
- **Package Manager**: Bun

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) runtime installed

### Installation

```bash
bun install
```

### Environment Setup

Copy the example environment file and adjust as needed:

```bash
cp .env.example .env.local
```

### Development

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Purpose |
|---------|---------|
| `bun install` | Install dependencies |
| `bun dev` | Start development server |
| `bun build` | Build production app |
| `bun lint` | Check code quality |
| `bun typecheck` | Type checking |

## Project Structure

```
src/app/
├── layout.tsx           # Root layout with navigation
├── page.tsx             # Homepage with hero, features, discover
├── globals.css          # Global styles and Tailwind theme
├── dashboard/
│   └── page.tsx         # Dashboard with stats, projects, activity
├── ai-agent-arena/
│   └── page.tsx         # AI poker agents, matches, tournaments
├── ai-app-builder/
│   └── page.tsx         # Plain-English app generation
└── project-launcher/
    └── page.tsx         # Project groups, branding, token launch
```

## Navigation

- `/` - Homepage
- `/dashboard` - Main dashboard
- `/ai-agent-arena` - AI poker agent competition
- `/ai-app-builder` - AI-powered app generation
- `/project-launcher` - Project and token management

## Design System

### Colors
- Primary: Green palette (green-50 to green-950)
- Accent: Emerald and lime variations
- Background: Dark green-950
- Text: Green-100 / green-50 for headings

### Typography
- Headings: Geist Sans
- Code/Mono: Geist Mono
- Scalable type scale for mobile-first design

### Components
- Rounded cards with hover effects
- Gradient accents for CTAs
- Progress bars for project and agent tracking
- Status badges with color coding
- Responsive navigation with mobile menu

## Deployment

This project can be deployed to any platform that supports Next.js:

- **Vercel**: Recommended for Next.js apps
- **Netlify**: Full Next.js support
- **Railway**: Simple deployment
- **Docker**: Containerized deployment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `bun typecheck` and `bun lint`
5. Submit a pull request

## License

MIT
