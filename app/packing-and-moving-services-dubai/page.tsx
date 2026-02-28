import type { Metadata } from "next";
import ServiceHero from "@/components/shared/ServiceHero";
import ReviewsSection from "@/components/shared/ReviewsSection";
import CTASection from "@/components/shared/CTASection";
import QuoteFormSection from "@/components/shared/QuoteFormSection";
import FAQSection from "@/components/shared/FAQSection";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Packers and Movers in Dubai | Professional Packing & Moving Services",
  description:
    "Trusted packers and movers in Dubai. Full packing, moving & unpacking services for homes and offices. Call Najm Al Dhahabih at +971-55-4495331.",
};

const packingFaqs = [
  {
    question: "Do I need to be present while you pack?",
    answer:
      "Ideally, yes — especially at the start so you can point out items that need special attention or things you want packed separately. But once we're briefed, you can step out if needed.",
  },
  {
    question: "How long does packing take?",
    answer:
      "A 1BHK can be packed in about 2–3 hours. A 2BHK takes 3–5 hours. Larger homes take 5–8 hours. These are approximate — the actual time depends on how much stuff you have.",
  },
  {
    question: "Can I pack some things myself and have you do the rest?",
    answer:
      "Yes, that's our 'partial packing' option. Many clients pack their own clothes and personal items and leave the kitchen and living room to us.",
  },
  {
    question:
      "What happens to all the boxes and packing material after the move?",
    answer:
      "We can take all the used packing materials with us when we leave, or you can keep the boxes for storage. Your choice.",
  },
];

const packingMaterials = [
  "Corrugated cardboard boxes — multiple sizes",
  "Wardrobe boxes — with hanging rod built in",
  "Bubble wrap — for fragile and breakable items",
  "Packing paper — for wrapping individual items",
  "Stretch film — for securing drawers, doors, upholstery",
  "Foam sheets — for extra protection on glass and mirrors",
  "Packing tape — heavy-duty, commercial grade",
  "Edge and corner protectors — for furniture",
  "Mattress bags — to keep mattresses clean",
];

