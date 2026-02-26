import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "primary" | "secondary" | "light";
}

export default function CTASection({
  title = "Ready to Move? Get a Free Quote Today",
  subtitle = "Call us at +971-55-4495331 or fill out the form. We'll get back to you within 30 minutes.",
  variant = "primary",
}: CTASectionProps) {
  const bgClass =
    variant === "primary"
      ? "bg-[#FF2828]"
      : variant === "secondary"
        ? "bg-[#00357A]"
        : "bg-gray-50 border border-gray-200";

  const titleClass = variant === "light" ? "text-[#00357A]" : "text-white";
  const subtitleClass =
    variant === "light" ? "text-[#666666]" : "text-white/85";

  return (
    <section className={`${bgClass} py-20 px-4`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-2xl sm:text-3xl font-bold mb-3 ${titleClass}`}>
          {title}
        </h2>
        <p className={`text-base mb-8 ${subtitleClass}`}>{subtitle}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <a href="tel:+971554495331" className="md:w-max w-full">
            <Button variant={"outline"} className=" w-full" size={"lg"}>
              <Phone size={18} />
              +971-55-4495331
            </Button>
          </a>
          <a
            href="https://wa.me/971554495331"
            target="_blank"
            className="md:w-max w-full"
            rel="noopener noreferrer"
          >
            <Button
              variant={"outline"}
              className="bg-green-500 hover:bg-green-600 text-white text-shadow-2xs w-full"
              size={"lg"}
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </Button>
          </a>

          <Link href="/contact-us" className="md:w-max w-full">
            <Button size={"lg"} variant={"secondary"} className="w-full">
              {" "}
              Get Free Quote
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
