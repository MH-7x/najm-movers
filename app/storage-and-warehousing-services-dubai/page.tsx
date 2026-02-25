import type { Metadata } from "next";
import ServiceHero from "@/components/shared/ServiceHero";
import ReviewsSection from "@/components/shared/ReviewsSection";
import CTASection from "@/components/shared/CTASection";
import QuoteFormSection from "@/components/shared/QuoteFormSection";
import FAQSection from "@/components/shared/FAQSection";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Storage & Warehousing Services Dubai | Secure Storage Solutions | Najm Al Dhahabih",
  description:
    "Need secure storage in Dubai? Najm Al Dhahabih offers short-term and long-term warehousing for homes and businesses. Call +971-55-4495331.",
};

const storageFaqs = [
  {
    question: "What's the minimum storage period?",
    answer: "There's no strict minimum. Whether you need storage for 3 days or 3 years, we can accommodate.",
  },
  {
    question: "Can I access my items while they're in storage?",
    answer: "Yes. With advance notice, you can visit the warehouse to access your items.",
  },
  {
    question: "How much does storage cost in Dubai?",
    answer: "Rates depend on volume. A few boxes and small items might cost AED 300–500/month. A full apartment's worth of furniture can range from AED 1,000–3,000/month. Contact us for an exact quote.",
  },
  {
    question: "Do you pack items before storing them?",
    answer: "Yes. We wrap and protect all items before they go into storage to prevent dust, scratches, and damage.",
  },
];

const warehouseFeatures = [
  "Clean and organized — designated areas for different types of items",
  "Secure — 24/7 surveillance and controlled access",
  "Fire safety systems installed throughout",
  "Pest-free — regular pest control treatments",
  "Ventilated and maintained to protect against dust and humidity",
  "Inventory tracked — we keep a record of everything in storage",
];

const storageTypes = [
  {
    title: "Short-Term Storage",
    subtitle: "Days to Weeks",
    desc: "Between moves? Waiting for your new apartment to be ready? We store your items safely until your new place is available. No minimum period required.",
    icon: "📅",
  },
  {
    title: "Long-Term Storage",
    subtitle: "Months to Years",
    desc: "Going abroad for work? Downsizing temporarily? We offer long-term storage at monthly rates. Your items stay safe and accessible whenever you need them.",
    icon: "🏛️",
  },
  {
    title: "Furniture Storage",
    subtitle: "Individual or Full Home",
    desc: "Store individual furniture pieces or an entire home's worth. All items are wrapped and protected before entering storage.",
    icon: "🛋️",
  },
  {
    title: "Business Storage",
    subtitle: "Commercial & Corporate",
    desc: "Office furniture, inventory, equipment, seasonal stock, archived documents — we provide secure storage for businesses of all sizes.",
    icon: "🏢",
  },
];

