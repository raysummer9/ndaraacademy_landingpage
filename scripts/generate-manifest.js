const fs = require('fs');
const path = require('path');

// Generate routes-manifest.json for Next.js 15 static exports
const routesManifest = {
  "version": 3,
  "pages": {
    "/": {
      "path": "/",
      "query": {}
    },
    "/about": {
      "path": "/about",
      "query": {}
    },
    "/collaboration": {
      "path": "/collaboration",
      "query": {}
    },
    "/coming-soon": {
      "path": "/coming-soon",
      "query": {}
    },
    "/community": {
      "path": "/community",
      "query": {}
    },
    "/contact": {
      "path": "/contact",
      "query": {}
    },
    "/workshops": {
      "path": "/workshops",
      "query": {}
    },
    "/join-our-community": {
      "path": "/join-our-community",
      "query": {}
    },
    "/404": {
      "path": "/404",
      "query": {}
    }
  },
  "dynamicRoutes": [],
  "rewrites": [],
  "redirects": [],
  "headers": [],
  "basePath": "",
  "trailingSlash": true
};

const outDir = path.join(__dirname, '..', 'out');
const manifestPath = path.join(outDir, 'routes-manifest.json');

// Ensure out directory exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Write the manifest file
fs.writeFileSync(manifestPath, JSON.stringify(routesManifest, null, 2));
console.log('✅ Generated routes-manifest.json');

// Restore jsx: "preserve" in tsconfig.json for static exports
// Next.js 16 auto-configures jsx to "react-jsx", but for static exports, "preserve" is required
const tsconfigPath = path.join(__dirname, '..', 'tsconfig.json');
if (fs.existsSync(tsconfigPath)) {
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
  if (tsconfig.compilerOptions && tsconfig.compilerOptions.jsx !== 'preserve') {
    tsconfig.compilerOptions.jsx = 'preserve';
    fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
    console.log('✅ Restored jsx: "preserve" in tsconfig.json for static exports');
  }
}
