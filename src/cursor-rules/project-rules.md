# Social Launch Labs Branding Rules

## Brand Colors
- Primary Blue: `#155DFC`
- Secondary Blue: `#7394D3`
- Light Blue Background: `#E8F0FF`
- Very Light Blue: `#F6F9FF`
- Dark Text: `#1E293C`
- Body Text: `#333945`

## Global Background Implementation
All pages should implement this global background wrapper:

```jsx
{/* Global page background wrapper */}
<div className="relative">
  {/* Global page background that spans all sections */}
  <div className="fixed inset-0 w-full h-full overflow-hidden -z-20">
    {/* Base gradient that spans the entire page */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#F6F9FF] via-white to-[#F6F9FF] w-full h-full"></div>
    
    {/* Extremely subtle global patterns */}
    <div className="absolute inset-0 w-full h-full opacity-[0.02]" 
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 95%, #155DFC 95%, #155DFC 96%, transparent 96%),
            linear-gradient(90deg, transparent 97%, #7394D3 97%, #7394D3 98%, transparent 98%)
          `,
          backgroundSize: '80px 80px, 70px 70px'
        }}>
    </div>
    
    {/* Decorative fixed elements - extremely subtle */}
    <div className="absolute top-0 -right-[10%] w-[70%] h-[70%] border-l border-[#155DFC]/5 rounded-l-full"></div>
    <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] border-t border-r border-[#7394D3]/5 rounded-tr-full"></div>
    
    {/* Very large, very subtle color patches */}
    <div className="absolute top-[30%] left-[20%] w-[70vw] h-[70vh] bg-[#155DFC] rounded-full mix-blend-multiply filter blur-[200px] opacity-[0.01]"></div>
    <div className="absolute bottom-[10%] right-[10%] w-[60vw] h-[60vh] bg-[#7394D3] rounded-full mix-blend-multiply filter blur-[180px] opacity-[0.01]"></div>
  </div>
  
  {/* Page content goes here */}
</div>
```

## Hero Section Implementation
All primary hero sections should use this background styling:

```jsx
{/* Hero-specific background */}
<div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
  {/* Modern gradient background base */}
  <div className="absolute inset-0 bg-gradient-to-tr from-[#E8F0FF] via-[#F6F9FF] to-white w-full h-full"></div>
  
  {/* Subtle geometric elements */}
  <div className="absolute top-0 left-0 w-full h-full opacity-[0.07]">
    <div className="absolute top-[10%] right-[15%] w-[30vw] h-[30vw] max-w-[600px] max-h-[600px] rounded-full border border-[#155DFC]/20"></div>
    <div className="absolute bottom-[15%] left-[10%] w-[25vw] h-[25vw] max-w-[500px] max-h-[500px] rounded-full border border-[#7394D3]/30"></div>
    <div className="absolute top-[30%] left-[25%] w-[15vw] h-[15vw] max-w-[300px] max-h-[300px] rounded-full border border-[#155DFC]/10"></div>
  </div>
  
  {/* Additional hero background elements (layered blurs, patterns, etc.) */}
  <div className="absolute top-0 right-[10%] w-[40vw] h-[40vw] max-w-[800px] max-h-[800px] bg-[#155DFC] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.03]"></div>
  <div className="absolute bottom-0 left-[5%] w-[35vw] h-[35vw] max-w-[700px] max-h-[700px] bg-[#7394D3] rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.04]"></div>
</div>
```

## Wave Divider Implementation
For section transitions, use this wave divider with the proper alignment:

```jsx
{/* Section divider - subtle wave pattern */}
<div className="relative h-16 overflow-hidden z-10 -mt-0">
  <div className="absolute w-full h-16 opacity-[0.1]">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-full h-full">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#155DFC"></path>
    </svg>
  </div>
</div>
```

## Common Section Separators
Use these separators between major content sections:

### Horizontal Line
```jsx
<div className="relative h-px w-full my-10 overflow-hidden">
  <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#155DFC]/10 to-transparent"></div>
</div>
```

### Radial Gradient
```jsx
<div className="relative h-12 my-6 overflow-hidden">
  <div className="absolute left-1/2 transform -translate-x-1/2 w-[80%] h-12 bg-radial-gradient opacity-[0.03]"
       style={{
         background: 'radial-gradient(circle, rgba(21,93,252,0.1) 0%, rgba(255,255,255,0) 70%)'
       }}>
  </div>
</div>
```

### Inverted Wave
```jsx
<div className="relative h-12 overflow-hidden rotate-180 opacity-[0.08]">
  <div className="absolute w-full h-12">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-full h-full">
      <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#7394D3"></path>
    </svg>
  </div>
</div>
```

## UI Components Styling

### Buttons
Primary CTAs should use gradient backgrounds:
```jsx
<button className="bg-gradient-to-r from-[#155DFC] to-[#7394D3] hover:shadow-lg hover:shadow-blue-300/20 text-white font-medium px-5 py-2.5 rounded-md transition duration-300">
  Get Started
</button>
```

### Navigation
Navigation links should use this styling:
```jsx
<a className="text-[#1E293C] hover:text-[#155DFC] hover:bg-blue-50/40 px-3 py-2 rounded-md transition duration-300">
  Link Text
</a>
```

### Headers
Page headers should be styled using these classes:
```jsx
<h2 className="text-3xl md:text-4xl font-bold text-[#1E293C] mb-4">
  Section Title
</h2>
```

## Implementation Guidelines

1. All pages should implement the global background wrapper.
2. Every page should have a hero section with the hero background styling.
3. Section transitions should use the appropriate dividers (wave, line, or radial).
4. All section components should use `transparentBg={true}` to ensure backgrounds show through.
5. Maintain consistent spacing using `section-spacing-md` for standard gaps.
6. For alignment fine-tuning, use negative margins like `-mt-6` when needed.
7. Keep opacity levels low (0.01-0.1) for background elements to maintain performance.
8. Use relative sizing with viewport units for background elements.
9. Add `z-10` to elements that need to appear above background layers.
10. For CTA sections, use the gradient buttons to maintain consistent brand appearance. 