export default function StoragePage() {
  return (
    <>
      <ServiceHero
        title="Storage & Warehousing Services in Dubai, UAE"
        subtitle="Secure Short & Long-Term Storage"
        description="Not every move is perfectly timed. Sometimes your new lease starts a week after your old one ends. Sometimes you're renovating and need your furniture out of the way. That's where our storage service comes in. We pick up your items, store them in our secure warehouse, and deliver them back when you're ready."
        breadcrumb={{ label: "Storage & Warehousing" }}
      />

      {/* Storage Gallery */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Clean, organised warehouse interior with designated storage areas",
              "Items carefully wrapped and stacked in our secure storage facility",
            ].map((label, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-video bg-slate-100 flex flex-col items-center justify-center gap-3 border border-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                </svg>
                <p className="text-slate-400 text-xs font-medium text-center px-4">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Types */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-3">Our Storage Solutions</h2>
          <p className="text-[#666666] text-center mb-12">Flexible options for every storage need</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {storageTypes.map((s) => (
              <div key={s.title} className="bg-gray-50 rounded-xl p-7 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{s.icon}</div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-[#00357A] font-bold text-xl">{s.title}</h3>
                  <span className="bg-[#FF2828] text-white text-xs font-semibold px-2.5 py-1 rounded-full">{s.subtitle}</span>
                </div>
                <p className="text-[#666666] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warehouse Features */}
      <section className="py-16 px-4 bg-[#00357A]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-3">About Our Warehouse Facility</h2>
          <p className="text-blue-200 text-center mb-8">State-of-the-art storage with maximum security</p>
          {/* Warehouse banner */}
          <div className="mb-8 rounded-2xl overflow-hidden aspect-[21/9] bg-white/10 flex flex-col items-center justify-center gap-3 border border-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/30">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
            </svg>
            <p className="text-white/50 text-sm font-medium text-center px-4">Our modern Dubai warehouse — 24/7 security, fire safety, climate-controlled environment</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {warehouseFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-3 bg-white/10 rounded-lg px-5 py-3.5">
                <CheckCircle size={16} className="text-[#FF2828] flex-shrink-0" />
                <p className="text-blue-100 text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Need Storage? Let Us Help." subtitle="Call +971-55-4495331 or WhatsApp us with what you need to store. We'll give you a quick quote." variant="primary" />

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-12">How Our Storage Service Works</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "Tell us what you need stored", desc: "Call us with the details — what items, how many, and for how long." },
              { num: "2", title: "We give you a monthly rate", desc: "Storage is priced based on the volume of items. A few boxes and a bed will cost less than a full apartment's worth of furniture." },
              { num: "3", title: "We pick up your items", desc: "Our moving crew comes to your home or office, packs and wraps everything if needed, and transports it to our warehouse." },
              { num: "4", title: "We store it safely", desc: "Your items are placed in a designated area, inventoried, and monitored. 24/7 security cameras keep watch." },
              { num: "5", title: "We deliver when you're ready", desc: "When you need your stuff back, just call. We'll deliver it to your new location, unpack it, and set things up." },
            ].map((step) => (
              <div key={step.num} className="flex items-start gap-5 p-5 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-10 h-10 bg-[#00357A] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-[#00357A] font-bold mb-1">{step.title}</h3>
                  <p className="text-[#666666] text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-8">Storage Pricing Guide</h2>
          {/* Pricing banner */}
          <div className="mb-8 rounded-2xl overflow-hidden aspect-[21/9] bg-slate-100 flex flex-col items-center justify-center gap-3 border border-slate-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
            </svg>
            <p className="text-slate-400 text-sm font-medium text-center px-4">Storage solutions from a few boxes to full apartment contents — flexible monthly pricing</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { type: "Small Storage", size: "Few boxes + small items", price: "AED 300–500/month", examples: "Student belongings, seasonal items, documents" },
              { type: "Medium Storage", size: "Studio / 1BHK contents", price: "AED 500–1,000/month", examples: "Small apartment furniture, appliances, boxes" },
              { type: "Large Storage", size: "Full apartment / villa", price: "AED 1,000–3,000/month", examples: "Complete home furniture, entire apartment contents" },
            ].map((s) => (
              <div key={s.type} className="bg-white rounded-xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow">
                <h3 className="text-[#00357A] font-bold text-lg mb-1">{s.type}</h3>
                <p className="text-[#666666] text-sm mb-3">{s.size}</p>
                <p className="text-[#FF2828] font-bold text-xl mb-3">{s.price}</p>
                <p className="text-[#666666] text-xs">{s.examples}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#666666] text-sm mt-6">
            Prices are estimates. Contact us for an exact quote based on your specific items.
          </p>
        </div>
      </section>

      <ReviewsSection />
      <FAQSection faqs={storageFaqs} title="Storage Questions" />
      <QuoteFormSection title="Get a Storage Quote Today" subtitle="Tell us what you need stored and for how long. We'll give you a competitive monthly rate." />
      <CTASection title="Ready to Store Your Belongings?" subtitle="Call +971-55-4495331 — Secure, clean, accessible storage in Dubai." variant="primary" />
    </>
  );
}