import imageSrc from "@/public/Najm-Al-Dhahabih-Movers-LLC.jpg";
export default function PackingMovingPage() {
  return (
    <>
      <ServiceHero
        imageSrc={imageSrc}
        title="Professional Packing and Moving Services in Dubai"
        subtitle="Full Packing, Moving & Unpacking"
        description="Packing is the part of moving that nobody enjoys. Wrapping plates one by one, figuring out how to box up a lamp, taping boxes that keep popping open. That's why we offer a full packing and moving service. Our team brings all the materials, packs everything the right way, loads the truck, and delivers it to your new place."
        breadcrumb={{ label: "Packing & Moving Services" }}
      />

      {/* Packing Gallery */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Professional packers wrapping fragile kitchen items one by one",
              "All packing materials laid out — boxes, bubble wrap, tape & more",
            ].map((label, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden aspect-video bg-slate-100 flex flex-col items-center justify-center gap-3 border border-slate-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-300"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <p className="text-slate-400 text-xs font-medium text-center px-4">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packing Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-12">
            How Our Packing Service Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "We Bring Everything",
                desc: "Boxes (small, medium, large, extra-large), wardrobe boxes, bubble wrap, packing paper, stretch film, tape, labels, and markers. You don't need to buy or prepare anything.",
              },
              {
                title: "Room by Room",
                desc: "We pack one room at a time, starting with the least-used rooms and ending with daily essentials. This keeps things organized and makes unpacking much easier.",
              },
              {
                title: "Systematic Labeling",
                desc: "Every box is labeled with the room it belongs to and a brief description: 'Kitchen — Plates & Bowls.' 'Master Bedroom — Bed Linens.' Every box goes straight to the right room.",
              },
              {
                title: "Fragile Items Get Special Attention",
                desc: "Glassware, crockery, mirrors, artwork, electronics — these get extra layers of protection. Individual wrapping, double-boxing where needed, and 'FRAGILE' labels on all sides.",
              },
              {
                title: "Wardrobe Packing",
                desc: "Clothes stay on hangers and go directly into wardrobe boxes. Folded clothes, shoes, and accessories are packed in labeled boxes. No need to empty your entire closet beforehand.",
              },
              {
                title: "We Load Strategically",
                desc: "Heavy items go first, fragile items on top, all secured with straps. Nothing shifts during transport. Your items arrive in the same condition they left.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-[#00357A] rounded-xl flex items-center justify-center text-white font-bold text-sm mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
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

      {/* Packing Options */}
      <section className="py-16 px-4 bg-[#00357A]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-3">
            Packing Options for Every Situation
          </h2>
          <p className="text-blue-200 text-center mb-10">
            Choose the level of packing service that suits your needs
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "Full Packing",
                desc: "We pack absolutely everything in your home or office. You just show up at the new place and we unpack it all for you. Best for families, busy professionals, and anyone who doesn't want to deal with packing.",
                badge: "Most Popular",
              },
              {
                title: "Partial Packing",
                desc: "You handle some rooms yourself, and we pack the rest — typically the kitchen (the hardest room to pack), living room, and fragile items. Good if you want to save money.",
                badge: "Save Money",
              },
              {
                title: "Fragile-Only Packing",
                desc: "We only pack your breakable and delicate items — glassware, crockery, electronics, artwork, mirrors. You handle the rest. Popular for people who want to pack their own clothes and books.",
                badge: "Budget Option",
              },
              {
                title: "Unpacking Service",
                desc: "At the new location, we open all boxes, place items where you want them, and remove all packing materials. Your new home looks settled on day one.",
                badge: "Add-On Available",
              },
            ].map((opt) => (
              <div key={opt.title} className="bg-white rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-[#00357A] font-bold text-lg">
                    {opt.title}
                  </h3>
                  <span className="bg-[#FF2828] text-white text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ml-2">
                    {opt.badge}
                  </span>
                </div>
                <p className="text-[#666666] text-sm leading-relaxed">
                  {opt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Get Professional Packers and Movers in Dubai"
        subtitle="Call +971-55-4495331 or fill out the form. Tell us what you need packed and moved, and we'll send you a price."
        variant="primary"
      />

      {/* Materials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-3">
            Packing Materials We Use
          </h2>
          <p className="text-[#666666] text-center mb-8">
            All materials are included in our service. No extra charges for
            boxes or tape.
          </p>
          {/* Materials banner */}
          <div className="mb-8 rounded-2xl overflow-hidden aspect-[21/9] bg-slate-100 flex flex-col items-center justify-center gap-3 border border-slate-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-slate-300"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <p className="text-slate-400 text-sm font-medium text-center px-4">
              Our complete range of professional packing supplies — everything
              included, no extra cost
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {packingMaterials.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-gray-50 rounded-lg px-5 py-3 border border-gray-100"
              >
                <CheckCircle
                  size={16}
                  className="text-[#FF2828] flex-shrink-0"
                />
                <p className="text-[#666666] text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Professional */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-8">
            Why You Should Let Professionals Pack Your Stuff
          </h2>
          {/* Professional packing result banner */}
          <div className="mb-10 rounded-2xl overflow-hidden aspect-[21/9] bg-slate-100 flex flex-col items-center justify-center gap-3 border border-slate-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-slate-300"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <p className="text-slate-400 text-sm font-medium text-center px-4">
              Fully packed and labeled boxes — organized by room, ready to
              unload at the new home
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "Less breakage",
                desc: "We've packed thousands of homes. We know how to wrap a wine glass, box a flat-screen TV, and secure a marble tabletop. The chance of something breaking when professionals pack it is much lower.",
              },
              {
                title: "Faster move",
                desc: "Professional packing cuts the overall moving time significantly. What takes a family two full days to pack, our 3-person crew can do in 4–6 hours.",
              },
              {
                title: "Less stress",
                desc: "You don't have to plan, buy materials, or spend your evenings wrapping dishes. Just tell us when to show up, and we handle it.",
              },
              {
                title: "Better organization",
                desc: "Everything is labeled and sorted by room. Unpacking at the new place is faster and easier because you know exactly what's in every box.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
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

      <ReviewsSection />
      <FAQSection faqs={packingFaqs} title="Packing and Moving Questions" />
      <QuoteFormSection
        title="Book Packers and Movers in Dubai"
        subtitle="Tell us what you need and we'll send you a transparent quote within 30 minutes."
      />
      <CTASection
        title="Ready to Book Professional Packers?"
        subtitle="Call +971-55-4495331 — All packing materials included, no hidden charges."
        variant="secondary"
      />
    </>
  );
}
