# Vite React TypeScript Starter Template

A modern, feature-rich starter template for React projects with TypeScript, Tailwind CSS, and shadcn/ui components. This template provides a solid foundation for building beautiful, responsive web applications with the latest front-end technologies.

## Features

- **Vite** - Lightning fast build tool and development server
- **React 18** - The latest version of the popular UI library
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **shadcn/ui** - Beautifully designed components built with Radix UI and Tailwind CSS
- **Lucide React** - Beautiful, consistent icon set with 1000+ icons
- **Sonner** - Toast notifications with minimal and clean design
- **Radix UI** - Accessible UI primitives for building high-quality design systems
- **Dark Mode** - Built-in dark mode support with theme provider
- **Responsive Design** - Mobile-first approach for all components
- **Path Aliases** - Simplified imports with `@/` path alias

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Using this template

#### Option 1: Use GitHub Template Feature (Recommended)

1. Visit the [GitHub repository](https://github.com/Aranthus/Modern-UI-UX-Stack-starter-pack)
2. Click the "Use this template" button
3. Follow the prompts to create a new repository based on this template
4. Clone your new repository
5. Install dependencies and start the development server:
   ```bash
   npm install
   npm run dev
   ```

#### Option 2: Clone Directly

1. Clone this repository:
   ```bash
   git clone https://github.com/Aranthus/Modern-UI-UX-Stack-starter-pack.git my-project
   cd my-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
/
├── public/                  # Static assets
├── src/
│   ├── components/          # React components
│   │   ├── ui/              # UI components from shadcn/ui
│   │   │   ├── button.tsx   # Button component
│   │   │   ├── card.tsx     # Card component
│   │   │   ├── toast.tsx    # Toast component
│   │   │   └── ...          # Other UI components
│   │   └── theme-provider.tsx # Theme provider for dark/light mode
│   ├── lib/                 # Utility functions and helpers
│   │   └── utils.ts         # Utility functions (cn, etc.)
│   ├── App.tsx              # Main App component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles with Tailwind directives
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── tsconfig.node.json       # TypeScript configuration for Node.js
└── tsconfig.app.json        # TypeScript configuration for the app
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build

## Customization

### Adding More shadcn/ui Components

You can add more shadcn/ui components by creating new files in the `src/components/ui` directory. Visit [shadcn/ui documentation](https://ui.shadcn.com/docs) for more information.

To add a new component from shadcn/ui:

1. Create a new file in `src/components/ui/`
2. Copy the component code from the shadcn/ui documentation
3. Import and use the component in your application

### Theming

This template includes a light and dark theme. You can customize the colors in the `src/index.css` file.

The theme is managed by the `ThemeProvider` component in `src/components/theme-provider.tsx`. It uses React's Context API to provide theme information to all components.

Default color tokens are defined in the `src/index.css` file:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    /* More color variables... */
  }
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* More dark mode color variables... */
  }
}
```

### Path Aliases

This template is configured with path aliases to make imports cleaner. You can use the `@/` prefix to import from the `src` directory:

```tsx
// Instead of
import { Button } from '../../../components/ui/button';

// You can use
import { Button } from '@/components/ui/button';
```

Path aliases are configured in:
- `tsconfig.json` - For TypeScript
- `vite.config.ts` - For Vite

## Included Components

### UI Components

- **Button**: A versatile button component with various styles and sizes
- **Card**: A container component with header, content, and footer sections
- **Toast**: Notification component powered by Sonner

### Utility Components

- **ThemeProvider**: Provides theme context for dark/light mode

## Configuration Files

### vite.config.ts

The Vite configuration file sets up the React plugin and path aliases:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
```

### tsconfig.json

The TypeScript configuration file sets up the compiler options and path aliases:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### tailwind.config.js

The Tailwind CSS configuration file sets up the theme and content paths:

```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme colors defined here
      },
      borderRadius: {
        // Border radius variables
      }
    }
  },
  plugins: []
}
```

## Troubleshooting

### Common Issues

1. **Path Alias Issues**: If you're having trouble with the `@/` path alias, make sure your `tsconfig.json` and `vite.config.ts` files are properly configured.

2. **Tailwind CSS Not Working**: If Tailwind CSS styles aren't applying, check your `postcss.config.js` and `tailwind.config.js` files to ensure they're correctly set up.

3. **TypeScript Errors**: If you're seeing TypeScript errors, run `npm run lint` to identify and fix the issues.

## Resources

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [Lucide Icons](https://lucide.dev/icons/)
- [Sonner Documentation](https://sonner.emilkowal.ski/)

## License

MIT
