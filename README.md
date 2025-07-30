markdownDownloadCopy code Wrap<!-- GitHub README.md – Pizzeria App -->
<!-- language: markdown -->

# 🍕 Pizzeria – Modern Ordering Experience

A lightning-fast, fully-static Next.js storefront for a neighbourhood pizzeria.  
Built with TypeScript, styled with Tailwind & Shadcn/ui, and optimized for Core Web Vitals.

## ✨ Highlights

- ⚡ **Next.js 15 (App Router)** – zero-config edge deployment on Vercel  
- 📱 **Responsive first** – mobile-friendly layout & dark-mode support  
- 🎯 **Shadcn/ui** – accessible, theme-ready components  
- 🛒 **Cart state** – localStorage-backed, SSR-safe context  
- 🌐 **Static Generation** – 11 pre-rendered pages, < 200 kB first load  
- 🧪 **Type-safe** – strict TypeScript & ESLint rules enabled  

## 📸 Screenshot

![Pizzeria demo]('')

## 🚀 Quick Start

1. **Clone & install**
   ```bash
   git clone https://github.com/<your-username>/pizzeria.git
   cd pizzeria
   pnpm install       # or npm / yarn

1. 
Run dev server
bashDownloadCopy code Wrappnpm dev
Open http://localhost:3000

2. 
Build for production
bashDownloadCopy code Wrappnpm build         # .next folder ready to deploy
pnpm start         # local prod preview


🧱 Tech Stack
LayerTechFrameworkNext.js 15 (App Router)LanguageTypeScript 5.x (strict)StylingTailwind CSS + Shadcn/ui componentsStateReact Context + use-local-storage-stateLintingESLint + Prettier + next lintDeploymentVercel (zero-config)

⚙️ Environment Variables
Create .env.local (none required for basic usage, but keep it here for future extensibility):
bashDownloadCopy code Wrap# Optional: analytics, CMS, etc.
NEXT_PUBLIC_GA_ID=
🧪 Scripts
CommandDescriptionpnpm devStart dev serverpnpm buildProduction buildpnpm startProd server (after build)pnpm lintESLint + Prettier checkpnpm analyzeBundle analyzer (@next/bundle)
📦 Deployment

Or push to GitHub — Vercel auto-detects and deploys.
🤝 Contributing

1. Fork & branch (git checkout -b feature/amazing-pizza)
2. Commit (git commit -m 'feat: add gluten-free filter')
3. PR with screenshot if UI changed

We use Conventional Commits.
📄 License
MIT © Your Name.
Feel free to fork, sell pizzas, or both.