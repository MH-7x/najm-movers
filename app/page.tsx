import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  CheckCircle,
  Star,
  ArrowRight,
  Truck,
  Package,
  Home,
  Building2,
  Sofa,
  DollarSign,
  Warehouse,
  CheckCheck,
  UserCheck2,
  AlarmCheck,
  BoxesIcon,
  MapPinHouse,
  ShieldCheck,
} from "lucide-react";
import ReviewSection from "@/components/shared/ReviewsSection";
import CTASection from "@/components/shared/CTASection";
import QuoteFormSection from "@/components/shared/QuoteFormSection";
import FAQSection from "@/components/shared/FAQSection";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers and Packers in Dubai | Najm Al Dhahabih Furniture Movers",
      desc: "Looking for trusted movers and packers in Dubai? Najm Al Dhahabih offers house, villa, office & furniture moving services across UAE. Call +971-55-4495331 for a free quote.",
    },
    image: {
      path: "/Najm-Al-Dhahabih-Movers-LLC.jpg",
      alt: "Najm Al Dhahabih Movers LLC",
    },
    path: "",
  },
});

const services = [
  {
    icon: Home,
    title: "Villa Movers and Packers in Dubai",
    description:
      "Relocating a villa is no small job. Multiple rooms, heavy furniture, outdoor items. We've moved hundreds of villas across Dubai — from JVC and Mirdif to Palm Jumeirah and Emirates Hills.",
    href: "/villa-movers-and-packers-in-dubai/",
  },
  {
    icon: Building2,
    title: "House Movers & Home Shifting in Dubai",
    description:
      "Whether it's a studio in Downtown or a 3BHK in Al Barsha, we manage the entire shifting process. Packing, loading, transport, unloading, and unpacking — all in one day.",
    href: "/house-movers-and-home-shifting-dubai/",
  },
  {
    icon: Building2,
    title: "Office Movers in Dubai",
    description:
      "Office moves need to happen fast and with zero damage to equipment. We relocate desks, chairs, IT equipment, and everything else. Weekend moves? After-hours moves? We do those too.",
    href: "/office-movers-in-dubai/",
  },
  {
    icon: Sofa,
    title: "Furniture Movers in Dubai",
    description:
      "We specialize in moving individual furniture pieces and full household furniture setups. Disassembly and reassembly included. Serving all UAE emirates.",
    href: "/furniture-movers-in-dubai/",
  },
  {
    icon: Package,
    title: "Packing and Moving Services",
    description:
      "Our packing team comes with everything — boxes, tape, bubble wrap, wardrobe boxes. We pack room by room, label every box, and make sure nothing is loose in the truck.",
    href: "/packing-and-moving-services-dubai/",
  },
  {
    icon: DollarSign,
    title: "Cheap and Affordable Movers in Dubai",
    description:
      "Good moving service doesn't have to cost a fortune. We offer budget-friendly moving packages that still include proper packing, careful handling, and timely delivery.",
    href: "/cheap-movers-and-packers-in-dubai/",
  },
  {
    icon: Warehouse,
    title: "Storage & Warehousing Services",
    description:
      "Need to store your stuff between moves? Our warehouse is clean, secure, and climate-controlled. Short-term or long-term — store what you need and pick it up when you're ready.",
    href: "/storage-and-warehousing-services-dubai/",
  },
];

const trustPoints = [
  {
    title: "No Hidden Charges",
    description:
      "You get a clear quote before we start. The price we tell you is the price you pay. No surprise fees at the end.",
    icon: <CheckCheck className="text-white " />,
  },
  {
    title: "Trained Moving Crews",
    description:
      "Our guys know how to wrap a glass table, disassemble a wardrobe, and pack a chandelier without breaking anything.",
    icon: <UserCheck2 className="text-white " />,
  },
  {
    title: "On-Time, Every Time",
    description:
      "We show up when we say we will. If your move is scheduled for 8 AM, we're at your door at 8 AM.",
    icon: <AlarmCheck className="text-white " />,
  },
  {
    title: "Full Packing Service",
    description:
      "Don't want to pack a single box yourself? We bring the materials, do the packing, and label everything.",
    icon: <BoxesIcon className="text-white " />,
  },
  {
    title: "We Cover All of UAE",
    description:
      "Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Al Ain — we move across all emirates, not just one city.",
    icon: <MapPinHouse className="text-white " />,
  },
  {
    title: "Your Stuff is Safe",
    description:
      "We use proper moving blankets, bubble wrap, stretch film, and sturdy cartons. Nothing goes into the truck unprotected.",
    icon: <ShieldCheck className="text-white " />,
  },
];

