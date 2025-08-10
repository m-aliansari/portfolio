# Muhammad Ali Ansari - Portfolio Website

A modern, responsive portfolio website built with Nuxt 4, Vue 3, and motion-v animations. Features excellent SEO, performance optimizations, and a clean, maintainable codebase.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, desktop, and wide screens
- **Motion Animations**: Smooth page transitions and component animations using motion-v
- **SEO Optimized**: Server-side rendering, meta tags, and structured data
- **Performance Focused**: Code splitting, lazy loading, and optimized images
- **Maintainable Code**: Well-structured with separation of concerns

## 🛠️ Tech Stack

- **Framework**: Nuxt 4 with Vue 3
- **Styling**: SCSS with component-level styles
- **Animations**: motion-v (Framer Motion for Vue)
- **Images**: Nuxt Image for optimization
- **Performance**: SSR, code splitting, lazy loading
- **SEO**: Meta tags, structured data, sitemap

## 📁 Project Structure

```
app/
├── assets/
│   ├── images/
│   │   └── placeholder/          # Placeholder images for projects
│   └── scss/
│       └── main.scss            # Global styles and utilities
├── components/
│   ├── ExperienceCard/
│   │   ├── index.vue            # Experience card component
│   │   └── ExperienceCard.scss  # Component-specific styles
│   ├── HighlightCard/
│   │   ├── index.vue            # Project highlight component
│   │   └── HighlightCard.scss   # Component-specific styles
│   ├── Navbar/
│   │   ├── index.vue            # Navigation component
│   │   └── Navbar.scss          # Component-specific styles
│   └── SkillsCategory/
│       ├── index.vue            # Skills category component
│       └── SkillsCategory.scss  # Component-specific styles
├── constants/
│   ├── experience.js            # Job experience data
│   ├── highlights.js            # Project highlights data
│   ├── navigation.js            # Navigation links
│   ├── personal.js              # Personal information
│   ├── seo.js                   # SEO configuration
│   └── styles.js                # Design system constants
├── layouts/
│   └── default.vue              # Main layout with navbar
├── mixins/
│   └── responsive.js            # Responsive behavior mixin
├── pages/
│   └── index.vue                # Main portfolio page
├── utils/
│   ├── animation.js             # Animation utilities
│   └── contact.js               # Contact form utilities
└── app.vue                      # Root app component
```

## 🎨 Design System

### Colors
- Primary: `#3b82f6` (Blue)
- Secondary: `#8b5cf6` (Purple)
- Accent: `#06b6d4` (Cyan)
- Success: `#10b981` (Green)
- Warning: `#f59e0b` (Yellow)
- Error: `#ef4444` (Red)

### Typography
- Font Family: Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700, 800

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large: > 1280px

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Website-portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Start development server:
```bash
pnpm dev
```

4. Build for production:
```bash
pnpm build
```

## 📱 Responsive Design

The website is fully responsive with:
- **Mobile-first approach**
- **Flexible grid systems**
- **Optimized touch targets**
- **Readable typography at all sizes**
- **Performance optimizations for mobile**

## ⚡ Performance Features

- **Code Splitting**: Components loaded on demand
- **Lazy Loading**: Images and components load when needed
- **Image Optimization**: WebP, AVIF formats with responsive sizes
- **SSR**: Server-side rendering for better SEO
- **Minification**: Compressed assets and code
- **Caching**: Optimized caching strategies

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta information
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Automatic sitemap generation
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Canonical URLs**: Proper URL canonicalization

## 🎭 Animation Features

- **Page Transitions**: Smooth navigation between sections
- **Scroll Animations**: Elements animate on scroll
- **Hover Effects**: Interactive hover animations
- **Loading States**: Smooth loading animations
- **Motion-v Integration**: Framer Motion for Vue

## 📊 Lighthouse Performance

Target scores:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

## 🛠️ Development

### Adding New Components

1. Create component folder in `app/components/`
2. Add `index.vue` and `ComponentName.scss`
3. Import in parent component
4. Use constants for data

### Adding New Constants

1. Create file in `app/constants/`
2. Export named constants
3. Import where needed

### Styling Guidelines

- Use SCSS for all styles
- Component-level styles in component folders
- Global styles in `assets/scss/main.scss`
- Use design system constants from `constants/styles.js`

## 📝 Content Management

### Personal Information
Update `app/constants/personal.js` for:
- Name, title, contact info
- About section content
- Statistics and achievements

### Experience
Update `app/constants/experience.js` for:
- Job history
- Company information
- Achievements and responsibilities

### Skills
Update `app/constants/skills.js` for:
- Technical skills
- Proficiency levels
- Skill categories

### Projects
Update `app/constants/highlights.js` for:
- Project highlights
- Screenshots and descriptions
- Key metrics and achievements

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository
2. Configure build settings
3. Deploy automatically

### Netlify
1. Connect repository
2. Set build command: `pnpm build`
3. Set publish directory: `.output/public`

### Manual Deployment
1. Build the project: `pnpm build`
2. Upload `.output/public` to your hosting provider

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements, please create an issue or contact directly.

---

Built with ❤️ using Nuxt 4, Vue 3, and modern web technologies.
