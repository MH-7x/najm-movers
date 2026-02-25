import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  subtitle?: string;
  description: string;
  breadcrumb?: { label: string; href?: string };
}

export default function ServiceHero({
  title,
  subtitle,
  description,
  breadcrumb,
}: ServiceHeroProps) {
  return (
    <section className="relative bg-[#00357A] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white transform translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#FF2828] transform -translate-x-16 translate-y-16" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-20">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            {breadcrumb.href ? (
              <Link href={breadcrumb.href} className="hover:text-white transition-colors">
                {breadcrumb.label}
              </Link>
            ) : (
              <span className="text-white">{breadcrumb.label}</span>
            )}
          </nav>
        )}

        <div className="max-w-3xl">
          {subtitle && (
            <span className="inline-block bg-[#FF2828] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              {subtitle}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            {title}
          </h1>
          <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+971554495331"
              className="flex items-center justify-center gap-2 bg-[#FF2828] hover:bg-[#cc1f1f] text-white font-bold py-4 px-8 rounded-lg transition-colors text-base"
            >
              <Phone size={18} />
              +971-55-4495331
            </a>
            <Link
              href="/contact-us/"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg border border-white/30 transition-colors text-base"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mt-8">
            {["Licensed & Insured", "7 Days a Week", "Free Quote", "All UAE Emirates"].map((badge) => (
              <div key={badge} className="flex items-center gap-1.5 text-blue-200 text-sm">
                <div className="w-4 h-4 rounded-full bg-[#FF2828] flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