const locations = [
  {
    name: "Dubai",
    desc: "Our home base. We know every area, from Deira to Dubai South.",
    href: "/",
  },
  {
    name: "Abu Dhabi",
    desc: "Full moving services including villas, apartments, and offices.",
    href: "/movers-and-packers-in-abu-dhabi/",
  },
  {
    name: "Sharjah",
    desc: "One of our busiest routes. We move between Sharjah and Dubai daily.",
    href: "/movers-and-packers-in-sharjah/",
  },
  {
    name: "Ajman",
    desc: "Affordable moves in and out of Ajman, every day of the week.",
    href: "/movers-and-packers-in-ajman/",
  },
  {
    name: "Ras Al Khaimah",
    desc: "Long-distance moves handled with care and proper planning.",
    href: "/movers-and-packers-in-ras-al-khaimah/",
  },
  {
    name: "Al Ain",
    desc: "Reliable service for the Garden City, including cross-emirate relocations.",
    href: "/movers-and-packers-in-al-ain/",
  },
];

const dubaiAreas = [
  "Dubai Marina",
  "JLT",
  "JVC",
  "Downtown Dubai",
  "Business Bay",
  "Palm Jumeirah",
  "Al Barsha",
  "Mirdif",
  "Dubai Silicon Oasis",
  "International City",
  "Discovery Gardens",
  "Sports City",
  "Motor City",
  "Arabian Ranches",
  "Emirates Hills",
  "Al Nahda",
  "Deira",
  "Bur Dubai",
  "Karama",
  "Al Quoz",
  "DIFC",
  "Dubai Hills Estate",
  "Damac Hills",
  "The Springs",
  "The Meadows",
  "Town Square",
];

const homeFaqs = [
  {
    question: "How much do movers and packers charge in Dubai?",
    answer:
      "It depends on the size of your move. A studio apartment might cost around AED 800–1,200, while a 2-bedroom apartment typically ranges from AED 1,500–2,500. Villa moves start from AED 3,000 and go up based on the number of rooms and items. Call us at +971-55-4495331 for an exact quote.",
  },
  {
    question: "How early should I book movers in Dubai?",
    answer:
      "We recommend booking at least 3–5 days in advance, especially if you're moving during the end of the month or on weekends. But if you need a last-minute move, call us — we often have crews available on short notice.",
  },
  {
    question: "Do you provide packing materials?",
    answer:
      "Yes. We bring all the materials — cardboard boxes, bubble wrap, stretch film, tape, wardrobe boxes, and wrapping paper. You don't need to buy anything separately.",
  },
  {
    question: "Can you move just one or two items?",
    answer:
      "Absolutely. We handle single-item moves like a washing machine, sofa, bed, or fridge. You don't need a full house move to call us.",
  },
  {
    question: "Do you work on Fridays and weekends?",
    answer:
      "Yes. We operate 7 days a week, including Fridays and public holidays.",
  },
  {
    question: "Are my belongings insured during the move?",
    answer:
      "We take every precaution to protect your items with proper packing and handling. For high-value items, we can discuss additional coverage options.",
  },
];

import imageSrc from "@/public/Najm-Al-Dhahabih-Movers-LLC.jpg";
import Image from "next/image";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import Script from "next/script";

const FaqSchema = generateFAQSchema(homeFaqs);

