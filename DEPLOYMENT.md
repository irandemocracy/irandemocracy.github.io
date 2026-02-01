# Deployment Guide: GitHub Pages & Vercel

Your Iran Revolution 2026 Advocacy Email Generator is now structured to deploy on **both GitHub Pages and Vercel** with zero configuration changes.

---

## Quick Start

### Option 1: GitHub Pages (Free, Simple)

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/iran-advocacy-emails.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repo → Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, folder: / (root)
   - Save

3. **Your site is live at:**
   ```
   https://yourusername.github.io/iran-advocacy-emails/
   ```

**Automatic deployments**: Every push to `main` triggers automatic build and deployment.

---

### Option 2: Vercel (Free, Faster, Better Performance)

1. **Connect your GitHub repository**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Select "iran-advocacy-emails"

2. **Vercel auto-detects Vite**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - (These are already configured in `vercel.json`)

3. **Deploy**
   - Click "Deploy"
   - Your site is live in ~1 minute

4. **Your site is live at:**
   ```
   https://iran-advocacy-emails.vercel.app
   ```

**Automatic deployments**: Every push to `main` triggers automatic deployment.

---

## Project Structure

```
iran-advocacy-emails/
├── src/                          # React source code
│   ├── main.tsx                 # Entry point
│   ├── App.tsx                  # Main app component
│   ├── index.css                # Global styles
│   ├── pages/
│   │   └── Home.tsx             # Main page
│   └── lib/
│       └── emailData.ts         # Email templates for all 27 EU countries
├── public/                       # Static assets (images, fonts, etc.)
│   └── images/
│       └── hero-background.png  # Hero image
├── index.html                    # HTML entry point
├── vite.config.ts               # Vite configuration (works for both)
├── package.json                 # Dependencies
├── vercel.json                  # Vercel config
├── .github/
│   └── workflows/
│       └── deploy-github-pages.yml  # GitHub Actions workflow
└── DEPLOYMENT.md                # This file
```

---

## Deployment Comparison

| Feature | GitHub Pages | Vercel |
|---------|--------------|--------|
| **Cost** | Free | Free |
| **Setup Time** | 5 minutes | 3 minutes |
| **Build Speed** | ~2 minutes | ~30 seconds |
| **Performance** | Good | Excellent (Global CDN) |
| **Custom Domain** | Yes | Yes |
| **Analytics** | No | Yes (built-in) |
| **Automatic Deployments** | Yes | Yes |
| **Preview URLs** | No | Yes (for PRs) |

---

## Custom Domain Setup

### GitHub Pages Custom Domain

1. Go to your repo → Settings → Pages
2. Under "Custom domain", enter your domain (e.g., `iran-advocacy.com`)
3. Update your domain's DNS settings:
   - Add `A` record: `185.199.108.153`
   - Or `CNAME` record: `yourusername.github.io`
4. Wait 24-48 hours for DNS propagation

### Vercel Custom Domain

1. Go to your Vercel project → Settings → Domains
2. Add your custom domain
3. Vercel provides DNS instructions
4. Update your domain registrar's DNS settings
5. Done! (Usually takes 5-10 minutes)

---

## Environment Variables

This project doesn't require environment variables. All data is hardcoded in `src/lib/emailData.ts`.

If you need to add environment variables in the future:

**GitHub Pages**: Not supported (static site only)

**Vercel**: 
1. Go to Settings → Environment Variables
2. Add your variables
3. They'll be available during build as `process.env.VARIABLE_NAME`

---

## Troubleshooting

### GitHub Pages: Site shows 404
- Wait 2-3 minutes for first deployment
- Check that the `gh-pages` branch was created
- Verify Settings → Pages shows the correct source

### GitHub Pages: Images not loading
- All images are in `public/` folder
- They're automatically served at `/images/filename.png`
- No path changes needed

### Vercel: Build fails
- Check the build logs in Vercel dashboard
- Ensure `npm run build` works locally: `npm run build`
- Check that all dependencies are in `package.json`

### Site works locally but not deployed
- Run `npm run build` locally to test
- Check the `dist/` folder is created correctly
- Verify all imports use correct paths

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Making Changes

1. Edit files in `src/`
2. Test locally: `npm run dev`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update email content"
   git push
   ```
4. Deployment happens automatically!

---

## Sharing Your Site

**GitHub Pages:**
```
https://yourusername.github.io/iran-advocacy-emails/
```

**Vercel:**
```
https://iran-advocacy-emails.vercel.app
```

**Custom Domain (either platform):**
```
https://yourdomain.com
```

Share these links with supporters to start the advocacy campaign!

---

## Support

- **GitHub Pages**: https://docs.github.com/en/pages
- **Vercel**: https://vercel.com/docs
- **Vite**: https://vitejs.dev/guide/

---

## Next Steps

1. Choose GitHub Pages or Vercel (or both!)
2. Follow the Quick Start section above
3. Share your live site with supporters
4. Watch the advocacy campaign grow globally!

Stand with the Iranian people. Demand action. Support the revolution for freedom and democracy.
