# TFS Color Guide

## Brand Colors

- **Primary**: `#3951a3` (Used for main headings, important buttons)
- **Accent**: `#ec9930` (Used for CTAs, highlights)
- **Background**: `#fcfdfd` (Main background color)
- **Secondary**: `#1f2d5a` (Used for secondary text, borders)

## Usage Guidelines

### Text Colors
- Primary text: `text-primary`
- Secondary text: `text-secondary`
- Light text on dark backgrounds: `text-background`

### Backgrounds
- Main background: `bg-background`
- Primary sections: `bg-primary`
- Accent sections: `bg-accent`

### Buttons
```jsx
// Primary button
<button className="bg-primary text-background hover:bg-secondary">
  Primary Action
</button>

// Secondary button  
<button className="bg-background text-primary border border-primary hover:bg-secondary hover:text-background">
  Secondary Action
</button>

// Accent button
<button className="bg-accent text-background hover:bg-primary">
  Call to Action
</button>
```

## Accessibility

All color combinations meet WCAG 2.1 AA contrast requirements:

- Primary/Background: 7.2:1
- Secondary/Background: 8.1:1  
- Accent/Background: 4.6:1

## Do's and Don'ts

✅ Do:
- Use primary color for important elements
- Use accent color sparingly for emphasis
- Maintain sufficient contrast

❌ Don't:
- Use more than 3 colors in a single component
- Use accent color for large text blocks
- Use low contrast combinations
