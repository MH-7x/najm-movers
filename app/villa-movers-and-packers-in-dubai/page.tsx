import type { Metadata } from "next";
import ServiceHero from "@/components/shared/ServiceHero";
import ReviewsSection from "@/components/shared/ReviewsSection";
import CTASection from "@/components/shared/CTASection";
import QuoteFormSection from "@/components/shared/QuoteFormSection";
import FAQSection from "@/components/shared/FAQSection";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Villa Movers and Packers in Dubai | Professional Villa Relocation",
  description:
    "Need villa movers in Dubai? Najm Al Dhahabih provides complete villa moving services including packing, furniture handling & setup. Call +971-55-4495331.",
};

const villaFaqs = [
  {
    question: "How long does a villa move take?",
    answer: "Most 3–4 bedroom villa moves are completed within 6–10 hours, including packing, transport, and unpacking. Larger villas with 5+ bedrooms may take a full day.",
  },
  {
    question: "How much does it cost to move a villa in Dubai?",
    answer: "Villa moving costs typically start from AED 3,000 for a 3-bedroom and go up to AED 7,000+ for larger villas. The exact price depends on the number of items, distance, and any special requirements. Call us for a free quote.",
  },
  {
    question: "Can you move my garden furniture and outdoor items?",
    answer: "Yes. BBQ grills, patio sets, plant pots, kids' play equipment — we move it all.",
  },
  {
    question: "Do you move villas from Dubai to other emirates?",
    answer: "Yes. We regularly move villas from Dubai to Abu Dhabi, Sharjah, Al Ain, and all other emirates.",
  },
];

const villaAreas = [
  "Arabian Ranches 1, 2 & 3", "Emirates Hills", "Palm Jumeirah", "Jumeirah Village Circle (JVC)",
  "Jumeirah Village Triangle (JVT)", "Al Barsha", "Mirdif", "The Springs & The Meadows",
  "Damac Hills 1 & 2", "Dubai Hills Estate", "The Villa at Dubailand", "Al Furjan",
  "Town Square", "Mudon", "Reem Community", "Nad Al Sheba", "Al Khawaneej",
];

const services = [
  {
    title: "Furniture Disassembly",
    description: "Beds, wardrobes, dining tables, shelving units — we take them apart carefully using the right tools. Every screw and bolt gets bagged and labeled so reassembly at the new place is clean and fast.",
  },
  {
    title: "Full Packing Service",
    description: "We pack every room from top to bottom. Kitchen items get wrapped individually. Clothes go into wardrobe boxes. Electronics get padded. Fragile items like mirrors, artwork, and glassware get custom wrapping.",
  },
  {
    title: "Heavy Item Handling",
    description: "Grand pianos, marble tables, heavy safes, gym equipment — we have the equipment and manpower to handle items that a regular crew can't.",
  },
  {
    title: "Loading and Transport",
    description: "Our trucks are clean, covered, and equipped with tie-down straps and padding. Everything is loaded strategically — heavy items at the bottom, fragile items secured on top.",
  },
  {
    title: "Unloading and Setup",
    description: "At the new villa, we unload everything, place boxes in the correct rooms, reassemble all furniture, and set things up the way you want them.",
  },
  {
    title: "Cleanup",
    description: "We remove all packing materials, cardboard boxes, and tape from both the old and new villa. You don't have to deal with the mess.",
  },
];

const checklist = [
  "Walk through every room and decide what you're keeping, donating, or throwing out.",
  "Empty your fridge at least 24 hours before the move. Defrost the freezer.",
  "Disconnect any built-in appliances or let us know so we can handle it.",
  "Make sure parking is available at both the old and new villa for our truck.",
  "Keep important documents, jewelry, and valuables with you personally.",
  "If you have pets, arrange for someone to watch them on moving day.",
  "Let your building security or villa community management know about the move in advance.",
];

