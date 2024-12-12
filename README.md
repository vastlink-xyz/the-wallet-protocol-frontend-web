# The Wallet Protocol Frontend Web

A micro-frontend based implementation for The Wallet Protocol, using Next.js as the main application and Vite for sub-applications.

## Architecture

This project implements a micro-frontend architecture:

- **Main Application**: Built with Next.js, serving as the container application
- **Theme Sub-applications**: Built with Vite, running as independent sub-applications
  - `themes/theme-light`: Light theme implementation
  - `themes/theme-dark`: Dark theme implementation

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn (for main application)
- pnpm (for theme sub-applications)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vastlink-xyz/the-wallet-protocol-frontend-web.git
cd the-wallet-protocol-frontend-web
```

2. Install dependencies for main application:
```bash
npm install
# or
yarn install
```

3. Install dependencies for theme sub-applications:
```bash
cd themes/theme-light
pnpm install
cd ../theme-dark
pnpm install
```

4. Start the development server:

Main application:
```bash
# In root directory
npm run dev
# or
yarn dev
```

Theme sub-applications:
```bash
# In respective theme directories
npm run dev
# or
yarn dev
```

The main application will be available at `http://localhost:3000` and the theme sub-applications will be available at `http://localhost:5173` and `http://localhost:5174`.

## Development Guide

### Project Structure

```
├── src/                  # Main Next.js application source
├── themes/              # Theme sub-applications
│   ├── theme-light/    # Light theme Vite application
│   └── theme-dark/     # Dark theme Vite application
```

## Theme System

### Development Mode
In development mode, the theme system works as follows:
- Light theme runs on port 5173
- Dark theme runs on port 5174
- Theme selection is managed through URL parameters (`?theme=theme_light`) or cookies
- The middleware automatically redirects requests to the appropriate theme's dev server

### Production Mode
In production mode:
- Compiled theme assets are served from `/public/dist/{theme_name}`
- HTTPS is enforced for all requests
- Theme assets are loaded dynamically based on user preference
- Theme preference is persisted in cookies

### Theme Switching
Themes can be switched in two ways:
1. URL Parameter: Add `?theme=theme_light` or `?theme=theme_dark` to the URL
2. Cookie: The system maintains a `current-theme` cookie that persists the user's theme preference

## Deployment

### Prerequisites
- Heroku CLI installed
- Access to Heroku project
- Git configured

### Build and Deploy Process

1. Build Sub-applications:
   ```bash
   # Navigate to the sub-application directory (e.g., themes/theme-light)
   cd themes/theme-light
   
   # Build the sub-application
   npm run build
   ```
   The compiled files will be generated in the main application's `public/dist` directory.

2. Commit the Built Files:
   ```bash
   # From the root directory
   git add .
   git commit -m "🔧 build: sub-application"
   git push
   ```

3. Deploy to Heroku:
   ```bash
   # From the root directory
   node deploy.js
   ```

This will deploy the application to Heroku. Monitor the deployment process in the Heroku dashboard for any potential issues.
