import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Image, { StaticImageData } from "next/image";

interface ServiceHeroProps {
  title: string;
  imageSrc: StaticImageData;
  subtitle?: string;
  description: string;

  breadcrumb?: { label: string; href?: string };
}

export default function ServiceHero({
  title,
  imageSrc,
  subtitle,
  description,
  breadcrumb,
}: ServiceHeroProps) {
  return (
    <section className="relative bg-brand-secondary/70 overflow-hidden px-4 py-16 lg:py-24">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover -z-10"
        placeholder="blur"
        loading="eager"
        priority
      />
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white transform translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#FF2828] transform -translate-x-16 translate-y-16" />
      </div>

      <div className=" max-w-6xl mx-auto ">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            {breadcrumb.href ? (
              <Link
                href={breadcrumb.href}
                className="hover:text-white transition-colors"
              >
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
            <a href="tel:+971554495331">
              <Button className="md:w-max w-full" size={"lg"}>
                <Phone size={18} />
                +971-55-4495331
              </Button>
            </a>
            <Link href="/contact-us/">
              <Button
                variant={"secondary"}
                className="bg-white/10 border border-white md:w-max w-full"
                size={"lg"}
              >
                Get a Free Quote
              </Button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              "Licensed & Insured",
              "7 Days a Week",
              "Free Quote",
              "All UAE Emirates",
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-1.5 text-blue-200 text-sm"
              >
                <div className="w-4 h-4 rounded-full bg-[#FF2828] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
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
