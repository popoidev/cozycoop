# Menu Content Examples

## Sample Menu Structure

### Appetizers

```json
{
  "category": "appetizers",
  "items": [
    {
      "name": "Crispy Calamari",
      "description": "Fresh squid rings with marinara sauce and lemon",
      "price": "$12.99",
      "image": "calamari.jpg",
      "badges": ["popular"]
    },
    {
      "name": "Bruschetta Trio",
      "description": "Three varieties: classic tomato, mushroom, and ricotta",
      "price": "$9.99",
      "image": "bruschetta.jpg",
      "badges": ["vegetarian"]
    }
  ]
}
```

### Main Courses

```json
{
  "category": "mains",
  "items": [
    {
      "name": "Grilled Salmon",
      "description": "Atlantic salmon with herb butter and seasonal vegetables",
      "price": "$24.99",
      "image": "salmon.jpg",
      "badges": ["healthy", "popular"]
    },
    {
      "name": "Spicy Chicken Pasta",
      "description": "Penne pasta with grilled chicken in spicy arrabbiata sauce",
      "price": "$18.99",
      "image": "chicken-pasta.jpg",
      "badges": ["spicy"]
    }
  ]
}
```

## Badge System

```css
.badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  margin: 0.125rem;
}

.badge.vegetarian {
  background: #10b981;
  color: white;
}

.badge.vegan {
  background: #059669;
  color: white;
}

.badge.spicy {
  background: #ef4444;
  color: white;
}

.badge.popular {
  background: #f59e0b;
  color: white;
}

.badge.healthy {
  background: #8b5cf6;
  color: white;
}

.badge.new {
  background: #3b82f6;
  color: white;
}
```

## Sample Menu Data Structure

```javascript
const menuData = {
  restaurant: {
    name: "Bella Vista",
    tagline: "Authentic Italian Cuisine",
    phone: "(555) 123-4567",
    hours: "Mon-Sun: 11:00 AM - 10:00 PM",
  },
  categories: [
    {
      id: "appetizers",
      name: "Appetizers",
      items: [
        // items array
      ],
    },
    {
      id: "mains",
      name: "Main Courses",
      items: [
        // items array
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      items: [
        // items array
      ],
    },
    {
      id: "beverages",
      name: "Beverages",
      items: [
        // items array
      ],
    },
  ],
};
```
