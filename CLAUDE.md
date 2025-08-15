# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a creative agency landing page built with **Vite + React + TypeScript**, migrated from a Next.js Tremor template. The project serves as a modern, responsive agency website showcasing services, portfolio, and client testimonials.

## Development Commands

```bash
# Start development server (localhost:5173)
npm run dev

# Build for production (TypeScript check + Vite build)
npm run build

# Preview production build
npm run start

# Run linting (ESLint with TypeScript)
npm run lint
```

## Architecture & Key Technologies

### Core Stack
- **Vite 6.x** - Build tool and dev server
- **React 19** - UI framework
- **TypeScript 5.x** - Type safety
- **React Router DOM 7.x** - Client-side routing
- **Tailwind CSS v4 beta** - Styling framework
- **Motion** (Framer Motion v12) - Animations

### Styling & UI System
- **Tremor Raw components** - Base UI components (Button, Table, etc.)
- **Tailwind Variants** - Component variant system
- **Tailwind Merge + clsx** - Utility class management
- **Custom design tokens** - Agency brand colors: `#003566` (blue), `#000814` (dark blue), `#ffc300` (yellow)

### Icon Systems
- **Remixicon React** - Primary icon library
- **Tabler Icons** - Secondary icons (used in features section)

### Special Components
- **Cobe Globe** - Interactive 3D globe animation in features section
- **Motion animations** - Custom variants for smooth interactions
- **Responsive design** - Mobile-first approach with breakpoint system

## File Organization

```
src/
├── App.tsx                 # Main app component with router
├── main.tsx               # Vite entry point
├── globals.css            # Global styles and Tailwind imports
├── pages/                 # Page components
│   ├── Home.tsx          # Main landing page layout
│   └── NotFound.tsx      # 404 page
├── components/
│   ├── Button.tsx        # Core button component with variants
│   ├── Table.tsx         # Data table components
│   ├── Orbit.tsx         # Orbital animation component
│   ├── icons/            # Custom icon components (logos, illustrations)
│   └── ui/               # Page section components
│       ├── ChipViz.tsx   # Microchip visualization component
│       └── features-section-demo-3.tsx  # Interactive features grid
└── lib/
    ├── siteConfig.ts     # Site metadata and navigation
    ├── utils.ts          # Utility functions (cx, cn, focus styles)
    └── useScroll.ts      # Custom scroll detection hook
```

## Brand Identity & Design System

### Color Palette
- **Primary Blue**: `#003566` - Headers, primary buttons, accents
- **Dark Blue**: `#000814` - Hover states, deep backgrounds
- **Accent Yellow**: `#ffc300` - Highlights, positive metrics, CTAs
- **Neutral Grays**: Standard gray scale for text and backgrounds

### Component Patterns
- **StickerCard**: Service cards with animated hover states and consistent branding
- **FeaturesSectionDemo**: Interactive grid with globe, asset management, and portfolio showcase
- **Button variants**: Primary (blue), secondary (white), ghost, light, destructive
- **Consistent typography**: Agency-focused headings and descriptions

## Routing & Navigation

The app uses React Router with a simple structure:
- `/` - Home page (main landing)
- `/*` - 404 catch-all

Navigation is anchor-based within the single-page layout:
- `#services` - Features section
- `#project-management` - FeaturesSectionDemo section  
- `#agency-metrics` - AgencyMetrics section

## Key Features & Sections

1. **Hero Section** - Main landing with animated background
2. **Features** - Service highlights with icons and descriptions
3. **Testimonial** - Client testimonial with background imagery
4. **FeaturesSectionDemo** - Interactive showcase with 3D globe and portfolio grid
5. **AgencyMetrics** - 8-card service grid with agency capabilities
6. **CallToAction** - Final conversion section with contact CTAs

## Development Notes

### Vite Configuration
- TypeScript path alias: `@/` -> `./src/`
- Dev server hosts on all interfaces (`host: true`)
- Source maps enabled for production builds

### Motion/Animation System
- Uses Motion (Framer Motion) for component animations
- Custom animation variants for consistent easing and timing
- Smooth globe rotation using Cobe library
- Hover states with tailored transition durations

### TypeScript Configuration
- Strict mode enabled with unused variable detection
- Path aliases configured for clean imports (`@/` -> `./src/`)
- Optimized for Vite (no Next.js legacy references)
- Target ES2020 with React JSX transform

### Tailwind CSS v4 Beta
- No traditional config file - uses new CSS-based configuration
- PostCSS setup with Tailwind CSS v4 beta
- Prettier plugin for class sorting

## Performance Optimizations

The codebase has been optimized for minimal bundle size and clean architecture:
- **Removed unused components**: Portfolio, LineChart, Icons, Map components and legacy files
- **Eliminated unused images**: farm-footer.webp, clouds.png, drone.png, droneold.png, field.png
- **Recreated essential components**: Orbit.tsx and ChipViz.tsx were optimized and kept for animations
- **Cleaned up imports**: Removed unused icon imports and component references
- **Streamlined dependencies**: Only essential packages remain in the bundle
- **Optimized TypeScript**: Removed Next.js legacy references, updated to Vite-specific config

## Bundle Analysis
- **CSS**: ~67KB (12.6KB gzipped) - Tailwind CSS with custom animations
- **JavaScript**: ~462KB (142KB gzipped) - React, React Router, Motion, Cobe globe, icons
- **Build time**: ~1.5s - Fast builds with Vite

## Important Notes for Development

### Component Dependencies
- **Orbit.tsx** and **ChipViz.tsx** are required by Features.tsx - do not remove
- **AnalyticsIllustration.tsx** is used by AgencyMetrics.tsx for data visualization
- **features-section-demo-3.tsx** requires both Cobe and Tabler icons dependencies

### Motion Animations
- All animations use the `motion` library (Framer Motion v12)
- Globe animations in features-section-demo-3.tsx use Cobe library
- Custom CSS animations defined in globals.css for grid lines and hover effects

### Brand Consistency
- Always use the defined color palette for any new components
- Primary buttons should use the blue variant, secondary should remain white/gray
- Icons should be consistent with the Remixicon style where possible

This codebase prioritizes performance, accessibility, and modern development practices while maintaining a professional agency brand identity.