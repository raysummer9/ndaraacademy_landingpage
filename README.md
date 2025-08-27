# Ndara Academy Website

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Poppins (Google Fonts)
- **Linting**: ESLint with TypeScript support

## 📁 Project Structure

```
src/
├── app/           # Next.js app directory
│   ├── layout.tsx # Root layout
│   ├── page.tsx   # Home page
│   └── globals.css # Global styles
├── components/    # Reusable components
├── lib/          # Utility functions
└── types/        # TypeScript type definitions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

- **Primary Font**: Poppins
- **Color Palette**: Custom primary colors with Tailwind CSS
- **Responsive**: Mobile-first design approach

## 🔧 Development

The project is set up with:
- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling
- Next.js App Router for modern React patterns

## 🚀 Deployment

### Next.js 15 Static Export Fix

This project includes a fix for Next.js 15 static exports where the `routes-manifest.json` file is not automatically generated. The fix includes:

1. **Automatic Manifest Generation**: A postbuild script (`scripts/generate-manifest.js`) that automatically creates the required `routes-manifest.json` file
2. **Updated Build Process**: The `package.json` includes a `postbuild` script that runs after each build
3. **Updated Configuration**: The `next.config.js` has been optimized for Next.js 15

### Build Process

```bash
npm run build
```

This command will:
1. Build the Next.js application
2. Generate static files in the `out/` directory
3. Automatically create the `routes-manifest.json` file

## 📱 Features

- Responsive design
- Modern UI components
- TypeScript support
- Optimized for performance
- SEO-friendly

## 🤝 Contributing

1. Follow the existing code style
2. Use TypeScript for all new code
3. Ensure responsive design
4. Test across different devices

## 📄 License

This project is licensed under the ISC License.
