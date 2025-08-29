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
