import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
import QuoteForm from "@/components/shared/QuoteForm";
import FAQSection from "@/components/shared/FAQSection";

export const metadata: Metadata = {
  title: "Contact Us | Najm Al Dhahabih Furniture Movers | Get a Free Moving Quote",
  description:
    "Contact Najm Al Dhahabih Furniture Movers for a free moving quote. Call +971-55-4495331 or fill the form. Serving Dubai, Abu Dhabi, Sharjah & all UAE.",
};

const contactFaqs = [
  {
    question: "How quickly can I get a quote?",
    answer: "Usually within 30 minutes of your call or form submission.",
  },
  {
    question: "Do you do free site surveys?",
    answer: "For large moves (villas, offices, commercial), yes — we can visit your location to give you a more accurate quote.",
  },
  {
    question: "Can I book a move for tomorrow?",
    answer: "Possibly. Call us and we'll check availability. We try to accommodate last-minute bookings whenever we can.",
  },
  {
    question: "What are your working hours?",
    answer: "We're available 7 days a week, from 8:00 AM to 10:00 PM. This includes Fridays and public holidays.",
  },
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+971-55-4495331",
    href: "tel:+971554495331",
    color: "bg-[#FF2828]",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+971-55-4495331",
    href: "https://wa.me/971554495331",
    color: "bg-green-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@najmaldhahbih.com",
    href: "mailto:info@najmaldhahbih.com",
    color: "bg-[#00357A]",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "7 Days, 8:00 AM – 10:00 PM",
    href: undefined,
    color: "bg-gray-600",
  },
];

const locationServed = [
  "Dubai", "Abu Dhabi", "Sharjah", "Ajman",
  "Ras Al Khaimah", "Al Ain", "Umm Al Quwain", "Fujairah",
];

export default function ContactUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#00357A] py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white transform translate-x-24 -translate-y-24" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact Us — Get a Free Moving Quote
          </h1>
          <p className="text-blue-200 text-lg">
            Have a question? Need a quote? Ready to book your move? Reach out to us through any of the options below. We respond fast — usually within 30 minutes during working hours.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Contact page banner image */}
          <div className="mb-10 rounded-2xl overflow-hidden aspect-[21/9] bg-slate-100 flex flex-col items-center justify-center gap-3 border border-slate-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
            </svg>
            <p className="text-slate-400 text-sm font-medium text-center px-4">Reach out to our team — we respond within 30 minutes during working hours</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#00357A] mb-6">Get in Touch</h2>
              <div className="space-y-4 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className={`w-11 h-11 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <item.icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[#666666] text-xs font-medium uppercase tracking-wide">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[#00357A] font-semibold hover:text-[#FF2828] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#00357A] font-semibold">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="space-y-3">
                <a
                  href="tel:+971554495331"
                  className="flex items-center justify-center gap-2 bg-[#FF2828] hover:bg-[#cc1f1f] text-white font-bold py-3.5 rounded-lg transition-colors w-full"
                >
                  <Phone size={16} />
                  Call +971-55-4495331
                </a>
                <a
                  href="https://wa.me/971554495331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-lg transition-colors w-full"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Locations Served */}
              <div className="mt-8">
                <h3 className="text-[#00357A] font-bold mb-4">We Serve All Emirates</h3>
                <div className="flex flex-wrap gap-2">
                  {locationServed.map((loc) => (
                    <span key={loc} className="bg-[#00357A] text-white text-xs font-medium px-3 py-1.5 rounded-full">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                <QuoteForm
                  title="Request a Free Moving Quote"
                  subtitle="Fill out the form and we'll get back to you with a price within 30 minutes."
                  variant="default"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location + Gallery */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00357A] text-center mb-10">Our Location</h2>
          {/* Map placeholder (to be replaced with Google Maps embed) */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm mb-6">
            <div className="bg-[#00357A]/5 h-80 flex items-center justify-center border-2 border-dashed border-[#00357A]/20 rounded-2xl">
              <div className="text-center">
                <MapPin size={48} className="text-[#00357A] mx-auto mb-3" />
                <p className="text-[#00357A] font-bold text-lg">Google Maps</p>
                <p className="text-[#666666] text-sm">Map will be embedded here</p>
                <p className="text-[#666666] text-sm mt-2">Dubai, UAE</p>
              </div>
            </div>
          </div>
          {/* Office and team images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              "Our Dubai operations base — trucks ready for daily dispatch",
              "Customer service team ready to take your call or WhatsApp",
              "Crew completing a successful same-day home move in Dubai",
            ].map((label, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-video bg-slate-100 flex flex-col items-center justify-center gap-3 border border-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                </svg>
                <p className="text-slate-400 text-xs font-medium text-center px-4">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={contactFaqs} title="Quick Answers" />

      {/* Final band */}
      <section className="bg-[#FF2828] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            No matter where you&apos;re moving from or to, call us. We&apos;ll make it happen.
          </h2>
          <a
            href="tel:+971554495331"
            className="inline-flex items-center gap-2 bg-white text-[#FF2828] font-bold py-4 px-10 rounded-lg mt-4 hover:bg-gray-100 transition-colors text-lg"
          >
            <Phone size={20} />
            +971-55-4495331
          </a>
        </div>
      </section>
    </>
  );
}
