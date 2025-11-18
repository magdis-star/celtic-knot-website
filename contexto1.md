# Celtic Knot Website - Project Context

## Project Overview

**Project Name:** Tie the Celtic Knot - Wedding Celebrant Website
**Client:** Kerstin Sandstrom
**Service:** Licensed Ontario Humanist Celebrant specializing in weddings, handfasting, child naming ceremonies, and memorials
**Original Website:** https://tiethecelticknot.ca/
**Live Site:** https://celtic-knot-website.vercel.app/
**GitHub Repository:** https://github.com/magdis-star/celtic-knot-website
**Project Location:** `/Users/magdalenazawadzka/Desktop/dadadaPROJECT/celtic-knot-website`

## Problem Statement

The original website wasn't attracting clients due to:
- Lack of pricing transparency
- Limited testimonials
- No booking system
- Insufficient detail about services
- Not conversion-optimized

## Solution

Built a modern, conversion-focused Next.js website with:
- Clear wedding focus as primary service
- Modern design with Celtic-inspired aesthetics
- Responsive mobile-first layout
- SEO optimization
- Clear call-to-actions throughout
- Professional photography integration

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:**
  - Inter (Sans-serif) - Body text
  - Libre Baskerville (Serif) - Headings
- **Icons:** Inline SVG (no icon library)
- **Deployment:** Ready for Vercel
- **Version Control:** Git/GitHub

## Color Scheme

### Final Colors (after multiple iterations)
- **Primary Green:** `#1e3a2d` - Headers, footer, navigation
- **Accent Bronze:** `#b45309` - CTAs, highlights, icons
- **Background Stone:** `#fafaf9` (stone-50) - Page background
- **White:** `#ffffff` - Cards, content areas
- **Wedding Section:** `linear-gradient(to bottom right, #e8f5e9, #dcedc8)` - Warm sage green with yellow undertones

### Color Journey (rejected options)
1. Orange `#d97706` - Initial color, too bright
2. Teal `#0d9488` - Too cool/coastal
3. Burgundy `#9f1239` - Romantic but not quite right
4. Purple `#7c3aed` - User feedback: "too screaming"
5. Bronze `#b45309` - ✅ APPROVED - Warm and elegant

## Project Structure

```
celtic-knot-website/
├── app/
│   ├── page.tsx          # Main homepage (all content)
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── globals.css       # Global styles and fonts
├── public/
│   ├── Hand-fast-1.jpg                              # Hero background & wedding section
│   ├── KerstinO-scaled-e1603739338128-300x300-1.jpg # Kerstin's portrait
│   └── Tie-the-Celtic-Knot1.png                     # Logo
├── README.md             # Comprehensive documentation
├── package.json
└── tailwind.config.ts
```

## Images Used

Source: `/Users/magdalenazawadzka/Desktop/celticknit/`

1. **Hand-fast-1.jpg** - Handfasting ceremony photo
   - Used in: Hero background, Wedding Spotlight section

2. **KerstinO-scaled-e1603739338128-300x300-1.jpg** - Kerstin's professional photo
   - Used in: My Story (About) section

3. **Tie-the-Celtic-Knot1.png** - Logo
   - Used in: Header navigation

## Website Sections (in order)

### 1. Fixed Header Navigation
- Logo and brand name
- Desktop navigation: Services, Your Process, My Story, Reviews, Check Availability
- Mobile hamburger menu
- Sticky/fixed positioning

### 2. Hero Section
- Full-width with handfasting photo background
- Dark overlay for text readability
- Main tagline: "Your Love Story. Woven with Meaning and Celtic Spirit."
- Primary CTA: "Inquire & Check Availability"

### 3. Wedding Spotlight Section
- Warm sage green gradient background
- Badge: "Specializing in Weddings"
- Large heading and description
- Three bullet points:
  - Fully personalized handfasting & ribbon-tying ceremonies
  - Licensed Ontario Celebrant - legally binding ceremonies
  - Nature-based, Celtic-inspired, & humanist traditions
- Image of handfasting ceremony
- CTA: "Book Your Wedding Ceremony"

### 4. Other Services Section
Two service cards:
- **Child Naming Ceremonies** - Non-religious celebrations
- **Funerals & Memorials** - Compassionate tribute services

Large icons (w-28 h-28 = 112px) with centered layout

### 5. 3-Step Process Section
- Step 1: Discovery & Vision
- Step 2: Deep Dive & Custom Drafting
- Step 3: Rehearsal & The Celebration

### 6. Testimonials Section
Three testimonial cards with 5-star ratings:
- Emily & David - Forest Wedding
- The Chen Family - Naming Ceremony
- Sarah M. - Memorial Service

### 7. My Story (About Kerstin)
- Kerstin's portrait photo
- Licensed Ontario Celebrant through Humanist Canada
- Passion for nature, history, Celtic traditions
- Focus on authenticity and meaning

### 8. FAQ Section
Four questions:
1. Are you legally registered in Ontario?
2. How far in advance should I book?
3. What is a handfasting ceremony?
4. Can we write our own vows?

### 9. Contact Form
- Name, Email, Event Type, Date, Message fields
- Currently shows success message (no email integration yet)
- Clean, modern design

### 10. Footer
- Business name and tagline
- Email: kerstin@tiethecelticknot.ca
- Copyright notice

## Key Design Decisions

### Wedding Focus
- Created dedicated "Wedding Spotlight" section
- Removed weddings from "Other Services" section
- Weddings are the primary focus, other services are secondary

