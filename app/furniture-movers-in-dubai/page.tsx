import type { Metadata } from "next";
import ServiceHero from "@/components/shared/ServiceHero";
import ReviewsSection from "@/components/shared/ReviewsSection";
import CTASection from "@/components/shared/CTASection";
import QuoteFormSection from "@/components/shared/QuoteFormSection";
import FAQSection from "@/components/shared/FAQSection";
import { CheckCircle, CheckIcon } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Furniture Movers in Dubai | Safe Furniture Relocation | Najm Al Dhahabih",
  description:
    "Professional furniture movers in Dubai. We disassemble, pack, transport & reassemble your furniture safely. Serving all UAE. Call +971-55-4495331.",
};

const furnitureFaqs = [
  {
    question: "Can you move just one item?",
    answer:
      "Yes. We move single items all the time — a sofa, fridge, bed, or washing machine. No job is too small.",
  },
  {
    question: "Do you assemble IKEA furniture?",
    answer:
      "Yes. We disassemble IKEA and other flat-pack furniture, transport it safely, and reassemble it at the new location.",
  },
  {
    question: "How do you protect furniture during transport?",
    answer:
      "We use moving blankets, bubble wrap, stretch film, corner protectors, and tie-down straps inside the truck. Nothing moves or rubs against anything else.",
  },
  {
    question: "How much does it cost to move furniture in Dubai?",
    answer:
      "Single item moves start from around AED 200–500 depending on the item and distance. Full furniture moves are quoted based on the total volume. Call us for an exact price.",
  },
];

const furnitureTypes = [
  "Sofas, sectionals, and recliners",
  "Beds (king, queen, single, bunk beds)",
  "Mattresses",
  "Dining tables and chairs",
  "Wardrobes and dressers",
  "TV units and entertainment centers",
  "Desks and office chairs",
  "Bookshelves and display cabinets",
  "Kitchen cabinets and islands",
  "Outdoor furniture — patio sets, garden benches",
  "Gym equipment — treadmills, ellipticals, weight benches",
  "Pianos and musical instruments",
  "Glass-top tables and mirrors",
  "Antique furniture (handled with extra care)",
];

const emirateServices = [
  {
    name: "Abu Dhabi",
    desc: "Apartments, villas, and offices across the capital",
  },
  { name: "Sharjah", desc: "Daily furniture moves between Sharjah and Dubai" },
  { name: "Ajman", desc: "Budget-friendly furniture transport" },
  {
    name: "Ras Al Khaimah",
    desc: "Long-distance furniture delivery with full protection",
  },
  { name: "Al Ain", desc: "Reliable furniture moving for the Garden City" },
];

