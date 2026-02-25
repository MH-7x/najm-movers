import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const services = [
  { name: "Villa Movers in Dubai", href: "/villa-movers-and-packers-in-dubai/" },
  { name: "House Movers in Dubai", href: "/house-movers-and-home-shifting-dubai/" },
  { name: "Office Movers in Dubai", href: "/office-movers-in-dubai/" },
  { name: "Furniture Movers in Dubai", href: "/furniture-movers-in-dubai/" },
  { name: "Packing & Moving Services", href: "/packing-and-moving-services-dubai/" },
  { name: "Cheap Movers in Dubai", href: "/cheap-movers-and-packers-in-dubai/" },
  { name: "Storage & Warehousing", href: "/storage-and-warehousing-services-dubai/" },
];

const locations = [
  { name: "Movers in Dubai", href: "/" },
  { name: "Movers in Abu Dhabi", href: "/movers-and-packers-in-abu-dhabi/" },
  { name: "Movers in Sharjah", href: "/movers-and-packers-in-sharjah/" },
  { name: "Movers in Ajman", href: "/movers-and-packers-in-ajman/" },
  { name: "Movers in Ras Al Khaimah", href: "/movers-and-packers-in-ras-al-khaimah/" },
  { name: "Movers in Al Ain", href: "/movers-and-packers-in-al-ain/" },
];

export default function Footer() {
  return (
    <footer className="bg-[#00357A] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#FF2828] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">NA</span>
              </div>
              <div>
                <p className="text-white font-bold leading-tight">Najm Al Dhahabih</p>
                <p className="text-blue-200 text-xs leading-tight">Furniture Movers LLC</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Professional movers and packers in Dubai and across all UAE emirates. Trusted by thousands of families and businesses for safe, reliable relocation services.
            </p>
            <div className="space-y-2">
              <a href="tel:+971554495331" className="flex items-center gap-2 text-white hover:text-[#FF2828] transition-colors text-sm font-medium">
                <Phone size={14} className="flex-shrink-0 text-[#FF2828]" />
                +971-55-4495331
              </a>
              <a href="https://wa.me/971554495331" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-green-300 transition-colors text-sm">
                <svg className="w-4 h-4 fill-green-400 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <Clock size={14} className="flex-shrink-0 text-[#FF2828]" />
                7 Days, 8 AM – 10 PM
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-b border-blue-600 pb-2">Our Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-blue-200 hover:text-[#FF2828] transition-colors text-sm">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-b border-blue-600 pb-2">Locations We Serve</h4>
            <ul className="space-y-2">
              {locations.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-blue-200 hover:text-[#FF2828] transition-colors text-sm">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-b border-blue-600 pb-2">Quick Links</h4>
            <ul className="space-y-2 mb-6">
              <li><Link href="/" className="text-blue-200 hover:text-[#FF2828] transition-colors text-sm">Home</Link></li>
              <li><Link href="/about-us/" className="text-blue-200 hover:text-[#FF2828] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact-us/" className="text-blue-200 hover:text-[#FF2828] transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/contact-us/" className="text-blue-200 hover:text-[#FF2828] transition-colors text-sm">Get a Free Quote</Link></li>
            </ul>
            <div className="bg-[#FF2828] rounded-lg p-4">
              <p className="text-white font-semibold text-sm mb-2">Ready to Move?</p>
              <a
                href="tel:+971554495331"
                className="block text-center bg-white text-[#FF2828] font-bold text-sm py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                Call +971-55-4495331
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-700 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-blue-300 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Najm Al Dhahabih Furniture Movers LLC. All rights reserved.
          </p>
          <p className="text-blue-300 text-xs">
            Licensed & Registered in UAE | Serving All Emirates
          </p>
        </div>
      </div>
    </footer>
  );
}
