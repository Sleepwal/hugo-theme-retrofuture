# Hugo Theme RetroFuture

A **Retro-Futuristic** Hugo blog theme with neon aesthetics, CRT scanlines, and 20th-century future vision.

## Features

- 🎨 **Retro-Futuristic Design** - Neon colors, CRT scanlines, hexagonal decorations
- 📱 **Responsive Layout** - Mobile-first design with adaptive sidebar
- 🔍 **Built-in Search** - Client-side search functionality
- 📑 **Table of Contents** - Auto-generated TOC for articles
- 🏷️ **Taxonomy Support** - Categories and tags with cloud widget
- 📖 **Related Posts** - Automatic related content recommendations
- 🌐 **Multilingual** - English and Chinese translations
- ⚡ **Performance Optimized** - Lazy loading, minified assets
- 🎭 **Animations** - Neon glow effects, glitch text, smooth transitions

## Installation

### Method 1: Git Clone

```bash
cd your-hugo-site/themes
git clone https://github.com/yourusername/hugo-theme-retrofuture.git
```

### Method 2: Git Submodule

```bash
cd your-hugo-site
git submodule add https://github.com/yourusername/hugo-theme-retrofuture.git themes/hugo-theme-retrofuture
```

### Method 3: Hugo Modules

```toml
# config/_default/hugo.toml
theme = "github.com/yourusername/hugo-theme-retrofuture"
```

## Configuration

### Site Configuration

```toml
# config/_default/hugo.toml
baseURL = "https://example.org/"
languageCode = "en-us"
title = "RetroFuture Blog"
theme = "hugo-theme-retrofuture"

[params]
  author = "Your Name"
  description = "A Retro-Futuristic Blog"
  avatar = "/images/avatar.png"

[params.colors]
  primary = "#00fff7"      # Neon Cyan
  secondary = "#ff00ff"    # Neon Purple
  accent = "#ff9500"       # Amber Orange
  background = "#0a0a1a"   # Deep Space Blue
  surface = "#1a1a2e"      # Card Background

[params.fonts]
  display = "Orbitron"
  body = "Space Mono"
  code = "Share Tech Mono"

[params.article]
  tableOfContents = true
  readingTime = true
  relatedContent = true

[params.features]
  darkMode = true
  search = true

[menu]
  [[menu.main]]
    identifier = "home"
    name = "Home"
    url = "/"
    weight = 1

  [[menu.main]]
    identifier = "archives"
    name = "Archives"
    url = "/archives/"
    weight = 2

  [[menu.main]]
    identifier = "tags"
    name = "Tags"
    url = "/tags/"
    weight = 3

  [[menu.main]]
    identifier = "categories"
    name = "Categories"
    url = "/categories/"
    weight = 4

[outputs]
  home = ["HTML", "RSS", "JSON"]
```

### Color Schemes

| Scheme | Primary | Secondary | Background |
|--------|---------|-----------|------------|
| Neon Cyan | #00fff7 | #ff00ff | #0a0a1a |
| Neon Purple | #bf00ff | #00fff7 | #0f0a1a |
| Amber | #ff9500 | #00ff88 | #1a1408 |
| Silver | #c0c0c0 | #4169e1 | #1a1a1a |

## Content Structure

```
content/
├── posts/
│   ├── first-post.md
│   └── second-post.md
├── categories/
│   └── _index.md
├── tags/
│   └── _index.md
└── search/
    └── _index.md
```

### Article Front Matter

```yaml
---
title: "My First Post"
date: 2024-01-01
draft: false
description: "A brief description"
image: "/images/featured.jpg"
categories:
  - Technology
tags:
  - Hugo
  - Theme
---
```

## Customization

### Custom CSS

Create `assets/scss/custom.scss` in your site:

```scss
:root {
    --color-primary: #ff00ff;
}

.article-card {
    border-radius: 20px;
}
```

### Custom Fonts

```toml
[params.fonts]
  display = "Your Display Font"
  body = "Your Body Font"
  code = "Your Code Font"
```

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Credits

- [Hugo](https://gohugo.io/) - Static Site Generator
- [Orbitron](https://fonts.google.com/specimen/Orbitron) - Display Font
- [Space Mono](https://fonts.google.com/specimen/Space+Mono) - Body Font

## License

MIT License - See [LICENSE](LICENSE) for details.