import imageSrc from "@/public/Furniture-Movers-in-Dubai.jpg";
import Image from "next/image";
export default function FurnitureMoversPage() {
  return (
    <>
      <ServiceHero
        imageSrc={imageSrc}
        title="Furniture Movers in Dubai — Safe Furniture Relocation"
        subtitle="Single Item to Full Home Furniture"
        description="Sometimes you don't need a full house move. Maybe you bought a new sofa and need it delivered to your apartment. Or you're sending a dining set to Sharjah. Whether it's one piece or an entire home's worth of furniture, Najm Al Dhahabih handles it with the same level of care."
        breadcrumb={{ label: "Furniture Movers Dubai" }}
      />

      {/* Furniture Moving Gallery */}

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-3">
            Our Furniture Moving Services
          </h2>
          <p className="text-[#666666] text-center mb-12">
            From a single sofa to a complete home setup
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Single Item Delivery",
                desc: "Need one piece of furniture moved? A fridge, sofa, bed, washing machine, office desk — we'll pick it up and deliver it wherever you need in the UAE. No minimum order required.",
              },
              {
                title: "Full Furniture Relocation",
                desc: "Moving all your furniture from one place to another? We handle the whole thing — disassembly, wrapping, loading, transport, unloading, and reassembly.",
              },
              {
                title: "Furniture Disassembly & Reassembly",
                desc: "IKEA furniture, modular wardrobes, bunk beds, sectional sofas — we take them apart with proper tools, transport them flat-packed for safety, and rebuild them at the new location.",
              },
              {
                title: "Furniture Wrapping & Protection",
                desc: "Every piece of furniture gets proper protection before it goes on the truck. Moving blankets for wooden surfaces, stretch film for upholstery, corner protectors for glass tables.",
              },
              {
                title: "Long-Distance Furniture Transport",
                desc: "Moving furniture from Dubai to Abu Dhabi? Sharjah to Al Ain? We do inter-emirate furniture moves every day. Your furniture arrives in the same condition it left.",
              },
              {
                title: "Floor & Wall Protection",
                desc: "Moving heavy furniture through hallways and doorways can scuff floors and dent walls. We use furniture sliders, door frame protectors, and floor mats to prevent any damage.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-[#FF2828]/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckIcon className="w-6 h-6 text-[#FF2828] font-bold" />
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

      <section className="py-10 px-4 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                src: "/best-furniture-moving-company-in-dubai.jpg",
                alt: "best furniture moving company in dubai",
              },
              {
                src: "/single-furniture-moving-dubai.jpg",
                alt: "single furniture moving in dubai",
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
      {/* What We Move */}
      <section className="py-16 px-4 bg-[#00357A]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-3">
            Types of Furniture We Handle
          </h2>
          <p className="text-blue-200 text-center mb-8">
            If it has legs, drawers, shelves, or cushions — we move it.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {furnitureTypes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white/10 rounded-lg px-5 py-3"
              >
                <CheckCircle
                  size={16}
                  className="text-[#FF2828] flex-shrink-0"
                />
                <p className="text-blue-100 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Furniture Moved? Give Us a Call."
        subtitle="Call +971-55-4495331 or WhatsApp us a photo of what you need moved. We'll respond with a price within minutes."
        variant="primary"
      />

      {/* Why We're Different */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-12">
            Why People Call Us for Furniture Moving
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "We don't just throw things in a truck",
                desc: "Every piece of furniture is individually wrapped and secured. Wooden surfaces get blankets. Glass gets bubble wrap and corner guards. Upholstery gets stretch film to prevent tears and stains.",
              },
              {
                title: "We carry the right tools",
                desc: "Allen keys, socket wrenches, screwdrivers, power drills — our team comes prepared. If your IKEA wardrobe needs to be taken apart, we do it properly and quickly.",
              },
              {
                title: "We protect your floors and walls",
                desc: "Moving heavy furniture through hallways can scuff floors and dent walls. We use furniture sliders, door frame protectors, and floor mats to prevent any damage to your home.",
              },
              {
                title: "We handle the tricky stuff",
                desc: "That L-shaped sofa that doesn't fit through the door? The king-size bed frame that won't go down the stairs? We've dealt with all of it. We find a way — safely.",
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

      {/* UAE Coverage */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-3">
            Furniture Movers Across the UAE
          </h2>
          <p className="text-[#666666] text-center mb-8">
            Our furniture moving service isn&apos;t limited to Dubai.
          </p>
          {/* UAE map / routes banner */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
            {emirateServices.map((e) => (
              <div
                key={e.name}
                className="bg-white rounded-xl p-5 border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <h3 className="text-[#00357A] font-bold mb-2">{e.name}</h3>
                <p className="text-[#666666] text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />
      <FAQSection faqs={furnitureFaqs} title="Furniture Moving Questions" />
      <QuoteFormSection
        title="Get a Free Furniture Moving Quote"
        subtitle="Tell us what you need moved and we'll give you a fast, honest price."
      />
      <CTASection
        title="Ready to Move Your Furniture?"
        subtitle="Call +971-55-4495331 — No job is too small."
        variant="secondary"
      />
    </>
  );
}
