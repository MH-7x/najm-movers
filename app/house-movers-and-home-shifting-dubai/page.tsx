import type { Metadata } from "next";
import ServiceHero from "@/components/shared/ServiceHero";
import ReviewsSection from "@/components/shared/ReviewsSection";
import CTASection from "@/components/shared/CTASection";
import QuoteFormSection from "@/components/shared/QuoteFormSection";
import FAQSection from "@/components/shared/FAQSection";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title:
    "House Movers Dubai | Home Shifting Services in Dubai | Najm Al Dhahabih",
  description:
    "Reliable house movers in Dubai for stress-free home shifting. We handle packing, furniture, and complete home relocation. Call +971-55-4495331 for a free quote.",
};

const homeFaqs = [
  {
    question: "Can you move my home in one day?",
    answer:
      "Yes. Most 1–3 BHK apartments are completed in a single day. For larger homes, we plan accordingly, but same-day completion is always the goal.",
  },
  {
    question: "Do I need to be home during the move?",
    answer:
      "It's best if you or someone you trust is present at both locations — mainly to direct where items should be placed and to hand over/collect keys.",
  },
  {
    question: "What if something gets damaged?",
    answer:
      "We take careful precautions with every item. But in the rare case of damage, we address it directly. Talk to us about coverage options before the move.",
  },
  {
    question: "Do you move AC units?",
    answer:
      "Yes. We can disconnect split AC units at the old home and reconnect them at the new one. Window ACs are easier — we handle those as part of the standard move.",
  },
  {
    question: "Can you move items to a storage facility instead of a new home?",
    answer:
      "Yes. If your new place isn't ready yet, we can move your items to our warehouse for short-term or long-term storage.",
  },
];

const packages = [
  {
    size: "Studio / 1BHK",
    desc: "Best for singles, couples, or bachelors. Usually done in 3–5 hours.",
    movers: "2–3 movers",
    trucks: "1 truck",
    price: "AED 800 – 1,500",
    color: "bg-blue-50 border-blue-200",
  },
  {
    size: "2BHK",
    desc: "The most common move we handle. Takes about 5–7 hours.",
    movers: "3–4 movers",
    trucks: "1 large truck",
    price: "AED 1,500 – 2,500",
    color: "bg-red-50 border-red-200",
  },
  {
    size: "3BHK",
    desc: "Bigger families, more furniture. Takes 7–10 hours.",
    movers: "4–5 movers",
    trucks: "1–2 trucks",
    price: "AED 2,500 – 4,000",
    color: "bg-blue-50 border-blue-200",
  },
  {
    size: "4BHK+",
    desc: "Full day, serious planning. Book at least a week in advance.",
    movers: "5–6 movers",
    trucks: "2 trucks",
    price: "AED 4,000+",
    color: "bg-red-50 border-red-200",
  },
];

const weMove = [
  "Beds, mattresses, and headboards",
  "Wardrobes, dressers, and side tables",
  "Sofas, dining tables, and chairs",
  "Kitchen appliances — fridge, oven, microwave, washing machine",
  "TV units, entertainment centers, and wall-mounted TVs",
  "Books, kitchenware, clothes, shoes, and personal items",
  "Kids' furniture and toys",
  "Home decor — paintings, mirrors, lamps, curtains",
  "AC units (split or window — disconnection and reconnection available)",
];

const dubaiAreas = [
  "Downtown Dubai",
  "Dubai Marina",
  "JBR",
  "JLT",
  "JVC",
  "JVT",
  "Al Barsha",
  "Al Nahda",
  "Mirdif",
  "Al Qusais",
  "International City",
  "Discovery Gardens",
  "Sports City",
  "Motor City",
  "Dubai Silicon Oasis",
  "Dubai Hills",
  "Business Bay",
  "DIFC",
  "Deira",
  "Bur Dubai",
  "Karama",
  "Satwa",
  "Al Quoz",
  "Remraam",
  "Town Square",
];

import imageSrc from "@/public/Najm-Al-Dhahabih-Movers-LLC.jpg";

