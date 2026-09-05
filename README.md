# VIKASH K — Digital Studio Developer Portfolio

Modern, high-velocity personal engineering portfolio built with **React + Vite + Tailwind CSS + Framer Motion**, featuring a digital studio editorial aesthetic, dual-theme support (Dark Mode default & clean White Background Light Mode), and Times New Roman typography styling.

---

## ⚡ Key Highlights & Architecture

- **Typography**: Refined Times New Roman (`"Times New Roman", Times, Georgia, serif`) display headings and editorial descriptions paired with `JetBrains Mono` for metadata tags and code badges.
- **Dual-Theme Support**:
  - **Dark Mode**: Near-black `#0a0a0a` backdrop, dark studio cards `#121212`, off-white text `#f4f4f5`, and electric sky blue `#38bdf8` accents.
  - **Light Mode (White Background)**: Pure white `#ffffff` backdrop, crisp dark charcoal text `#0f172a`, elevated white cards with subtle borders `#e2e8f0`, and deep oceanic blue `#0284c7` accents.
- **Digital Studio Hero**: Bold split-line heading, positioning statement, two-button CTA group (`View Work` & `Download Resume`), interactive abstract architecture HUD preview, and infinite scrolling skills marquee.
- **Autonomous AI Terminal**: Floating interactive `Vikash-AI Terminal` dock capable of answering recruiter questions about projects, academic background at VIT Chennai, research at IIIT Kottayam, and contact details.

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start local dev server (default: http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📦 Push to GitHub

To push your portfolio codebase to your GitHub repository:

```bash
# 1. Initialize git repository (if not already initialized)
git init

# 2. Stage all project files (.gitignore will exclude node_modules and dist)
git add .

# 3. Commit your changes
git commit -m "feat: digital studio portfolio with Times New Roman styling and dual-theme"

# 4. Set the primary branch to main
git branch -M main

# 5. Connect your remote GitHub repository (replace with your repo URL)
git remote add origin https://github.com/vikashk2024-stack/portfolio.git

# 6. Push to GitHub
git push -u origin main
```

> If you have already initialized the repo and only need to push the new updates:
> ```bash
> git add .
> git commit -m "feat: complete light mode white background and Times New Roman typography"
> git push
> ```

---

## 🌐 Deploy to Vercel

### Option A: Automatic Deployment via GitHub (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** &rarr; **"Project"**.
3. Select your `portfolio` repository and click **Import**.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Vercel will build and provide a live URL (`https://<your-portfolio>.vercel.app`).
6. Every future `git push` to `main` will automatically trigger an instant deployment.

### Option B: Deploy from Terminal with Vercel CLI
```bash
npx vercel --prod
```

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3 (Custom Digital Studio Design System)
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Deployment**: Vercel (Configured with `vercel.json` SPA rewrites & security headers)
