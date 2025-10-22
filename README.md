# RedSwan - React Application

A modern React application for RedSwan's tokenized real estate platform, built with Vite.

## Project Structure

```
redswan/
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx
│   │   ├── Intro.jsx
│   │   ├── Solutions.jsx
│   │   ├── Why.jsx
│   │   ├── Benefits.jsx
│   │   ├── Process.jsx
│   │   ├── Partners.jsx
│   │   ├── Featured.jsx
│   │   ├── News.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── dist/                  # Build output
├── old-static/            # Backup of original static HTML
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
└── package.json           # Project dependencies

```

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+ (currently using 18.12.1 with warnings)
- npm 8+

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### Build

Create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Technologies

- **React 19.2.0** - UI framework
- **Vite 7.1.10** - Build tool and dev server
- **@vitejs/plugin-react** - React support for Vite

## Migration Notes

This project was migrated from static HTML to a React + Vite setup. The original static files are preserved in the `old-static/` directory for reference.

Key changes:
- Modular component structure for better maintainability
- Hot Module Replacement (HMR) for faster development
- Optimized production builds with code splitting
- Modern ES modules throughout

## Monitoring/Instrumentation

The app includes monitoring code in `index.html` that captures:
- Console logs (log, error, warn, info, debug)
- Runtime errors
- Unhandled promise rejections
- Network requests (fetch)
- Navigation/routing events
- Screenshot capabilities

This instrumentation sends data to the parent window via `postMessage`.