export default function VillaMoversPage() {
  return (
    <>
      <ServiceHero
        title="Villa Movers and Packers in Dubai"
        subtitle="Professional Villa Relocation"
        description="Moving out of a villa is a different kind of job — more rooms, heavier furniture, outdoor items. At Najm Al Dhahabih, villa relocations are one of our core services. We've moved families out of villas in Arabian Ranches, Emirates Hills, JVC, Mirdif, Palm Jumeirah, Al Barsha, and just about every villa community in Dubai."
        breadcrumb={{ label: "Villa Movers in Dubai" }}
      />

      {/* What's Included */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-3">What Our Villa Moving Service Covers</h2>
          <p className="text-[#666666] text-center max-w-2xl mx-auto mb-12">
            When you book a villa move with us, here&apos;s what happens:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-[#FF2828] rounded-lg flex items-center justify-center text-white font-bold text-sm mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[#00357A] font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Villa Moving Gallery */}
      <section className="py-10 px-4 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Professional crew disassembling and wrapping villa furniture",
              "Heavy-duty moving truck loaded and ready for villa relocation",
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

      {/* CTA band */}
      <CTASection
        title="Need to Move Your Villa? Let's Talk."
        subtitle="Call +971-55-4495331 or send us a WhatsApp message. We'll give you a clear quote within the hour."
        variant="secondary"
      />

      {/* Villa Areas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-3">Villa Communities in Dubai We Regularly Move</h2>
          <p className="text-[#666666] text-center mb-8">We handle villa relocations across all of Dubai, including:</p>
          {/* Villa community banner */}
          <div className="mb-8 rounded-2xl overflow-hidden aspect-[21/9] bg-slate-100 flex flex-col items-center justify-center gap-3 border border-slate-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
            </svg>
            <p className="text-slate-400 text-sm font-medium text-center px-4">Dubai villa communities we serve — Arabian Ranches, Emirates Hills, Palm Jumeirah & more</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {villaAreas.map((area) => (
              <span key={area} className="bg-white border border-gray-200 text-[#00357A] font-medium text-sm px-4 py-2 rounded-full hover:border-[#FF2828] hover:text-[#FF2828] transition-colors">
                {area}
              </span>
            ))}
          </div>
          <p className="text-center text-[#666666] mt-6 text-sm">
            We also move villas from Dubai to Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, and Al Ain.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#00357A] mb-6">Why Families Trust Us for Villa Moves</h2>
              <div className="space-y-5">
                {[
                  { title: "Hundreds of villa moves completed", desc: "We've done this hundreds of times. Villa moves aren't new to us. We know the common challenges — narrow villa gates, upper floor balconies, items that don't fit through standard doorways." },
                  { title: "Right crew size for every villa", desc: "We don't send two guys and hope for the best. Based on the size of your villa, we assign the right number of movers — usually 4 to 8 for a standard 3 to 5 bedroom villa." },
                  { title: "Proper equipment always on hand", desc: "Trolleys, dollies, moving straps, furniture sliders, and protective blankets. For items that can't go through doors, we have crane service options for upper-floor moves if needed." },
                  { title: "Your timeline is respected", desc: "Most families want to move in one day. We plan so that packing starts early, the truck is loaded by midday, and you're sleeping in your new villa that same night." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <CheckCircle size={20} className="text-[#FF2828] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#00357A] font-semibold">{item.title}</p>
                      <p className="text-[#666666] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Image below trust points — in the left column */}
              <div className="rounded-2xl overflow-hidden aspect-video bg-slate-100 flex flex-col items-center justify-center gap-3 border border-slate-200 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                </svg>
                <p className="text-slate-400 text-xs font-medium text-center px-4">Furniture fully reassembled and set up in the new villa</p>
              </div>
            </div>
            <div className="bg-[#00357A] rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">Things to Prepare Before Your Villa Move</h3>
              <div className="space-y-4">
                {checklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#FF2828] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-blue-100 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />
      <FAQSection faqs={villaFaqs} title="Common Questions About Villa Moving" />
      <QuoteFormSection title="Get a Free Villa Moving Quote" subtitle="Tell us about your villa and we'll give you an accurate, transparent price within 30 minutes." />
      <CTASection title="Ready to Move Your Villa?" subtitle="Call +971-55-4495331 for a free quote. We're available 7 days a week." variant="primary" />
    </>
  );
}
