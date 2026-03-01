import type { Metadata } from "next";
import ServiceHero from "@/components/shared/ServiceHero";
import ReviewsSection from "@/components/shared/ReviewsSection";
import CTASection from "@/components/shared/CTASection";
import QuoteFormSection from "@/components/shared/QuoteFormSection";
import FAQSection from "@/components/shared/FAQSection";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Office Movers in Dubai | Commercial & Corporate Relocation | Najm Al Dhahabih",
  description:
    "Professional office movers in Dubai for smooth commercial relocation. We handle furniture, IT equipment & setup with zero downtime. Call +971-55-4495331.",
};

const officeFaqs = [
  {
    question: "Can you move our office over the weekend?",
    answer:
      "Yes. Weekend and after-hours moves are our specialty for offices. Most companies prefer this so there's no disruption to work.",
  },
  {
    question: "How do you handle computer and server equipment?",
    answer:
      "All IT equipment is packed with anti-static materials, padded, and transported with extra care. We recommend backing up all data before the move as a precaution.",
  },
  {
    question: "Do you provide office furniture assembly at the new location?",
    answer:
      "Yes. We disassemble at the old office and reassemble everything at the new one — desks, cabinets, shelving, partitions, everything.",
  },
  {
    question: "How much does an office move cost in Dubai?",
    answer:
      "It depends on the size of your office, number of workstations, equipment volume, and distance. Small office moves start from around AED 2,000. Call us for a detailed quote.",
  },
];

const officeTypes = [
  {
    type: "Small Office / Startup (1–10 people)",
    desc: "A few desks, chairs, computers, and boxes. Usually done in half a day with one truck and 2–3 movers.",
    highlight: "From AED 2,000",
  },
  {
    type: "Medium Office (10–50 people)",
    desc: "Multiple departments, meeting rooms, server racks, and common areas. Requires detailed planning, usually done over a weekend with 4–6 movers.",
    highlight: "Weekend Specialty",
  },
  {
    type: "Large Corporate Office (50+ people)",
    desc: "Full-floor or multi-floor relocations. We assign a dedicated project coordinator and create a detailed move plan with your facilities team.",
    highlight: "Dedicated Coordinator",
  },
  {
    type: "Warehouse / Commercial Space",
    desc: "Heavy shelving, inventory, machinery, pallet loads. We have the trucks and manpower for commercial-grade moves.",
    highlight: "Heavy Equipment Ready",
  },
];

const industries = [
  "Technology companies and IT firms",
  "Law offices and consulting firms",
  "Medical clinics and dental offices",
  "Real estate and property management companies",
  "Retail and showroom businesses",
  "Trading and logistics companies",
  "Schools and training centers",
  "Government and semi-government offices",
];

