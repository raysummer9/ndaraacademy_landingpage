# Public Assets Directory

This directory is for static assets that will be served directly by Next.js.

## Usage

Place your assets in the appropriate subdirectories:

- **`/public/assets/`** - For images, icons, and other media files
- **`/public/fonts/`** - For custom font files (if not using Google Fonts)
- **`/public/documents/`** - For PDFs, documents, etc.

## Accessing Assets

Assets in this directory can be accessed directly from your components:

```jsx
// Example usage in components
<img src="/assets/logo.png" alt="Logo" />
<img src="/assets/hero-image.jpg" alt="Hero" />
```

## File Types Supported

- Images: `.jpg`, `.jpeg`, `.png`, `.gif`, `.svg`, `.webp`
- Documents: `.pdf`, `.doc`, `.docx`
- Media: `.mp4`, `.mp3`, `.wav`
- Fonts: `.woff`, `.woff2`, `.ttf`, `.otf`

## Best Practices

1. Use descriptive filenames
2. Optimize images for web (compress, use appropriate formats)
3. Keep file sizes reasonable for fast loading
4. Use subdirectories to organize assets by type or purpose
