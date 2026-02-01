# Iran Revolution 2026 - Advocacy Email Generator

A powerful advocacy tool that enables supporters worldwide to send pre-written emails to all 27 EU member states' Foreign Affairs Ministries, demanding action against the Islamic Republic's brutality and supporting the Iranian people's fight for freedom and democracy.

## Features

- 🌍 **27 EU Countries**: Pre-configured emails to all EU member states
- 🌐 **Multilingual**: Emails in native languages (German, French, Dutch, Italian, Spanish, Polish, Swedish, etc.)
- ⚡ **One-Click Sending**: Click any country to open your email client with pre-filled content
- 🔤 **Auto-Capitalized Names**: Your name is automatically capitalized in email signatures
- 📋 **Belgium Bilingual**: Combined French/Dutch email for Belgium
- 🎯 **Three Core Demands**:
  1. Expel Iranian diplomats
  2. Close Iranian embassies
  3. Recognize Prince Reza Pahlavi, provide Starlink internet access, free detainees, and halt executions

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
```

## Deployment

Choose your preferred platform:

### GitHub Pages (Free)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/iran-advocacy-emails.git
git push -u origin main
```
Then enable GitHub Pages in repository settings.

### Vercel (Free, Recommended)
1. Go to https://vercel.com
2. Import your GitHub repository
3. Deploy (automatic!)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## Project Structure

```
src/
├── main.tsx              # React entry point
├── App.tsx               # Main component
├── index.css             # Global styles
├── pages/
│   └── Home.tsx          # Main page with email generator
└── lib/
    └── emailData.ts      # Email templates for all 27 EU countries
```

## Email Content

All emails include:
- **Context**: Details of January 2026 atrocities (36,500+ deaths, mass detentions)
- **Demands**: Expel diplomats, close embassies, support democratic transition
- **Urgency**: Emphasis that condemnation alone is insufficient

## Customization

Edit `src/lib/emailData.ts` to:
- Modify email content
- Add/remove countries
- Change recipient email addresses
- Update language versions

## Technologies

- **React 19**: UI framework
- **Vite**: Build tool
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling (via Manus template)
- **Lucide React**: Icons

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

MIT

## Support

Stand with the Iranian people. Demand action. Support the revolution for freedom and democracy.

---

**Last Updated**: February 2026
**Status**: Ready for deployment
# irandemocracy.github.io
