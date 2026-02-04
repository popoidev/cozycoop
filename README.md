# 🍗 Cozy Coop Restaurant Menu

A responsive, mobile-first restaurant menu designed for QR code scanning. Built with modern web technologies and optimized for all devices and screen sizes.

## ✨ Features

- **📱 Mobile-First Design** - Optimized for smartphones and QR code scanning
- **🎨 Beautiful UI** - Navy blue, bright yellow, and coral red color scheme
- **⚡ Fast Loading** - Optimized images and clean code structure
- **♿ Accessible** - Semantic HTML and keyboard navigation support
- **🔍 Category Navigation** - Easy switching between Wings & Chicken, Sides, and Drinks
- **🌙 Transparent Design** - Beautiful gradient background with semi-transparent elements
- **📄 Print Friendly** - Clean print styles for physical menus

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with proper accessibility
- **CSS3** - Modern CSS with custom properties and animations
- **Vanilla JavaScript** - Lightweight tab navigation
- **Google Fonts** - Poppins and Fredoka font families

## 📁 Project Structure

```
cozy-coop-menu/
├── index.html                    # Main HTML file
├── css/
│   └── style.css                # All styles with responsive design
├── js/
│   └── menu.js                  # Simple tab navigation
├── cozy-coop-logo.png           # Main logo
├── cozy-coop-logo-square.png    # Favicon logo
├── manifest.json                # PWA manifest
├── sw.js                        # Service worker for offline capability
├── .github/workflows/
│   └── deploy.yml               # GitHub Pages deployment
└── README.md                    # This file
```

## 🚀 Getting Started

### Local Development

1. **Clone or download** this repository
2. **Open `index.html`** in a web browser, or
3. **Serve locally** for better performance:

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

4. **Open** `http://localhost:8000` in your browser

### GitHub Pages Deployment

1. **Create a GitHub repository** and upload these files
2. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
3. **Access your menu** at `https://yourusername.github.io/repository-name`

## 📱 QR Code Optimization

This menu is specifically optimized for QR code usage:

- **Large, readable text** (minimum 16px)
- **High contrast colors** for easy reading
- **Touch-friendly buttons** (minimum 44px)
- **Fast loading** with optimized images
- **Mobile-first responsive design** (max-width: 480px)
- **Semi-transparent design** with beautiful gradient background

## 🎨 Customization

### Restaurant Information

Edit the header section in `index.html`:

```html
<img src="cozy-coop-logo.png" alt="Your Restaurant Logo" class="logo" />
<p class="tagline">🍗 Your tagline here 🍗</p>
<p>Your hours and services</p>
```

### Menu Items

Add/edit menu items in `index.html`:

```html
<div class="menu-item">
  <img src="your-image.jpg" alt="Dish description" class="item-image" />
  <div class="item-details">
    <h3 class="item-name">Dish Name</h3>
    <p class="item-description">Description of the dish</p>
    <div class="item-meta">
      <span class="item-price">$XX.XX</span>
      <span class="item-badge">Badge Text</span>
    </div>
  </div>
</div>
```

### Colors and Styling

Modify CSS custom properties in `css/style.css`:

```css
:root {
  --navy-blue: #1e3a5f; /* Main brand color */
  --bright-yellow: #fdb913; /* Accent color */
  --coral-red: #e74c3c; /* Price color */
  --cream: #fff8f0; /* Border color */
}
```

## 🍗 Menu Categories

- **Wings & Chicken** - Fried chicken, wings, tenders, sandwiches, family buckets
- **Sides** - Fries, coleslaw, mac & cheese, mashed potatoes, biscuits
- **Drinks** - Soft drinks, lemonade, iced tea, milkshakes

## 📊 Performance

- **Lightweight** - Clean, optimized code
- **Fast Loading** - Minimal dependencies
- **Mobile Optimized** - Perfect for QR code scanning
- **Responsive** - Works on all screen sizes

## 🌐 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Graceful Degradation**: Works on older browsers with reduced functionality

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on multiple devices
5. Submit a pull request

---

**Made with ❤️ for Cozy Coop Restaurant**