export default function HouseMoversPage() {
  return (
    <>
      <ServiceHero
        imageSrc={imageSrc}
        title="House Movers & Home Shifting Services in Dubai"
        subtitle="Complete Home Shifting"
        description="Whether you're moving from a studio in International City to a 2BHK in JVC, or shifting your family from a flat in Al Nahda to a bigger place in Mirdif — house moving is what we do every single day. We take care of the entire home shifting process from start to finish."
        breadcrumb={{ label: "House Movers Dubai" }}
      />

      {/* House Moving Gallery */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Professional crew packing a full apartment, room by room",
              "Loading household items into an enclosed moving truck",
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

      {/* Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-3">
            How We Handle Your Home Move — Step by Step
          </h2>
          <p className="text-[#666666] text-center mb-12">
            From your first call to the last box placed
          </p>
          <div className="space-y-6">
            {[
              {
                num: "1",
                title: "Quick Assessment",
                text: "Tell us the size of your home — studio, 1BHK, 2BHK, 3BHK, or bigger. Let us know about any large or special items. We can do this over the phone or WhatsApp.",
              },
              {
                num: "2",
                title: "Clear Quotation",
                text: "Based on your home size, number of items, and the moving distance, we give you a fixed price. That price covers packing materials, labor, transport, and basic setup.",
              },
              {
                num: "3",
                title: "Packing Day",
                text: "Our team arrives with boxes, bubble wrap, tape, stretch film, wardrobe boxes. We pack room by room, label each box with the room name and contents.",
              },
              {
                num: "4",
                title: "Loading the Truck",
                text: "Heavy items go first — wardrobes, beds, fridges, washing machines. Fragile and light boxes go on top, secured so nothing moves during transport.",
              },
              {
                num: "5",
                title: "Transport",
                text: "Our trucks are clean, enclosed, and well-maintained. Your items are padded and strapped down. We drive carefully — no rushing, no recklessness.",
              },
              {
                num: "6",
                title: "Unloading and Setup",
                text: "At the new home, we place boxes in the right rooms, reassemble furniture, position appliances where you want them, and make sure everything is in working order before we leave.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="flex items-start gap-5 p-5 bg-gray-50 rounded-xl border border-gray-100"
              >
                <div className="w-10 h-10 bg-[#00357A] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-[#00357A] font-bold mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#666666] text-sm">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Move */}
      <section className="py-16 px-4 bg-[#00357A]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-3">
            What&apos;s Included in Our Home Shifting Service
          </h2>
          <p className="text-blue-200 text-center mb-10">
            We move everything inside your home, including:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {weMove.map((item) => (
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
          <p className="text-center text-blue-200 mt-6 text-sm italic">
            If it&apos;s in your home, we move it. Simple as that.
          </p>
        </div>
      </section>

      <CTASection
        title="Planning a Home Move? Call Us Now."
        subtitle="Call +971-55-4495331 or WhatsApp us with your move details. We'll send you a quote within 30 minutes."
        variant="primary"
      />

      {/* Packages */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-3">
            Home Shifting by Apartment Size
          </h2>
          <p className="text-[#666666] text-center mb-8">
            Estimated prices for different home sizes
          </p>
          {/* Package banner image */}
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
              Our team completing a full 2BHK apartment shift in a single day
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.size}
                className={`rounded-xl p-6 border ${pkg.color}`}
              >
                <h3 className="text-[#00357A] font-bold text-xl mb-2">
                  {pkg.size}
                </h3>
                <p className="text-[#666666] text-sm mb-4">{pkg.desc}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-[#666666]">
                    <span className="w-2 h-2 bg-[#00357A] rounded-full"></span>
                    {pkg.movers}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#666666]">
                    <span className="w-2 h-2 bg-[#00357A] rounded-full"></span>
                    {pkg.trucks}
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-current/10">
                  <p className="text-[#00357A] font-bold">Estimated Cost</p>
                  <p className="text-[#FF2828] font-bold text-lg">
                    {pkg.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#666666] text-sm mt-6">
            These are estimates. Your actual price depends on the distance,
            floor level, and specific items.{" "}
            <a
              href="tel:+971554495331"
              className="text-[#FF2828] font-semibold"
            >
              Call us for an exact figure.
            </a>
          </p>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-3">
            House Moving Services Across Dubai
          </h2>
          <p className="text-[#666666] text-center mb-8">
            We handle house shifting in every neighborhood and community in
            Dubai
          </p>
          {/* Dubai cityscape / areas banner */}

          <div className="flex flex-wrap gap-3 justify-center">
            {dubaiAreas.map((area) => (
              <span
                key={area}
                className="bg-white border border-gray-200 text-[#00357A] text-sm font-medium px-4 py-2 rounded-full hover:border-[#FF2828] hover:text-[#FF2828] transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-center text-[#666666] text-sm mt-6">
            We also handle cross-emirate home shifting — from Dubai to Sharjah,
            Abu Dhabi, Ajman, Ras Al Khaimah, and Al Ain.
          </p>
        </div>
      </section>

      <ReviewsSection />
      <FAQSection faqs={homeFaqs} title="Home Shifting Questions" />
      <QuoteFormSection
        title="Get a Free Home Moving Quote"
        subtitle="Tell us about your home and we'll send you a clear, honest price within 30 minutes."
      />
      <CTASection
        title="Ready to Move Your Home?"
        subtitle="Call +971-55-4495331 — We're available 7 days a week, 8 AM to 10 PM."
        variant="primary"
      />
    </>
  );
}
