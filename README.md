# Gray Matter App Refactor

A modern React TypeScript application for talent management and recruitment, built with Vite and Tailwind CSS.

## Features

- **User Authentication**: Login system with role-based access
- **Dashboard**: Overview of recruitment activities
- **Client Management**: Track and manage client relationships
- **Job Management**: Post and manage job openings
- **Candidate Pipeline**: Track candidates through the recruitment process
- **Responsive Design**: Built with Tailwind CSS for mobile-first responsive design

## Technology Stack

- **Frontend**: React 19 (RC) with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context
- **Development**: ESLint for code quality

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

### Demo Accounts

Use these email addresses to log in (password field can be left empty or use "password"):

- `admin@graymatter.com` - Administrator account
- `recruiter@graymatter.com` - Recruiter account  
- `manager@graymatter.com` - Manager account

## Project Structure

```
src/
├── assets/          # Static assets (icons, images)
├── components/      # Reusable React components
├── context/         # React Context providers
├── data/           # Mock data files (TypeScript)
├── features/       # Feature-specific components
│   └── auth/       # Authentication components
├── hooks/          # Custom React hooks
├── layouts/        # Layout components
├── pages/          # Page components
├── styles/         # Global styles
└── types/          # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Development Notes

- This is a refactored version from JavaScript to TypeScript
- Uses modern React 19 features
- Includes mock data for development and testing
- Built with responsive design principles
- Ready for API integration (marked with `# INTEGRATE:` comments)

## Contributing

1. Follow the existing code style and conventions
2. Add proper TypeScript types for new features
3. Test your changes thoroughly
4. Update documentation as needed