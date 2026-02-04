# 🚀 Deployment Guide for Bella Vista Restaurant Menu

This guide will help you deploy your restaurant menu to GitHub Pages so it can be accessed via QR codes.

## Quick Setup (5 minutes)

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New repository" (green button)
3. Repository name: `restaurant-menu` (or your restaurant name)
4. Make it **Public** (required for free GitHub Pages)
5. Check "Add a README file"
6. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**

1. Click "uploading an existing file"
2. Drag and drop all your files (index.html, css/, js/, etc.)
3. Write commit message: "Initial restaurant menu upload"
4. Click "Commit changes"

**Option B: Using Git (if you have it installed)**

```bash
git clone https://github.com/yourusername/restaurant-menu.git
cd restaurant-menu
# Copy all your menu files here
git add .
git commit -m "Initial restaurant menu upload"
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under "Source", select **Deploy from a branch**
5. Branch: **main**
6. Folder: **/ (root)**
7. Click **Save**

### Step 4: Access Your Menu

- Your menu will be available at: `https://yourusername.github.io/restaurant-menu`
- It takes 5-10 minutes to deploy initially
- You'll see a green checkmark when it's ready

## 📱 Creating QR Codes

### Free QR Code Generators

1. **QR Code Generator** (qr-code-generator.com)
2. **QRCode Monkey** (qrcode-monkey.com)
3. **Google QR Code** (Just search "QR code generator")

### QR Code Settings

- **URL**: Your GitHub Pages URL
- **Size**: At least 300x300 pixels for printing
- **Format**: PNG or SVG for best quality
- **Error Correction**: Medium or High

### QR Code Best Practices

- Test the QR code with multiple phones before printing
- Print at least 2cm x 2cm (0.8" x 0.8") size
- Use high contrast (black on white background)
- Leave white space around the QR code
- Test scanning from different distances

## 🔄 Updating Your Menu

### Method 1: GitHub Web Interface

1. Go to your repository
2. Navigate to the file you want to edit
3. Click the pencil icon (Edit)
4. Make your changes
5. Scroll down, add commit message
6. Click "Commit changes"
7. Wait 2-3 minutes for deployment

### Method 2: Upload New Files

1. Click "Add file" → "Upload files"
2. Drag your updated files
3. Commit changes
4. Wait for automatic deployment

## 🎨 Customization Guide

### Change Restaurant Information

Edit `index.html`:

```html
<!-- Line ~30 -->
<h1 class="restaurant-name">🍝 Your Restaurant Name</h1>
<p class="restaurant-tagline">Your Tagline Here</p>

<!-- Line ~35 -->
<span class="phone">📞 Your Phone Number</span>
<span class="hours">🕒 Your Hours</span>
```

### Add Menu Items

Copy this template in `index.html`:

```html
<article class="menu-item">
  <div class="item-image">
    <img
      src="https://images.unsplash.com/photo-YOUR-IMAGE-ID?w=400&h=300&fit=crop"
      alt="Description of your dish"
      loading="lazy"
    />
  </div>
  <div class="item-details">
    <div class="item-header">
      <h3 class="item-name">Your Dish Name</h3>
      <span class="item-price">$XX.XX</span>
    </div>
    <p class="item-description">Description of your delicious dish</p>
    <div class="item-badges">
      <span class="badge popular">⭐ Popular</span>
    </div>
  </div>
</article>
```

### Change Colors

Edit `css/style.css` (around line 10):

```css
:root {
  --primary-color: #your-color; /* Main brand color */
  --secondary-color: #your-color; /* Secondary color */
}
```

### Add Your Own Images

1. Create `images/` folder in your repository
2. Upload your food photos (recommended: 400x300px, under 100KB each)
3. Update image sources in HTML:
   ```html
   <img src="images/your-dish.jpg" alt="Your dish description" />
   ```

## 🌐 Custom Domain (Optional)

### If You Have a Domain Name

1. Create a file named `CNAME` (no extension) in your repository
2. Add your domain: `menu.yourrestaurant.com`
3. Configure DNS at your domain provider:
   - Type: CNAME
   - Name: menu
   - Value: yourusername.github.io

### SSL Certificate

GitHub Pages automatically provides SSL (https://) for custom domains.

## 🔧 Troubleshooting

### Menu Not Loading

- Check that `index.html` is in the root directory
- Verify GitHub Pages is enabled in Settings
- Wait 5-10 minutes after making changes

### Images Not Showing

- Verify image file names match exactly (case-sensitive)
- Check that images are in the correct folder
- Ensure image URLs are correct

### QR Code Not Working

- Test the URL directly in a browser first
- Verify QR code points to correct URL
- Check QR code size and quality
- Try different QR code generators

### Changes Not Appearing

- Wait 2-3 minutes for GitHub Pages to update
- Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- Check the Actions tab for deployment status

## 📊 Analytics (Optional)

### Google Analytics

Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_TRACKING_ID");
</script>
```

## 💡 Tips for Success

1. **Test Everything**: Always test your QR codes before printing
2. **Keep It Simple**: Don't overcomplicate the menu design
3. **Update Regularly**: Keep your menu current and prices accurate
4. **Mobile First**: Most customers will view on phones
5. **Fast Loading**: Optimize images and keep file sizes small
6. **Backup**: Keep a copy of your files locally

## 📞 Support

If you need help:

1. Check this guide again
2. Look at the example files
3. Search GitHub's documentation
4. Ask for help in the repository issues

---

**Your restaurant menu will be live at:**
`https://yourusername.github.io/repository-name`

**Happy serving! 🍽️**
