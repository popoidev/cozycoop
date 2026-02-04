# GitHub Pages Deployment Guide

## Quick Setup

1. **Create Repository**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/restaurant-menu.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**

   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from branch
   - Branch: main
   - Folder: / (root)
   - Save

3. **Access Your Site**
   - URL: `https://username.github.io/restaurant-menu`
   - Usually takes 5-10 minutes to deploy

## Custom Domain Setup

### Add Custom Domain

1. In repository root, create `CNAME` file:

   ```
   menu.yourrestaurant.com
   ```

2. Configure DNS at your domain provider:
   ```
   Type: CNAME
   Name: menu
   Value: username.github.io
   ```

### SSL Certificate

GitHub Pages automatically provides SSL for custom domains.

## Optimization for GitHub Pages

### File Structure

```
restaurant-menu/
├── index.html          # Main page
├── CNAME              # Custom domain (optional)
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── optimized/     # Compressed images
└── README.md
```

### Performance Tips

1. **Optimize Images**

   ```bash
   # Use tools like imagemin or online compressors
   # Target: < 100KB per image
   # Format: WebP or JPEG
   ```

2. **Minify CSS/JS**

   ```html
   <!-- Use minified versions -->
   <link rel="stylesheet" href="css/style.min.css" />
   <script src="js/script.min.js"></script>
   ```

3. **Enable Caching**
   ```html
   <!-- Add cache headers via meta tags -->
   <meta http-equiv="Cache-Control" content="public, max-age=31536000" />
   ```

## GitHub Actions for Automated Deployment

### Basic Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Package.json for Build Process

```json
{
  "name": "restaurant-menu",
  "scripts": {
    "build": "npm run optimize && npm run minify",
    "optimize": "imagemin 'images/**/*' --out-dir='dist/images'",
    "minify": "cleancss -o dist/css/style.min.css css/*.css"
  },
  "devDependencies": {
    "imagemin": "^8.0.1",
    "imagemin-webp": "^7.0.0",
    "clean-css-cli": "^5.6.1"
  }
}
```

## Testing Your Deployment

### Local Testing

```bash
# Serve locally to test
npx serve .
# or
python -m http.server 8000
```

### Mobile Testing

1. Use Chrome DevTools device simulation
2. Test on actual devices
3. Check QR code scanning from various distances

### Performance Testing

1. Run Lighthouse audit
2. Test loading speed on slow connections
3. Verify images load properly

## Troubleshooting

### Common Issues

1. **404 Error**

   - Check file paths are correct
   - Ensure index.html is in root directory
   - Wait 5-10 minutes for deployment

2. **Images Not Loading**

   - Verify image paths are relative
   - Check file extensions match exactly
   - Ensure images are committed to repository

3. **CSS/JS Not Working**
   - Check file paths in HTML
   - Verify files are in correct directories
   - Clear browser cache

### Debug Steps

1. Check GitHub Pages build status in repository settings
2. Review commit history for recent changes
3. Test locally first before pushing
4. Use browser developer tools to check for errors
