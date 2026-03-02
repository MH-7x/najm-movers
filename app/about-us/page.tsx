import Link from "next/link";
import {
  CheckCircle,
  Phone,
  ArrowRight,
  Trophy,
  HandCoins,
  ShieldCheckIcon,
  AlarmCheck,
  PhoneCall,
} from "lucide-react";
import CTASection from "@/components/shared/CTASection";
import Image from "next/image";
import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "About Us | Najm Al Dhahabih Furniture Movers LLC",
      desc: "Learn about Najm Al Dhahabih Furniture Movers LLC — a trusted moving company in UAE offering professional relocation services across Dubai, Abu Dhabi, Sharjah & more.",
    },
    image: {
      path: "/trusted-villa-movers-dubai-experienced-moving-team.jpg",
      alt: "trusted villa movers dubai experienced moving team",
    },
    path: "/about-us",
  },
});

const whatWeDo = [
  "Home Moving — apartments, villas, and shared accommodations",
  "Office Moving — commercial, corporate, and small business relocations",
  "Furniture Moving — single items or complete furniture setups",
  "Packing Services — full, partial, and fragile-only packing",
  "Storage — short-term and long-term warehousing",
  "Cross-Emirate Moving — between Dubai, Abu Dhabi, Sharjah, Ajman, RAK, and Al Ain",
];

const emirates = [
  { name: "Dubai", desc: "Our home base and busiest area" },
  { name: "Abu Dhabi", desc: "Full service across the capital" },
  { name: "Sharjah", desc: "One of our busiest routes alongside Dubai" },
  { name: "Ajman", desc: "Affordable moves in a growing emirate" },
  {
    name: "Ras Al Khaimah",
    desc: "Long-distance service with proper planning",
  },
  { name: "Al Ain", desc: "Reliable service for the Garden City" },
];

