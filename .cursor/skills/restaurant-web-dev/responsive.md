# Responsive Design Reference

## Breakpoint System

```css
/* Mobile First Approach */
/* Base styles: 320px - 767px */

/* Small tablets and large phones */
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

/* Tablets */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
  .menu-items {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Large tablets and small desktops */
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
  .menu-items {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Large desktops */
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
  .menu-items {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

## Typography Scale

```css
:root {
  /* Mobile typography */
  --h1-size: 2rem;
  --h2-size: 1.5rem;
  --h3-size: 1.25rem;
  --body-size: 1rem;
  --small-size: 0.875rem;
}

@media (min-width: 768px) {
  :root {
    --h1-size: 2.5rem;
    --h2-size: 2rem;
    --h3-size: 1.5rem;
    --body-size: 1.125rem;
  }
}

@media (min-width: 1024px) {
  :root {
    --h1-size: 3rem;
    --h2-size: 2.25rem;
    --h3-size: 1.75rem;
  }
}
```

## Spacing System

```css
:root {
  --space-xs: 0.25rem; /* 4px */
  --space-sm: 0.5rem; /* 8px */
  --space-md: 1rem; /* 16px */
  --space-lg: 1.5rem; /* 24px */
  --space-xl: 2rem; /* 32px */
  --space-2xl: 3rem; /* 48px */
  --space-3xl: 4rem; /* 64px */
}

/* Responsive spacing */
@media (min-width: 768px) {
  :root {
    --space-lg: 2rem;
    --space-xl: 2.5rem;
    --space-2xl: 4rem;
    --space-3xl: 6rem;
  }
}
```

## Touch Targets

```css
/* Minimum 44px touch targets */
.btn,
.category-btn,
.menu-item {
  min-height: 44px;
  min-width: 44px;
}

/* Comfortable spacing between interactive elements */
.category-nav .category-btn {
  margin: 0.25rem;
  padding: 0.75rem 1rem;
}
```
