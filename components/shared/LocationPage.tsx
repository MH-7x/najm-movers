import Link from "next/link";
import ServiceHero from "./ServiceHero";
import ReviewsSection from "./ReviewsSection";
import CTASection from "./CTASection";
import QuoteFormSection from "./QuoteFormSection";
import FAQSection from "./FAQSection";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface LocationService {
  title: string;

  desc: string;
  href: string;
}

interface LocationFAQ {
  question: string;
  answer: string;
}

interface LocationPageProps {
  locationName: string;
  heroTitle: string;
  imageSrc: StaticImageData;
  heroDescription: string;
  heroSubtitle?: string;
  services: LocationService[];
  areas: string[];
  crossEmirate?: { name: string; desc: string }[];
  whyChooseUs?: string[];
  pricing?: { type: string; price: string }[];
  faqs: LocationFAQ[];
  metaTitle: string;
  metaDescription: string;
}

export default function LocationPage({
  locationName,
  heroTitle,
  imageSrc,
  heroDescription,
  heroSubtitle,
  services,
  areas,
  crossEmirate,
  whyChooseUs,
  pricing,
  faqs,
}: LocationPageProps) {
  return (
    <>
      <ServiceHero
        title={heroTitle}
        imageSrc={imageSrc}
        subtitle={heroSubtitle || `Professional Movers in ${locationName}`}
        description={heroDescription}
        breadcrumb={{ label: `Movers in ${locationName}` }}
      />
      <ReviewsSection />
      {/* Location showcase image */}
      <section className="pb-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {[
              {
                src: "/moving-crew servicing-Abu-Dhabi-residents.jpg",
                alt: "Najm Al Dhahabih Furniture Movers Moving Crew Servicing Abu Dhabi Residents",
              },
              {
                src: "/Fully-loaded moving-truck-on-the-route-to-Abu-Dhabi.jpg",
                alt: "Najm Al Dhahabih Furniture Movers Fully Loaded Moving Truck On The Route To Abu Dhabi",
              },
            ].map((label, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden aspect-4/3 bg-slate-100 relative"
              >
                <Image
                  src={label.src}
                  alt={label.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pt-16 pb-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-3">
            Our Moving Services in{" "}
            <span className="text-brand-primary">{locationName}</span>
          </h2>
          <p className="text-[#666666] text-center mb-12">
            Complete relocation services available across {locationName}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#FF2828]/30 hover:shadow-md transition-all"
              >
                <h3 className="text-[#00357A] font-bold text-lg mb-2 group-hover:text-[#FF2828] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed mb-3">
                  {s.desc}
                </p>
                <span className="text-[#FF2828] text-sm font-semibold flex items-center gap-1">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Moving in ${locationName}? Call Us Today.`}
        subtitle="Call +971-55-4495331 or WhatsApp us your details. Free quotes provided within 30 minutes."
        variant="secondary"
      />

      {/* Areas */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-3">
            Areas We Cover in {locationName}
          </h2>
          <p className="text-[#666666] text-center mb-8">
            We provide moving services across all areas of {locationName}
          </p>
          {/* City/areas banner */}
          <div className="mb-8 rounded-2xl overflow-hidden md:aspect-21/9 aspect-4/3 bg-slate-100 relative">
            <Image
              src={"/serve-all-areas-in-abu-dhabi.jpg"}
              alt="Serve All Areas in Abu Dhabi"
              fill
              className="object-cover"
            />
            <div className="text-white text-sm text-shadow-2xs absolute left-2 bg-black/30 p-1 bottom-2 ">
              Abu Dhabi city skyline — we serve every neighbourhood and
              community
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {areas.map((area) => (
              <span
                key={area}
                className="bg-white border border-gray-200 text-[#00357A] text-sm font-medium px-4 py-2 rounded-full hover:border-[#FF2828] hover:text-[#FF2828] transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-emirate */}
      {crossEmirate && (
        <section className="py-16 px-4 bg-[#00357A]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-3">
              Moving Between {locationName} and Other Emirates
            </h2>
            <p className="text-blue-200 text-center mb-10">
              We handle daily moves between {locationName} and all other UAE
              emirates
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {crossEmirate.map((route) => (
                <div
                  key={route.name}
                  className="flex items-center gap-3 bg-white/10 rounded-lg px-5 py-3.5"
                >
                  <CheckCircle
                    size={16}
                    className="text-[#FF2828] flex-shrink-0"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {locationName} ↔ {route.name}
                    </p>
                    <p className="text-blue-200 text-xs">{route.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      {whyChooseUs && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#00357A] text-center mb-8">
              Why {locationName} Residents Choose Us
            </h2>
            {/* Why choose us banner */}
            <div className="mb-10 rounded-2xl overflow-hidden md:aspect-21/9 aspect-4/3 bg-slate-100 relative">
              <Image
                src={"/premium-house-movers-in-abu-dhabi.jpg"}
                alt="Premium House Movers in Abu Dhabi"
                fill
                className="object-cover"
              />
              <div className="text-white text-sm text-shadow-2xs absolute left-2 bg-black/30 p-1 bottom-2 ">
                Trusted by families and businesses across Abu Dhabi for
                reliable, professional moves
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUs.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-gray-50 rounded-lg px-5 py-3.5 border border-gray-100"
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
      )}

      {/* Pricing */}
      {pricing && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#00357A] text-center mb-10">
              Estimated Moving Costs in {locationName}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {pricing.map((p) => (
                <div
                  key={p.type}
                  className="bg-white rounded-xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow"
                >
                  <h3 className="text-[#00357A] font-bold mb-2">{p.type}</h3>
                  <p className="text-[#FF2828] font-bold text-xl">{p.price}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-[#666666] text-sm mt-5">
              These are estimates. Call{" "}
              <a
                href="tel:+971554495331"
                className="text-[#FF2828] font-semibold"
              >
                +971-55-4495331
              </a>{" "}
              for an exact quote.
            </p>
          </div>
        </section>
      )}

      <FAQSection faqs={faqs} title={`${locationName} Moving Questions`} />
      <QuoteFormSection
        title={`Get a Free Moving Quote in ${locationName}`}
        subtitle="Tell us about your move and we'll respond with a clear price within 30 minutes."
      />
      <CTASection
        title={`Ready to Move in ${locationName}?`}
        subtitle="Call +971-55-4495331 — We're available 7 days a week, 8 AM to 10 PM."
        variant="primary"
      />
    </>
  );
}