const values = [
  {
    title: "Honesty in pricing",
    desc: "We give you a clear quote based on what you actually need. No inflated prices, no surprise charges at the end.",
    icon: <HandCoins className="text-gray-100" size={30} />,
  },
  {
    title: "Care in handling",
    desc: "Every item gets proper wrapping and protection. We treat your stuff the way we'd want ours treated.",
    icon: <ShieldCheckIcon className="text-gray-100" size={30} />,
  },
  {
    title: "Respect for your time",
    desc: "We show up when we say we will. We don't ask you to 'wait at home all day.' You get a time, and we stick to it.",
    icon: <AlarmCheck className="text-gray-100" size={30} />,
  },
  {
    title: "Clean communication",
    desc: "One phone number, one team. If something comes up during the move, you'll know about it right away.",
    icon: <PhoneCall className="text-gray-100" size={30} />,
  },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#00357A] py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white transform translate-x-24 -translate-y-24" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#FF2828] transform -translate-x-12 translate-y-12" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            About Najm Al Dhahabih Furniture Movers LLC
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed">
            A professional moving and relocation company based in the UAE —
            trusted by thousands of families and businesses across all seven
            emirates.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#00357A] mb-5">
                Who We Are
              </h2>
              <div className="space-y-4 text-[#666666] leading-relaxed">
                <p>
                  Najm Al Dhahabih Furniture Movers LLC is a professional moving
                  and relocation company based in the UAE. We provide packing,
                  moving, and storage services for homes, offices, and
                  businesses across all seven emirates.
                </p>
                <p>
                  We&apos;re not the biggest company in the market, and we
                  don&apos;t try to be. What we focus on is doing every move
                  properly — showing up on time, handling belongings with care,
                  and delivering a service that people are happy to recommend to
                  friends and family.
                </p>
                <p>
                  Our team includes trained movers, experienced drivers, and a
                  support crew that coordinates everything behind the scenes.
                  From the moment you call us to the moment we leave your new
                  home, you deal with one company — no outsourcing, no
                  subcontractors, no middlemen.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="tel:+971554495331"
                  className="flex items-center gap-2 bg-[#FF2828] hover:bg-[#cc1f1f] text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  <Phone size={16} />
                  Call Us Now
                </a>
                <Link
                  href="/contact-us/"
                  className="text-[#00357A] font-semibold flex items-center gap-1 hover:text-[#FF2828] transition-colors"
                >
                  Get a Quote <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {/* Company team / fleet image */}
              <div className="rounded-2xl overflow-hidden aspect-video bg-slate-100 relative">
                <Image
                  src={
                    "/trusted-villa-movers-dubai-experienced-moving-team.jpg"
                  }
                  alt="Najm Al Dhahabih Furniture Movers LLC"
                  fill
                  className="object-cover"
                />
                <p className="text-white text-xs font-medium text-center px-4 py-2 bg-black/30 absolute bottom-1 left-1">
                  Our professional moving team and fleet of trucks
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "5,000+", label: "Moves Completed" },
                  { num: "7", label: "Emirates Served" },
                  { num: "4.9/5", label: "Customer Rating" },
                  { num: "7 Days", label: "Weekly Service" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#00357A] rounded-xl p-6 text-center"
                  >
                    <p className="text-[#FF2828] font-bold text-3xl mb-1">
                      {stat.num}
                    </p>
                    <p className="text-blue-200 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-8">
            What We Do
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whatWeDo.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white rounded-lg px-5 py-3.5 border border-gray-100 hover:border-[#FF2828]/30 transition-colors"
              >
                <CheckCircle
                  size={18}
                  className="text-[#FF2828] flex-shrink-0"
                />
                <p className="text-[#666666] text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach / Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-3">
            How We Work
          </h2>
          <p className="text-[#666666] text-center mb-10 max-w-2xl mx-auto">
            Four core principles that guide every move we do
          </p>
          {/* Values banner */}
          <div className="mb-10 rounded-2xl overflow-hidden aspect-[21/9] bg-slate-100 relative ">
            <Image
              src={"/najm-al-dhahabih-movers-llc-truck.jpg"}
              alt="Najm Al Dhahabih Movers LLC Truck"
              fill
              className="object-cover"
            />
            <p className="text-white text-sm font-medium text-center px-4 py-2 absolute bottom-1 left-1 bg-black/30">
              Our crew at work — honest pricing, careful handling, on-time
              service, clear communication
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="text-center bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-[#00357A] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  {v.icon}
                </div>
                <h3 className="text-[#00357A] font-bold text-base mb-2">
                  {v.title}
                </h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emirates We Cover */}
      <section className="py-16 px-4 bg-[#00357A]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-3">
            Moving Services in All Emirates
          </h2>
          <p className="text-blue-200 text-center mb-8">
            We operate across the entire UAE
          </p>
          {/* UAE map/skyline banner */}
          <div className="mb-10 rounded-2xl overflow-hidden md:aspect-[21/9] aspect-video bg-white/10 relative">
            <Image
              src={"/serve-all-areas-in-abu-dhabi.jpg"}
              alt="Serving All Emirates in UAE"
              fill
              className="object-cover"
            />
            <p className="text-white/50 text-sm font-medium text-center px-4">
              Covering all 7 UAE emirates — our trucks travel the full length of
              the country
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {emirates.map((e) => (
              <div
                key={e.name}
                className="bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <h3 className="text-white font-bold text-lg mb-1">{e.name}</h3>
                <p className="text-blue-200 text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#00357A] mb-6">
            Licensed and Registered
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="mb-4 flex items-center justify-center">
              <Trophy className="text-brand-primary " size={60} />
            </div>
            <p className="text-[#666666] leading-relaxed mb-6">
              Najm Al Dhahabih Furniture Movers LLC is a fully licensed and
              registered company in the UAE. We operate with all required trade
              licenses, transport permits, and insurance documentation. When you
              hire us, you hire a legitimate, professional company — not a
              casual operation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "UAE Trade License", desc: "Fully registered" },
                { label: "Transport Permits", desc: "All emirates covered" },
                { label: "Professional Crew", desc: "Trained & certified" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="bg-white rounded-lg p-4 border border-gray-200 text-center"
                >
                  <CheckCircle
                    size={24}
                    className="text-[#FF2828] mx-auto mb-2"
                  />
                  <p className="text-[#00357A] font-bold text-sm">{c.label}</p>
                  <p className="text-[#666666] text-xs">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work With Us?"
        subtitle="Call +971-55-4495331 to discuss your move, or visit our Contact page to send us a message."
        variant="primary"
      />
    </>
  );
}
