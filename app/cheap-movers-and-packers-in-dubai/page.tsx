import type { Metadata } from "next";
import ServiceHero from "@/components/shared/ServiceHero";
import ReviewsSection from "@/components/shared/ReviewsSection";
import CTASection from "@/components/shared/CTASection";
import QuoteFormSection from "@/components/shared/QuoteFormSection";
import FAQSection from "@/components/shared/FAQSection";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Cheap Movers and Packers in Dubai | Affordable Moving Services",
  description:
    "Affordable movers and packers in Dubai. Budget-friendly moving services without cutting corners. Call Najm Al Dhahabih at +971-55-4495331 for a low-cost quote.",
};

const cheapFaqs = [
  {
    question: "What's the cheapest way to move in Dubai?",
    answer:
      "A pickup truck move for a few items starts from AED 300. For a full apartment, a studio move starts from AED 800. Call us and describe what you need — we'll find the most affordable option.",
  },
  {
    question: "Are there hidden fees?",
    answer:
      "No. The price we quote is the price you pay. We don't add charges for packing materials, stairs, or 'difficulty' after the move is done.",
  },
  {
    question: "Is cheap moving safe for my stuff?",
    answer:
      "Yes. Our budget service includes proper packing and careful handling. We don't cut corners on safety — we just keep our operational costs low so we can charge you less.",
  },
  {
    question: "Can I save money by packing myself?",
    answer:
      "Yes. If you pack your own boxes and we just handle loading, transport, and unloading, the cost will be lower. Let us know and we'll give you a quote for transport-only.",
  },
];

const packages = [
  {
    name: "Pickup Truck Move",
    price: "From AED 300",
    desc: "Need to move a few items across town? A bed, some boxes, a small fridge? Our pickup truck service is the most affordable option.",
    includes: ["1 truck", "1–2 helpers", "Same-day delivery"],
    color: "border-[#FF2828]",
  },
  {
    name: "Studio / 1BHK Move",
    price: "From AED 800",
    desc: "Full packing, loading, transport, and unloading for studios and one-bedroom apartments.",
    includes: ["Full packing", "1 truck", "2–3 movers"],
    color: "border-[#00357A]",
  },
  {
    name: "2BHK Move",
    price: "From AED 1,500",
    desc: "Complete home shifting for two-bedroom apartments including furniture disassembly and reassembly.",
    includes: ["Full packing", "1 large truck", "3–4 movers"],
    color: "border-[#FF2828]",
  },
  {
    name: "3BHK Move",
    price: "From AED 2,500",
    desc: "Larger crew, bigger truck, and full service for families in three-bedroom homes.",
    includes: ["Full packing", "1–2 trucks", "4–5 movers"],
    color: "border-[#00357A]",
  },
];

