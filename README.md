# Tie the Celtic Knot - Wedding Celebrant Website

A modern, conversion-focused website for Kerstin Sandstrom's humanist celebrant services in Ontario, Canada.

## 🎯 Features

- ✅ **Modern Design**: Clean, professional layout with Celtic-inspired color scheme
- ✅ **Conversion Optimized**: Strategic CTAs, pricing transparency, and social proof
- ✅ **Fully Responsive**: Mobile-first design that works on all devices
- ✅ **SEO Optimized**: Proper meta tags, semantic HTML, and fast loading
- ✅ **Contact Form**: Integrated contact form ready for email service integration
- ✅ **Booking Ready**: Placeholder for Calendly integration
- ✅ **Testimonials**: Real client reviews to build trust
- ✅ **FAQ Section**: Answers common questions upfront
- ✅ **Transparent Pricing**: Three clear package tiers

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd celtic-knot-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

Vercel is made by the creators of Next.js and provides the best experience:

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign up/in

3. Click "New Project" and import your GitHub repository

4. Vercel will auto-detect Next.js and configure everything

5. Click "Deploy" - your site will be live in minutes!

6. Connect your custom domain (tiethecelticknot.ca) in the Vercel dashboard

### Option 2: Netlify

1. Build the project:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com) and sign up/in

3. Drag and drop the `.next` folder or connect your Git repository

4. Configure custom domain in Netlify settings

### Option 3: Traditional Hosting (cPanel/HostGator)

For traditional hosting, you'll need Node.js support. Contact your hosting provider to ensure they support Next.js applications.

## 🔧 Customization Guide

### 1. Update Content

Edit `/app/page.tsx` to modify:
- Hero text and tagline
- Services descriptions
- Testimonials
- FAQ items
- Contact form fields

### 2. Change Colors

The color scheme uses CSS custom properties. Update in `/app/page.tsx`:
- Primary Green: `#1e3a2d`
- Accent Gold: `#d97706`
- Background: `#fafaf9`

### 3. Add Real Images

Replace placeholder images:
- Hero background: Line 114 in `page.tsx`
- About section photo: Lines 464-472 in `page.tsx`

Add images to `/public` folder and reference them like:
```tsx
backgroundImage: 'url(/your-image.jpg)'
```

### 4. Integrate Calendly

1. Sign up at [calendly.com](https://calendly.com)
2. Create your booking page
3. Get the embed code
4. Replace the placeholder at lines 682-704 in `page.tsx` with:

```tsx
<div className="calendly-inline-widget" data-url="YOUR_CALENDLY_URL" style={{minWidth: '320px', height: '700px'}}></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

### 5. Setup Contact Form Email

The form currently shows a success message. To send actual emails:

**Option A: Use EmailJS (Free)**
1. Sign up at [emailjs.com](https://emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Update form handler in `page.tsx`

**Option B: Use Formspree (Free)**
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form action attribute

**Option C: Use Resend (Recommended)**
1. Sign up at [resend.com](https://resend.com)
2. Install: `npm install resend`
3. Create API route in `/app/api/contact/route.ts`

## 📱 SEO & Analytics

### Google Analytics
Add your Google Analytics ID in `/app/layout.tsx`

### Google Search Console
1. Deploy your site
2. Visit [search.google.com/search-console](https://search.google.com/search-console)
3. Add your domain
4. Verify ownership

### Meta Tags
Already configured in `/app/layout.tsx`. Update as needed for:
- Page title
- Description
- Keywords
- Open Graph tags

## 🎨 Design System

### Colors
- **Primary Green** (`#1e3a2d`): Headers, footer, accents
- **Accent Gold** (`#d97706`): CTAs, highlights
- **Stone/Gray** (`#fafaf9`): Backgrounds
- **White** (`#ffffff`): Cards, content areas

### Typography
- **Headings**: Libre Baskerville (Serif) - Elegant, Celtic feel
- **Body**: Inter (Sans-serif) - Clean, readable

### Spacing
- Mobile-first responsive design
- Tailwind spacing scale (4px base unit)
- Generous padding for breathing room

## 📊 Performance Tips

- Images are optimized with Next.js Image component
- Fonts are loaded with `display: swap` for better performance
- CSS is minimized and tree-shaken
- JavaScript is code-split automatically

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **TypeScript**: Type-safe development
- **Fonts**: Google Fonts (Inter, Libre Baskerville)
- **Icons**: Heroicons (SVG)

## 📝 Todo / Future Enhancements

- [ ] Integrate real email service for contact form
- [ ] Add Calendly booking widget
- [ ] Add photo gallery of past ceremonies
- [ ] Create blog section for SEO
- [ ] Add Instagram feed integration
- [ ] Set up automated email responses
- [ ] Add testimonials carousel
- [ ] Implement dark mode (optional)

## 🐛 Troubleshooting

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Font Not Loading
Fonts are loaded from Google Fonts. Check your internet connection and ensure the fonts are imported in `layout.tsx`.

## 📞 Support

For questions about the website code or deployment:
- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Check Tailwind CSS docs: [tailwindcss.com](https://tailwindcss.com)
- Check Vercel deployment guide: [vercel.com/docs](https://vercel.com/docs)

## 📄 License

This website is proprietary and built specifically for Tie the Celtic Knot celebrant services.

---

Built with ❤️ using Next.js and Tailwind CSS