### Content Removals (User Requested)
- ❌ Pricing section (3 packages: $500, $850, $1,200)
- ❌ Calendly booking widget
- ❌ Instagram feed section
- ❌ "LGBTQ+ friendly & inclusive" line from wedding benefits
- ❌ FAQ: "Do you work with LGBTQ+ couples?"
- ❌ FAQ: "What happens if you're sick on our wedding day?"
- ❌ Urgency/scarcity messaging ("Limited dates for 2025")

### Icon Sizing Journey
- Started: 48px (w-12 h-12)
- First increase: 80px (w-20 h-20)
- Final size: 112px (w-28 h-28) with centered layout

### Navigation Structure
Final nav items:
- Services
- Your Process
- My Story
- Reviews
- Check Availability (CTA button)

## SEO Configuration

### Meta Tags (in layout.tsx)
```typescript
title: "Tie the Celtic Knot | Humanist Wedding Officiant & Celebrant Ontario"
description: "Licensed Ontario Celebrant Kerstin Sandstrom specializes in bespoke wedding ceremonies, handfasting rituals, child naming ceremonies, and memorials."
keywords: [
  "wedding officiant Ontario",
  "handfasting ceremony",
  "Celtic wedding",
  "humanist celebrant",
  "Ontario wedding officiant",
  "child naming ceremony",
  "memorial service",
  "non-religious wedding"
]
```

### Open Graph Tags
- Properly configured for social media sharing
- URL: https://tiethecelticknot.ca
- Locale: en_CA (Canadian English)

## Git Commits

### Commit 1: Initial website build
```
Complete Celtic Knot website redesign with wedding focus
- Modern Next.js 16 site with TypeScript and Tailwind CSS
- Wedding Spotlight section as primary service focus
- Bronze (#b45309) and forest green (#1e3a2d) color scheme
- Integrated client images
- Responsive design with smooth scroll navigation
```

### Commit 2: FAQ updates
```
Remove two FAQ items from website
- Removed "Do you work with LGBTQ+ couples?" FAQ
- Removed "What happens if you're sick on our wedding day?" FAQ
- Streamlined FAQ section to 4 focused questions
```

### Commit 3: Context documentation
```
Add project context documentation
- Complete project overview and requirements
- Tech stack and design decisions
- Color scheme evolution and final choices
- All content sections and structure
- Pending tasks and future enhancements
- Deployment instructions
```

## Pending Tasks / Future Enhancements

### Critical (For Launch)
1. **Email Integration** - Contact form needs actual email functionality
   - Options: Formspree (easiest), EmailJS, or Resend
   - Currently just shows success message

2. **Real Testimonials** - Replace placeholder testimonials with actual client reviews

3. **Optimize Images** - Hand-fast-1.jpg is large, should be optimized for web

4. **Add Favicon** - Browser tab icon needed

### Optional Enhancements
5. **Calendly Integration** - If client decides to add booking
6. **Pricing Section** - If client decides to add transparent pricing
7. **Google Analytics** - Add tracking code
8. **Instagram Feed** - If client decides to add social proof
9. **Photo Gallery** - Past ceremonies showcase
10. **Blog Section** - For SEO and content marketing
11. **Wedding Spotlight Background** - User said "still thinking, let's leave it for later"

## Deployment Status

### Vercel Deployment ✅ LIVE
- **Live URL:** https://celtic-knot-website.vercel.app/
- **Status:** Successfully deployed and operational
- **Verified:** All sections loading correctly, images working, no technical issues
- **Next Step:** Connect custom domain tiethecelticknot.ca (pending)

### Deployment Process Completed
1. ✅ Code pushed to GitHub: `magdis-star/celtic-knot-website`
2. ✅ Connected to Vercel
3. ✅ Automatic deployment configured
4. ✅ Site live and functional
5. ⏳ Custom domain connection (to be done later)

### Alternative: Netlify
See README.md for instructions

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Contact Information

**Email:** kerstin@tiethecelticknot.ca
**Domain:** tiethecelticknot.ca
**Location:** Ontario, Canada

## Design Philosophy

- **Conversion-focused:** Strategic CTAs, clear value propositions
- **Mobile-first:** Responsive design for all devices
- **Clean & Professional:** Not cluttered, easy to navigate
- **Celtic-inspired:** Colors and imagery reflect brand
- **Authentic:** Personal, warm tone throughout
- **SEO-optimized:** Proper semantic HTML, meta tags

## Notes

- User preferred not to include urgency/scarcity messaging
- User removed all LGBTQ+ references per personal preference
- Pricing intentionally hidden - user wants contact-first approach
- Wedding season: May-October (mentioned in FAQ)
- Booking recommendation: 6-12 months in advance

---

## Session Summary

**Date:** 2025-11-18
**Status:** ✅ Complete - Website built, deployed, and live on Vercel

### What Was Accomplished
1. ✅ Complete website redesign from scratch
2. ✅ Modern Next.js 16 + TypeScript + Tailwind CSS implementation
3. ✅ All client images integrated (logo, handfasting photo, portrait)
4. ✅ Multiple design iterations to perfect colors and layout
5. ✅ Wedding-focused content strategy
6. ✅ Content refinements based on client feedback
7. ✅ All code committed to GitHub (3 commits)
8. ✅ Successfully deployed to Vercel
9. ✅ Site verified and fully operational

### Key Numbers
- **Design iterations:** 6 color schemes tested
- **Icon size changes:** 3 iterations (48px → 80px → 112px)
- **Sections:** 10 main sections
- **FAQ items:** Started with 6, finalized at 4
- **Git commits:** 3 commits with full history
- **Lines of context documentation:** 330+ lines

**Last Updated:** 2025-11-18
**Project Status:** ✅ LIVE at https://celtic-knot-website.vercel.app/
**Next Step:** Custom domain connection (when ready)