const cheapClients = [
  "Bachelors and students moving between shared apartments",
  "Couples relocating from one small apartment to another",
  "People moving a few items — not a full house, just specific things",
  "Cross-emirate small moves — Sharjah to Dubai, Ajman to Dubai",
  "Furnished apartment tenants who only have personal belongings to move",
  "Anyone on a tight budget who still wants reliable service",
];
import imageSrc from "@/public/Cheap-Movers-and-Packers-in-Dubai.jpg";
import Image from "next/image";
export default function CheapMoversPage() {
  return (
    <>
      <ServiceHero
        imageSrc={imageSrc}
        title="Cheap Movers and Packers in Dubai — Affordable Moving Services"
        subtitle="Budget Friendly, Not Low Quality"
        description="Let's be real — moving is expensive. Between the new rent deposit, DEWA connection, and a hundred other costs, the last thing you want is a moving bill that makes you wince. Najm Al Dhahabih offers affordable moving packages that are actually affordable — not 'affordable' with a bunch of hidden fees at the end."
        breadcrumb={{ label: "Cheap Movers Dubai" }}
      />

      {/* What Cheap Doesn't Mean */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-3">
            Budget-Friendly, Not Low-Quality
          </h2>
          <p className="text-[#666666] text-center mb-10">
            Let&apos;s clear something up: our prices are low, but our service
            isn&apos;t. Here&apos;s what you still get with our budget packages:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                point:
                  "Trained movers — not random laborers picked up last minute",
              },
              {
                point:
                  "Proper packing materials — real boxes, real bubble wrap, real tape",
              },
              { point: "Clean trucks — enclosed, padded, and well-maintained" },
              {
                point:
                  "Careful handling — no tossing boxes, no dragging furniture",
              },
              { point: "On-time service — we show up when we say we will" },
              {
                point: "The only thing 'cheap' about our service is the price",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gray-50 rounded-lg px-5 py-3.5 border border-gray-100"
              >
                <CheckCircle
                  size={16}
                  className="text-[#FF2828] flex-shrink-0"
                />
                <p className="text-[#666666] text-sm">{item.point}</p>
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
                src: "/affordable-movers-packers-services-dubai.jpg",
                alt: "affordable movers packers services dubai",
              },
              {
                src: "/Najm-al-dhahabih-affordable-movers-in-dubai.jpg",
                alt: "najm al dhahabih affordable movers in dubai",
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

      {/* Packages */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-3">
            Our Budget Moving Packages
          </h2>
          <p className="text-[#666666] text-center mb-8">
            All prices are starting rates. Your actual quote depends on the
            distance and volume — but we promise, no surprises.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-white rounded-xl p-6 border-2 ${pkg.color} hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-[#00357A] font-bold text-lg">
                    {pkg.name}
                  </h3>
                  <span className="text-[#FF2828] font-bold text-lg flex-shrink-0 ml-2">
                    {pkg.price}
                  </span>
                </div>
                <p className="text-[#666666] text-sm mb-4">{pkg.desc}</p>
                <div className="space-y-1.5">
                  {pkg.includes.map((inc) => (
                    <div
                      key={inc}
                      className="flex items-center gap-2 text-sm text-[#666666]"
                    >
                      <div className="w-1.5 h-1.5 bg-[#00357A] rounded-full" />
                      {inc}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Moving on a Budget? We've Got You."
        subtitle="Call +971-55-4495331 and tell us what you need. We'll give you the most affordable option — no pressure, no hidden costs."
        variant="primary"
      />

      {/* How We Keep Prices Low */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-12">
            How We Offer Lower Prices Without Cutting Corners
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "We own our trucks",
                desc: "No rental fees means lower costs that we pass on to you.",
              },
              {
                title: "We run efficient routes",
                desc: "We plan our daily schedules to minimize empty runs. More moves per day = lower price per move.",
              },
              {
                title: "No middlemen",
                desc: "When you call us, you talk to us. Not a broker, not an agency. No commissions being added to your bill.",
              },
              {
                title: "We give honest quotes",
                desc: "We don't lowball you to get the job and then add charges on moving day. The quote we give you is what you pay.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl border border-gray-100"
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

      {/* Who This Is For */}
      <section className="py-16 px-4 bg-[#00357A]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-3">
            Our Budget Service Works Great For
          </h2>
          <p className="text-blue-200 text-center mb-10">
            If any of these sounds like you, we&apos;re the right choice:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cheapClients.map((item) => (
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

      {/* Affordable UAE-wide */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-8">
            Cheap Movers in Abu Dhabi, Sharjah, Ajman & More
          </h2>
          {/* UAE-wide affordable moving banner */}
          <div className="mb-8 rounded-2xl overflow-hidden aspect-[21/9] bg-slate-100 relative">
            <Image
              src={"/Villa-Movers-and-Packers-in-Dubai.jpg"}
              alt="Cheap Movers in Abu Dhabi, Sharjah, Ajman & More"
              fill
              className="object-cover"
            />
            <p className="text-white text-sm font-medium text-center px-4 py-2 bg-black/30 absolute bottom-1 left-1">
              Affordable movers serving all UAE emirates — from Sharjah to Ras
              Al Khaimah
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                name: "Abu Dhabi",
                price: "From AED 1,200",
                desc: "Small apartment moves starting from AED 1,200",
              },
              {
                name: "Sharjah",
                price: "From AED 600",
                desc: "Studio moves starting from AED 600",
              },
              {
                name: "Ajman",
                price: "From AED 500",
                desc: "Some of our most affordable moves start here",
              },
              {
                name: "RAK & Al Ain",
                price: "Based on distance",
                desc: "Long-distance budget moves, priced fairly",
              },
            ].map((e) => (
              <div
                key={e.name}
                className="bg-white rounded-xl p-5 border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <h3 className="text-[#00357A] font-bold text-lg mb-1">
                  {e.name}
                </h3>
                <p className="text-[#FF2828] font-bold mb-2">{e.price}</p>
                <p className="text-[#666666] text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />
      <FAQSection faqs={cheapFaqs} title="Affordable Moving Questions" />
      <QuoteFormSection
        title="Get the Best Price for Your Move"
        subtitle="Tell us what you need and we'll find the most affordable option for you."
      />
      <CTASection
        title="Moving on a Budget? Call Us Now."
        subtitle="Call +971-55-4495331 — Honest quotes, no hidden costs, real professional service."
        variant="primary"
      />
    </>
  );
}
