# Portfolio Website

A professional, minimal, and technical personal portfolio website inspired by [jrosser.co.uk](https://jrosser.co.uk/). Built with **Next.js**, **Vanilla CSS**, and **OKLCH** colors.

## 🚀 Features

- **JetBrains Mono Typography**: A clean, technical, monospaced look.
- **Dynamic Light/Dark Mode**: Manual toggle with system preference fallback and persistence.
- **Modular Data-Driven Content**: Manage all text and items through simple data files.
- **Responsive Design**: Optimized for mobile and desktop "document-like" layout.
- **Static Export**: Zero-config deployment for GitHub Pages.

## 📁 Project Structure

```text
├── src/
│   ├── app/            # Next.js App Router (Pages & Layout)
│   ├── components/     # Modular UI Components (Navbar, Cards, Gallery)
│   ├── data/           # Content Data Files (Skills, Projects, CV)
├── public/             # Static Assets (Images, resume.pdf)
└── next.config.ts      # Static export configuration
```

## 🛠 Management

Update your content by editing the files in `src/data/`:
- `skills.ts`: Technical Expertise categories and tags.
- `projects.ts`: Featured work cards.
- `articles.ts`: Medium or blog links.
- `experience.ts`: CV/Resume timeline.
- `paintings.ts`: Art showcase items.

## 💻 Local Development

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Build for static export: `npm run build`

## 📦 Deployment

This project is configured for **GitHub Pages** using GitHub Actions.

### Automated Setup (Recommended)

1.  **Push** your code to the `main` branch.
2.  Go to your repository on GitHub.
3.  Navigate to **Settings** > **Pages**.
4.  Under **Build and deployment** > **Source**, select **GitHub Actions**.
5.  Your site will now automatically build and deploy every time you push.

### Manual Setup
Alternatively, you can build locally (`npm run build`) and manually deploy the `out/` directory.
