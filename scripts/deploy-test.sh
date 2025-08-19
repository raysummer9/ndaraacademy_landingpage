#!/bin/bash

echo "🚀 Testing deployment build..."

# Clean previous build
echo "📦 Cleaning previous build..."
rm -rf out/

# Install dependencies
echo "📥 Installing dependencies..."
npm ci

# Build the project
echo "🔨 Building static site..."
npm run build

# Check if build was successful
if [ -d "out" ]; then
    echo "✅ Build successful! Static files generated in 'out/' directory"
    echo "📁 Files ready for deployment:"
    ls -la out/
    echo ""
    echo "🌐 You can test locally by serving the 'out/' directory"
    echo "💡 Use: npx serve out/ -p 3000"
else
    echo "❌ Build failed! Check the error messages above"
    exit 1
fi
