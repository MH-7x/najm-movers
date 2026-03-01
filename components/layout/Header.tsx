"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const services = [
  {
    name: "Villa Movers in Dubai",
    href: "/villa-movers-and-packers-in-dubai/",
  },
  {
    name: "House Movers in Dubai",
    href: "/house-movers-and-home-shifting-dubai/",
  },
  { name: "Office Movers in Dubai", href: "/office-movers-in-dubai/" },
  { name: "Furniture Movers in Dubai", href: "/furniture-movers-in-dubai/" },
  {
    name: "Packing & Moving Services",
    href: "/packing-and-moving-services-dubai/",
  },
  {
    name: "Cheap Movers in Dubai",
    href: "/cheap-movers-and-packers-in-dubai/",
  },
  {
    name: "Storage & Warehousing",
    href: "/",
  },
];

const locations = [
  { name: "Movers in Abu Dhabi", href: "/movers-and-packers-in-abu-dhabi/" },
  { name: "Movers in Sharjah", href: "/movers-and-packers-in-sharjah/" },
  { name: "Movers in Ajman", href: "/movers-and-packers-in-ajman/" },
  {
    name: "Movers in Ras Al Khaimah",
    href: "/movers-and-packers-in-ras-al-khaimah/",
  },
  { name: "Movers in Al Ain", href: "/movers-and-packers-in-al-ain/" },
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Top bar */}
      <div className="bg-[#00357A] py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-white text-sm hidden sm:block font-medium">
            Professional Movers & Packers Across UAE — 24/7 Service
          </p>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="tel:+971554495331"
              className="flex items-center gap-2 text-white hover:text-[#FF2828] transition-colors font-semibold text-sm"
            >
              <Phone size={14} />
              +971-55-4495331
            </a>
            <a
              href="https://wa.me/971554495331"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm hover:text-green-300 transition-colors font-medium  flex items-center gap-1"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:py-3 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="">
            <div className="md:h-14 h-11   md:w-40 w-32  relative">
              <Image
                src={"/logo.svg"}
                alt="Najm Al Dhahabih Movers Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-[#00357A] font-semibold text-sm hover:text-[#FF2828] transition-colors rounded-md hover:bg-red-50"
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-[#00357A] font-semibold text-sm hover:text-[#FF2828] transition-colors rounded-md hover:bg-red-50">
                Services <ChevronDown size={14} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-xl rounded-lg border border-gray-100 py-2 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2.5 text-sm text-[#666666] hover:text-[#FF2828] hover:bg-red-50 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-[#00357A] font-semibold text-sm hover:text-[#FF2828] transition-colors rounded-md hover:bg-red-50">
                Locations <ChevronDown size={14} />
              </button>
              {locationsOpen && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-xl rounded-lg border border-gray-100 py-2 z-50">
                  {locations.map((loc) => (
                    <Link
                      key={loc.href}
                      href={loc.href}
                      className="block px-4 py-2.5 text-sm text-[#666666] hover:text-[#FF2828] hover:bg-red-50 transition-colors"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about-us/"
              className="px-3 py-2 text-[#00357A] font-semibold text-sm hover:text-[#FF2828] transition-colors rounded-md hover:bg-red-50"
            >
              About Us
            </Link>
            <Link
              href="/contact-us/"
              className="px-3 py-2 text-[#00357A] font-semibold text-sm hover:text-[#FF2828] transition-colors rounded-md hover:bg-red-50"
            >
              Contact
            </Link>
          </div>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+971554495331"
              className="hidden md:flex items-center gap-2 bg-[#FF2828] hover:bg-[#cc1f1f] text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              <Phone size={14} />
              Call Now
            </a>
            <Link
              href="/contact-us/"
              className="hidden md:flex bg-[#00357A] hover:bg-[#002a60] text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              Free Quote
            </Link>

            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button className="lg:hidden p-2 text-[#00357A]">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0 overflow-y-auto">
                <div className="bg-[#00357A] p-4 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold">Najm Al Dhahabih</p>
                    <p className="text-blue-200 text-xs">
                      Furniture Movers LLC
                    </p>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="text-white"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="py-4">
                  <Link
                    href="/"
                    className="block px-6 py-3 text-[#00357A] font-semibold border-b border-gray-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    Home
                  </Link>

                  <button
                    className="w-full flex items-center justify-between px-6 py-3 text-[#00357A] font-semibold border-b border-gray-100"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    Services{" "}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="bg-gray-50">
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-8 py-2.5 text-sm text-[#666666] border-b border-gray-100 hover:text-[#FF2828]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  <button
                    className="w-full flex items-center justify-between px-6 py-3 text-[#00357A] font-semibold border-b border-gray-100"
                    onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                  >
                    Locations{" "}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileLocationsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileLocationsOpen && (
                    <div className="bg-gray-50">
                      {locations.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className="block px-8 py-2.5 text-sm text-[#666666] border-b border-gray-100 hover:text-[#FF2828]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {l.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  <Link
                    href="/about-us/"
                    className="block px-6 py-3 text-[#00357A] font-semibold border-b border-gray-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact-us/"
                    className="block px-6 py-3 text-[#00357A] font-semibold border-b border-gray-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    Contact
                  </Link>

                  <div className="p-6 space-y-3">
                    <a
                      href="tel:+971554495331"
                      className="flex items-center justify-center gap-2 bg-[#FF2828] text-white font-semibold py-3 rounded-lg w-full"
                    >
                      <Phone size={16} /> +971-55-4495331
                    </a>
                    <a
                      href="https://wa.me/971554495331"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-3 rounded-lg w-full"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
