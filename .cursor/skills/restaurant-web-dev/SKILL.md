---
name: restaurant-web-dev
description: Build responsive restaurant menu websites with modern UI/UX, HTML5, CSS3, and JavaScript. Use when creating restaurant websites, QR code menu pages, responsive web design, or mobile-first food service applications.
---

# Restaurant Web Development

## Quick Start

When building restaurant menu websites:

1. **Mobile-first approach** - Start with mobile design, scale up
2. **QR code optimization** - Fast loading, clear typography
3. **Accessibility** - High contrast, readable fonts, keyboard navigation
4. **Performance** - Optimize images, minimize CSS/JS

## Project Structure

```
restaurant-menu/
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   └── menu.js
├── images/
│   └── menu-items/
├── fonts/
└── README.md
```

## HTML5 Foundation

### Semantic Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Restaurant Name - Menu</title>
    <meta name="description" content="View our delicious menu items" />
  </head>
  <body>
    <header>
      <h1>Restaurant Name</h1>
      <nav><!-- Category navigation --></nav>
    </header>
    <main>
      <section class="menu-category">
        <h2>Category Name</h2>
        <div class="menu-items">
          <!-- Menu items -->
        </div>
      </section>
    </main>
    <footer>
      <!-- Contact info, hours -->
    </footer>
  </body>
</html>
```

### Menu Item Template

```html
<article class="menu-item">
  <div class="item-image">
    <img src="images/dish.jpg" alt="Dish name" loading="lazy" />
  </div>
  <div class="item-details">
    <h3 class="item-name">Dish Name</h3>
    <p class="item-description">Brief description</p>
    <span class="item-price">$12.99</span>
  </div>
</article>
```

## CSS3 Responsive Design

### Mobile-First CSS Reset

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #fff;
}
```

### Responsive Grid System

```css
.menu-items {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}

/* Tablet */
@media (min-width: 768px) {
  .menu-items {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .menu-items {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### QR Code Optimizations

```css
/* Large, readable text for mobile */
.item-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.item-price {
  font-size: 1.125rem;
  font-weight: 700;
  color: #d97706;
}

/* High contrast for readability */
.menu-item {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

## JavaScript Enhancements

### Menu Category Filtering

```javascript
class MenuFilter {
  constructor() {
    this.init();
  }

  init() {
    this.bindEvents();
    this.showCategory("all");
  }

  bindEvents() {
    document.querySelectorAll(".category-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.showCategory(e.target.dataset.category);
      });
    });
  }

  showCategory(category) {
    const items = document.querySelectorAll(".menu-category");
    items.forEach((item) => {
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new MenuFilter();
});
```

### Image Lazy Loading Enhancement

```javascript
// Progressive image loading for better performance
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove("lazy");
      observer.unobserve(img);
    }
  });
});

document.querySelectorAll("img[data-src]").forEach((img) => {
  imageObserver.observe(img);
});
```

## UX Best Practices

### QR Code Menu Considerations

1. **Fast loading** - Optimize all images, use WebP format
2. **Clear hierarchy** - Categories → Items → Details
3. **Large touch targets** - Minimum 44px for buttons
4. **Readable fonts** - 16px minimum, high contrast
5. **Offline capability** - Cache critical resources

### Accessibility Checklist

- [ ] Alt text for all images
- [ ] Keyboard navigation support
- [ ] ARIA labels for interactive elements
- [ ] Color contrast ratio ≥ 4.5:1
- [ ] Focus indicators visible
- [ ] Screen reader friendly structure

## Performance Optimization

### Image Optimization

```css
/* Responsive images */
.item-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

/* Lazy loading placeholder */
.lazy {
  background: #f3f4f6;
  min-height: 200px;
}
```

### CSS Optimization

```css
/* Critical CSS - inline in <head> */
/* Non-critical CSS - load asynchronously */

/* Use CSS custom properties for theming */
:root {
  --primary-color: #d97706;
  --text-color: #374151;
  --bg-color: #ffffff;
  --border-color: #e5e7eb;
}
```

## GitHub Pages Deployment

### Repository Setup

1. Create repository: `restaurant-menu`
2. Enable GitHub Pages in Settings
3. Set source to main branch
4. Custom domain (optional): `menu.restaurant.com`

### Build Process

```json
// package.json
{
  "scripts": {
    "build": "npm run optimize-images && npm run minify-css",
    "optimize-images": "imagemin images/**/* --out-dir=dist/images",
    "minify-css": "cleancss -o dist/css/style.min.css css/*.css"
  }
}
```

### GitHub Actions Workflow

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
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "16"
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Common Menu Patterns

### Category Navigation

```html
<nav class="category-nav">
  <button class="category-btn active" data-category="all">All</button>
  <button class="category-btn" data-category="appetizers">Appetizers</button>
  <button class="category-btn" data-category="mains">Main Courses</button>
  <button class="category-btn" data-category="desserts">Desserts</button>
  <button class="category-btn" data-category="beverages">Beverages</button>
</nav>
```

### Price Display Options

```css
/* Option 1: Right-aligned prices */
.item-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

/* Option 2: Price badges */
.item-price {
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;
}
```

### Special Indicators

```html
<div class="item-badges">
  <span class="badge vegetarian">🌱 Vegetarian</span>
  <span class="badge spicy">🌶️ Spicy</span>
  <span class="badge popular">⭐ Popular</span>
</div>
```

## Testing Checklist

### Device Testing

- [ ] iPhone SE (375px)
- [ ] iPhone 12 (390px)
- [ ] iPad (768px)
- [ ] Desktop (1024px+)

### Performance Testing

- [ ] Lighthouse score ≥ 90
- [ ] First Contentful Paint < 2s
- [ ] Images optimized (WebP/AVIF)
- [ ] CSS/JS minified

### QR Code Testing

- [ ] Scan from various distances
- [ ] Test on different lighting conditions
- [ ] Verify loading speed on mobile data
- [ ] Check readability without zooming

## Additional Resources

- For detailed responsive breakpoints, see [responsive.md](responsive.md)
- For menu content examples, see [menu-examples.md](menu-examples.md)
- For deployment guides, see [deployment.md](deployment.md)