import imageSrc from "@/public/Office-Movers-in-Dubai.jpg";
import Image from "next/image";
export default function OfficeMoversPage() {
  return (
    <>
      <ServiceHero
        imageSrc={imageSrc}
        title="Office Movers in Dubai — Commercial & Corporate Relocation"
        subtitle="Zero Downtime Office Moves"
        description="Moving an office is different from moving a home. There's more at stake. Najm Al Dhahabih handles commercial and corporate relocations across Dubai — from small startup offices in Business Bay to full-floor corporate setups in DIFC. We plan the move around your schedule."
        breadcrumb={{ label: "Office Movers Dubai" }}
      />

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-3">
            Our Office Moving Services
          </h2>
          <p className="text-[#666666] text-center mb-12">
            Everything your office move needs, handled professionally
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Office Furniture",
                icon: "🪑",
                desc: "Desks, chairs, conference tables, reception counters, file cabinets, shelving units — we disassemble, pack, transport, and reassemble everything.",
              },
              {
                title: "IT Equipment & Electronics",
                icon: "💻",
                desc: "Computers, monitors, printers, servers, networking equipment, phone systems — all packed with anti-static materials and transported with extra care.",
              },
              {
                title: "Documents & Files",
                icon: "📁",
                desc: "Filing cabinets, binders, boxes of paperwork — we keep everything organized and labeled so nothing gets mixed up or lost during the move.",
              },
              {
                title: "Pantry & Kitchen Equipment",
                icon: "☕",
                desc: "Office fridges, microwaves, coffee machines, water dispensers — we pack and move all pantry and break room items.",
              },
              {
                title: "Reception & Lobby Items",
                icon: "🏢",
                desc: "Signage, artwork, display units, potted plants — the things that make your office look professional. We handle them with care.",
              },
              {
                title: "Weekend & After-Hours Moves",
                icon: "🌙",
                desc: "Your team leaves on Friday, and by Sunday morning, the new office is set up and ready. Zero disruption to your business.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-[#00357A] font-bold text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                src: "/it-equipment-moving-services-dubai.jpg",
                alt: "it equipment moving services dubai",
              },
              {
                src: "/weekend-office-setup-services-dubai.jpg",
                alt: "weekend office setup services dubai",
              },
            ].map((img, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden aspect-4/3 bg-slate-100 relative "
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need to Relocate Your Office? Let's Plan It."
        subtitle="Call +971-55-4495331 or email us your requirements. We'll send a detailed proposal within 24 hours."
        variant="secondary"
      />

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-12">
            Why Businesses in Dubai Trust Us for Office Moves
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Minimal Downtime",
                desc: "We know every hour your office is down, it costs money. That's why we offer weekend and after-hours moves. Your team leaves on Friday, and by Sunday morning, the new office is set up and ready.",
              },
              {
                title: "Planned and Organized",
                desc: "We don't just show up with a truck. We visit your office, assess the volume, plan the loading order, and coordinate with your team or building management. The move follows a clear plan — no chaos.",
              },
              {
                title: "Nothing Gets Lost",
                desc: "Every item is labeled and tracked. Boxes are color-coded by department or floor. When we unload at the new office, everything goes exactly where it belongs.",
              },
              {
                title: "We Work with Your Building",
                desc: "Many office buildings in Dubai have specific rules — elevator booking, loading dock schedules, parking permits, NOCs for moving. We handle or help you with all of this.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100"
              >
                <CheckCircle
                  size={20}
                  className="text-[#FF2828] flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3 className="text-[#00357A] font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#666666] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Types */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-8">
            Types of Office Relocations We Handle
          </h2>
          {/* Office types banner */}
          <div className="mb-10 rounded-2xl overflow-hidden aspect-[21/9] relative">
            <Image
              src={"/office-relocation-types-dubai-startup-corporate.jpg"}
              alt="office relocation types dubai startup corporate"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {officeTypes.map((ot) => (
              <div
                key={ot.type}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-[#00357A] font-bold text-base">
                    {ot.type}
                  </h3>
                  <span className="text-[#FF2828] text-xs font-semibold bg-red-50 px-2.5 py-1 rounded-full flex-shrink-0 ml-2">
                    {ot.highlight}
                  </span>
                </div>
                <p className="text-[#666666] text-sm leading-relaxed">
                  {ot.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-4 bg-[#00357A]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-3">
            Industries We&apos;ve Helped Relocate
          </h2>
          <p className="text-blue-200 text-center mb-8">
            Whatever your industry, the process is the same: plan it right, pack
            it carefully, move it fast, set it up properly.
          </p>
          {/* Industries banner */}
          <div className="mb-8 rounded-2xl overflow-hidden aspect-[21/9] bg-white/10 relative border border-white/20">
            <Image
              src={"/industry-specific-office-movers-dubai.jpg"}
              alt="industry specific office movers dubai"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-3 bg-white/10 rounded-lg px-5 py-3"
              >
                <CheckCircle
                  size={16}
                  className="text-[#FF2828] flex-shrink-0"
                />
                <p className="text-blue-100 text-sm">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />
      <FAQSection faqs={officeFaqs} title="Office Moving Questions" />
      <QuoteFormSection
        title="Get a Free Office Moving Quote"
        subtitle="Tell us about your office size and we'll plan the perfect zero-downtime relocation."
      />
      <CTASection
        title="Ready to Move Your Office?"
        subtitle="Call +971-55-4495331 — Weekend moves are our specialty for offices."
        variant="primary"
      />
    </>
  );
}