export default function HomePage() {
  return (
    <>
      <Script
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqSchema }}
      />
      {/* Hero Section */}
      <section className="relative bg-brand-secondary/70 overflow-hidden px-4 py-16 lg:py-24">
        <Image
          src={imageSrc}
          alt="Najm Al Dhahabih Movers LLC"
          fill
          className="object-cover -z-10"
          placeholder="blur"
          loading="eager"
          priority
        />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white transform translate-x-48 -translate-y-48" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#FF2828] transform -translate-x-16 translate-y-16" />
        </div>

        <div className="relative max-w-6xl mx-auto ">
          <div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex ">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-blue-200 text-sm font-medium">
                Rated 4.9/5 by 500+ Customers
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl text-center font-bold text-white leading-tight mb-5">
              We Make Your Moving <br /> Easy, Fast, Safe and Affordable
            </h1>
            <p className="text-red-400  text-center md:text-lg mb-3 font-bold">
              Trusted Moving Company in Dubai — Villa, House, Office & Furniture
              Relocation Across the UAE
            </p>
            <p className="text-blue-200 text-base max-w-4xl mx-auto text-center leading-relaxed mb-8">
              We handle the packing, moving, and fixing so you can settle into
              your new home without the stress. Serving Dubai, Abu Dhabi,
              Sharjah, and all of the UAE. Call us for a free quote.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
              <a
                href="tel:+971554495331"
                className="flex items-center justify-center gap-2 bg-brand-primary hover:bg-[#cc1f1f] text-white font-bold py-2.5 px-8 rounded-lg transition-colors text-base"
              >
                <Phone size={18} />
                Get Free Quote
              </a>
              <a
                href="https://wa.me/971554495331"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 px-8 rounded-lg border border-white/30 transition-colors text-base"
              >
                Request a Callback
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {[
                "No Hidden Charges",
                "7 Days a Week",
                "All UAE Emirates",
                "Licensed Company",
              ].map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-1.5 text-blue-200 text-sm bg-white/10 md:py-3 py-2 md:px-6 px-4 rounded-2xl "
                >
                  <CheckCircle size={14} className="text-[#FF2828]" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Strip */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              {
                src: "/Expert-team-wrapping-and-packing-furniture-for-transport.jpg",
                title:
                  "Professional moving crew handling a full villa relocation",
              },
              {
                src: "/moving-truck-of-Najm-al-dhahabih-movers.jpg",
                title: "Moving truck of Najm Al Dhahabih Movers LLC in Dubai",
              },

              {
                src: "/moving-crew-handling-house-moving.jpg",
                title: "Moving crew handling house moving",
              },
            ].map((label, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden aspect-4/3 bg-slate-100 relative "
              >
                <Image
                  src={label.src}
                  alt={label.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <QuoteFormSection />
      <section className="max-w-5xl mx-auto px-4 bg-brand-primary py-8 md:rounded-2xl mt-24">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { num: "5,000+", label: "Successful Moves" },
            { num: "7", label: "Emirates Served" },
            { num: "4.9★", label: "Customer Rating" },
            { num: "7 Days", label: "Available Weekly" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-white font-bold text-xl sm:text-2xl">
                {stat.num}
              </p>
              <p className="text-red-100 text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-white ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="md:text-4xl text-3xl font-bold text-[#00357A] mb-3">
              Why Families and Businesses in Dubai <br />{" "}
              <span className="underline underline-offset-4 text-primary">
                Trust Us With Their Moves
              </span>
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto">
              Moving is stressful. We get that. That&apos;s exactly why we keep
              things simple and straightforward.
            </p>
          </div>
          {/* Banner image */}
          <div className="mb-24 rounded-2xl overflow-hidden w-full md:h-[500px] h-72 bg-muted relative">
            <Image
              src={"/moving-truck-park-outside-house-in-dubai.jpg"}
              alt="Moving truck park outside house in dubai"
              fill
              className="object-cover object-bottom"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#00357A]/20 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-[#00357A] rounded-xl flex items-center justify-center text-xl mb-4">
                  {point.icon}
                </div>
                <h3 className="text-[#00357A] font-bold text-lg mb-2">
                  {point.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ReviewSection />
      {/* Services Section */}
      <section className="pt-16 pb-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-secondary mb-3">
              Moving Services We Offer in Dubai
            </h2>
            <p className="text-brand-text max-w-2xl mx-auto">
              We&apos;re not a one-service company. Whether you need a full
              house packed and moved, or just a few pieces of furniture
              delivered across town, we have you covered.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-[#FF2828]/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#FF2828]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FF2828] transition-colors">
                  <service.icon
                    size={22}
                    className="text-[#FF2828] group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-[#00357A] font-bold text-base mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-[#FF2828] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Contact Now <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 px-4 bg-[#00357A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">
              We Move Across All Emirates in the UAE
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              We&apos;re based in Dubai, but our trucks go everywhere. Whether
              you&apos;re moving within the same building or across the country,
              we&apos;ll get your belongings there safely.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {locations.map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="group bg-white/10 hover:bg-white/20 rounded-xl p-6 border border-white/20 hover:border-[#FF2828] transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#FF2828] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck size={16} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">{loc.name}</h3>
                </div>
                <p className="text-blue-200 text-sm leading-relaxed mb-3">
                  {loc.desc}
                </p>
                <span className="text-white text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Services <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#00357A] mb-3">
              How Our Moving Process Works
            </h2>
            <p className="text-[#666666]">
              Four simple steps to a stress-free move
            </p>
          </div>
          {/* How It Works layout: steps left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  step: "01",
                  title: "Call or WhatsApp Us",
                  text: "Tell us where you're moving from and where you're going. Share the size of your home or office.",
                },
                {
                  step: "02",
                  title: "Get a Free Quote",
                  text: "Based on what you tell us, we give you a clear price. No guessing, no 'we'll see when we get there.'",
                },
                {
                  step: "03",
                  title: "We Handle Everything",
                  text: "On moving day, our crew arrives with the truck, packing materials, and tools. We pack, load, transport, unload, and unpack.",
                },
                {
                  step: "04",
                  title: "Settle In",
                  text: "Furniture reassembled, boxes placed in the right rooms, and everything accounted for. We clean up after ourselves too.",
                },
              ].map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 bg-[#00357A] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-[#00357A] font-bold text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
            {/* Side image */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 relative">
              <Image
                src={"/najm-al-dhahabih-movers-in-work.jpg"}
                alt="najm al dhahabih movers in work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dubai Areas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#00357A] mb-3">
              Dubai Areas We Serve
            </h2>
            <p className="text-[#666666]">
              We operate across all major areas in Dubai. No matter where you
              are, we&apos;ll come to you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {dubaiAreas.map((area) => (
              <span
                key={area}
                className="bg-white border border-gray-200 text-[#00357A] text-sm font-medium px-4 py-2 rounded-full hover:border-[#FF2828] hover:text-[#FF2828] transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}

      {/* FAQ */}
      <FAQSection faqs={homeFaqs} />

      {/* Quote Form */}

      {/* Final CTA */}
      <CTASection
        title="Ready to Move? Get a Free Quote Today"
        subtitle="Call us at +971-55-4495331 or fill out the form. We'll get back to you within 30 minutes with a quote."
        variant="primary"
      />
    </>
  );
}
