# Social Launch Labs

A modern website for a social media marketing agency built with React, Vite, and Tailwind CSS.

## Features

- Responsive design for all device sizes
- Modern UI with Tailwind CSS
- Component-based architecture with React
- Multiple page routes with React Router
- Detailed package pages for different service offerings

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/social-launch-labs.git
   cd social-launch-labs
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To build the project for production, run:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deploying to GitHub Pages

The project is configured for GitHub Pages deployment. To deploy:

1. Create a GitHub repository for the project
2. Add the repository as a remote
   ```bash
   git remote add origin https://github.com/yourusername/social-launch-labs.git
   ```

3. Push your code to the repository
   ```bash
   git push -u origin main
   ```

4. Deploy to GitHub Pages
   ```bash
   npm run deploy
   ```

5. Your site will be available at `https://yourusername.github.io/social-launch-labs/`

## Project Structure

- `src/components`: Reusable UI components
  - `layout`: Layout components (Header, Footer, etc.)
  - `sections`: Page section components
  - `ui`: UI components (Button, Card, etc.)
- `src/pages`: Page components
  - `packages`: Individual package pages
- `src/assets`: Static assets (images, fonts, etc.)
- `public`: Public assets (favicon, etc.)

## Technologies Used

- React
- Vite
- Tailwind CSS
- React Router
- Headless UI

## License

This project is licensed under the MIT License - see the LICENSE file for details.
