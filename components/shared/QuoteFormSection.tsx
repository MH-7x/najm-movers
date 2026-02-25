import { AlarmClockCheck, HandCoins, Phone, ShieldCheck } from "lucide-react";
import QuoteForm from "./QuoteForm";

interface QuoteFormSectionProps {
  title?: string;
  subtitle?: string;
}

export default function QuoteFormSection({
  title = "Get a Free Moving Quote",
  subtitle = "Fill out the form below and we'll get back to you within 30 minutes with a price.",
}: QuoteFormSectionProps) {
  return (
    <section className="py-16 mt-10 px-4 bg-[#00357A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: info */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
            <p className="text-blue-200 mb-8">{subtitle}</p>

            <div className="space-y-5 ">
              {[
                {
                  icon: <Phone className="text-white" size={19} />,
                  title: "Call or WhatsApp",
                  text: "+971-55-4495331 — We're available 7 days a week, 8 AM to 10 PM.",
                },
                {
                  icon: <AlarmClockCheck className="text-white" size={19} />,
                  title: "Quick Response",
                  text: "We respond to all quote requests within 30 minutes during working hours.",
                },
                {
                  icon: <HandCoins className="text-white" size={19} />,
                  title: "Transparent Pricing",
                  text: "The price we quote is the price you pay. No hidden fees, no surprise charges on moving day.",
                },
                {
                  icon: <ShieldCheck className="text-white" size={19} />,
                  title: "Licensed & Insured",
                  text: "Najm Al Dhahabih is a fully licensed and registered company in the UAE.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FF2828] rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-blue-200 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
            <QuoteForm title="" subtitle="" variant="default" />
          </div>
        </div>
      </div>
    </section>
  );
}
