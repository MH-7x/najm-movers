# Al Dhahabih Movers & Packers Website

A modern, fully responsive Next.js web application for Al Dhahabih Movers & Packers, offering comprehensive moving and packing services across the United Arab Emirates.

**🏢 Business:** Professional furniture movers and packers  
**🌍 Service Area:** Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain, Ras Al Khaimah  
**📱 Contact:** +971 55 4495331 | nadfurniture.movers.llc@gmail.com

## 🚀 Quick Start

### Prerequisites

- Node.js ^18.17
- pnpm (or npm)

### Installation

```bash
# Clone and install
git clone https://github.com/MH-7x/najm-movers.git
cd najm-movers
pnpm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with your configuration
```

### Development

```bash
pnpm dev
# Open http://localhost:3000
```

### Build & Deploy

```bash
pnpm build      # Create production build
pnpm start      # Run production server
pnpm lint       # Check code quality
```

## 📋 What's Inside

### Tech Stack

- **Framework:** Next.js 16 + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui components
- **Icons:** Lucide React (400+ icons)
- **Carousels:** Embla Carousel with autoplay
- **Email:** Resend API for quote submissions
- **UI Components:** Radix UI primitives with full accessibility

### Core Features

✅ **Multi-location Pages** - 12+ UAE locations with local content  
✅ **Quote Request System** - Interactive forms with email integration  
✅ **Customer Reviews** - Carousel of verified testimonials  
✅ **Dynamic FAQ Sections** - With auto-generated SEO schemas  
✅ **SEO Optimized** - Meta tags, canonical URLs, dynamic sitemap  
✅ **Mobile Responsive** - Mobile-first design on all devices  
✅ **Type Safe** - Full TypeScript with strict mode

### Pages & Routes

```
/                                    → Homepage
/about-us/                          → Company information
/contact-us/                        → Contact form
/privacy-policy/                    → Privacy policy
/terms-and-conditions/              → Terms & conditions

Service Pages (12+ locations):
/furniture-movers-in-dubai/
/house-movers-and-home-shifting-dubai/
/office-movers-in-dubai/
/villa-movers-and-packers-in-dubai/
/cheap-movers-and-packers-in-dubai/
/packing-and-moving-services-dubai/
/movers-and-packers-in-abu-dhabi/
/movers-and-packers-in-sharjah/
/movers-and-packers-in-ajman/
/movers-and-packers-in-al-ain/
/movers-and-packers-in-ras-al-khaimah/
```

## 📁 Project Structure

```
app/                    → Next.js pages & layouts
components/
  ├── home/            → Homepage components
  ├── shared/          → Reusable components (QuoteForm, FAQ, etc.)
  ├── layout/          → Header & Footer
  └── ui/              → shadcn/ui components
lib/                    → Utilities & configurations
  ├── App.ts           → App constants (phone, email, name)
  ├── MetaDataTemplate.ts → SEO metadata helper
  ├── FormSubmission.ts → Email & form handling
  └── GenerateFaqSchema.ts → SEO schema generation
public/                 → Static assets (images, icons)
```

**📚 For detailed documentation:** See [README_DETAILED.md](./README_DETAILED.md)

## 🔧 Environment Variables

Create `.env.local`:

```env
APP_URL=https://your-domain.com
RESEND_API_KEY=your_key_here
NEXT_PUBLIC_GTM_ID=your_gtm_id_here
```

## 📝 Development

### Adding a New Location Page

1. Create folder: `app/your-location-name/`
2. Add `page.tsx` using the location template
3. Import shared components (ServiceHero, QuoteForm, FAQ, Reviews)
4. Update metadata with location-specific content

### Customizing Quote Form

- Edit `components/shared/QuoteForm.tsx`
- Update `FormDataType` in `lib/FormSubmission.ts`
- Form fields will be validated and emailed automatically

### Adding Reviews

Edit the data in `ReviewsSection.tsx` to add customer testimonials and ratings.

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Docker

```bash
docker build -t najm-movers .
docker run -p 3000:3000 najm-movers
```

### Standard Server

```bash
pnpm build && pnpm start
```

## 🐛 Troubleshooting

**Build fails?**

```bash
rm -rf .next node_modules
pnpm install && pnpm build
```

**Email not working?**

- Check `RESEND_API_KEY` in `.env.local`
- Verify email is whitelisted in Resend dashboard
- Check Resend logs

**Pages not loading?**

- Ensure all required environment variables are set
- Clear Next.js cache: `rm -rf .next`
- Restart dev server

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Resend Email](https://resend.com)

## 📞 Support

For business inquiries:  
📱 +971 55 4495331  
📧 nadfurniture.movers.llc@gmail.com

---

**Version:** 0.1.0 | **Updated:** March 2026
