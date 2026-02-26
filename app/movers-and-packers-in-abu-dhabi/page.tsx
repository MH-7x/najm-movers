import type { Metadata } from "next";
import LocationPage from "@/components/shared/LocationPage";
import imageSrc from "@/public/Movers-and-Packers-in-Abu-Dhabi.jpg";
export const metadata: Metadata = {
  title:
    "Movers and Packers in Abu Dhabi | Best Moving Company | Najm Al Dhahabih",
  description:
    "Trusted movers and packers in Abu Dhabi. Villa, house, office & furniture moving services across Abu Dhabi. Call +971-55-4495331 for a free quote.",
};

export default function AbuDhabiMoversPage() {
  return (
    <LocationPage
      locationName="Abu Dhabi"
      heroTitle="Movers and Packers in Abu Dhabi — Best Moving Company"
      imageSrc={imageSrc}
      heroSubtitle="Trusted Abu Dhabi Movers"
      heroDescription="Looking for a reliable moving company in Abu Dhabi? Najm Al Dhahabih Furniture Movers provides complete moving and packing services across the capital — from small apartment shifts in Khalifa City to full villa relocations in Saadiyat Island. We handle everything: packing, furniture disassembly, loading, transport, unloading, reassembly, and unpacking."
      services={[
        {
          title: "Villa Movers in Abu Dhabi",
          desc: "Abu Dhabi has some of the largest villas in the UAE — Saadiyat, Yas Island, Al Raha, Khalifa City, Mohammed Bin Zayed City. We bring the right crew, right equipment, and right plan for every villa size.",
          href: "/villa-movers-and-packers-in-dubai/",
        },
        {
          title: "House Movers in Abu Dhabi",
          desc: "From studios in Tourist Club Area to 3BHK apartments in Al Reem Island, we handle all apartment and house moves across Abu Dhabi. Full packing, transport, and setup included.",
          href: "/house-movers-and-home-shifting-dubai/",
        },
        {
          title: "Furniture Movers in Abu Dhabi",
          desc: "Need a sofa moved from Abu Dhabi to Dubai? Or a full bedroom set delivered across the city? We move individual furniture pieces and complete furniture setups with proper wrapping and protection.",
          href: "/furniture-movers-in-dubai/",
        },
        {
          title: "Office Movers in Abu Dhabi",
          desc: "Corporate offices on Corniche Road, small businesses in Mussafah, co-working spaces on Reem Island — we relocate offices of all sizes with minimal downtime and full equipment care.",
          href: "/office-movers-in-dubai/",
        },
        {
          title: "Packing & Moving Services",
          desc: "Full packing service with all materials included. We pack room by room, label every box, and make sure everything arrives safely.",
          href: "/packing-and-moving-services-dubai/",
        },
        {
          title: "Affordable Movers in Abu Dhabi",
          desc: "Budget moves available too. Pickup truck service for small loads, and affordable packages for studio and 1BHK apartments starting from AED 1,000.",
          href: "/cheap-movers-and-packers-in-dubai/",
        },
      ]}
      areas={[
        "Al Reem Island",
        "Saadiyat Island",
        "Yas Island",
        "Al Raha Beach",
        "Khalifa City A & B",
        "Mohammed Bin Zayed City (MBZ)",
        "Mussafah",
        "Al Reef",
        "Al Shamkha",
        "Al Falah",
        "Corniche Area",
        "Tourist Club Area",
        "Electra Street",
        "Hamdan Street",
        "Al Nahyan",
        "Al Mushrif",
        "Al Bateen",
        "Al Maqtaa",
        "Al Karamah",
        "Bain Al Jessrain",
      ]}
      crossEmirate={[
        {
          name: "Dubai",
          desc: "Our most popular cross-emirate route. Full moving service available daily.",
        },
        {
          name: "Al Ain",
          desc: "Regular moves between the capital and the Garden City.",
        },
        {
          name: "Sharjah",
          desc: "Full service available for Sharjah–Abu Dhabi moves.",
        },
        {
          name: "Ajman & RAK",
          desc: "Long-distance moves handled with care and proper planning.",
        },
      ]}
      whyChooseUs={[
        "We know Abu Dhabi's communities, building rules, and logistics",
        "Our crews are experienced with high-rise apartment moves and villa relocations",
        "We carry all necessary permits for moving within Abu Dhabi",
        "Clear pricing with no hidden charges",
        "We work 7 days a week, including Fridays and holidays",
        "Same-day and next-day bookings available when our schedule allows",
      ]}
      pricing={[
        { type: "Studio / 1BHK", price: "AED 1,000–1,500" },
        { type: "2BHK Apartment", price: "AED 1,800–3,000" },
        { type: "Villa Move", price: "From AED 3,500" },
      ]}
      faqs={[
        {
          question: "How much do movers charge in Abu Dhabi?",
          answer:
            "Studio/1BHK moves start from AED 1,000–1,500. 2BHK apartments range from AED 1,800–3,000. Villas start from AED 3,500. These are estimates — call us for an exact quote.",
        },
        {
          question: "Can you move my furniture from Abu Dhabi to Dubai?",
          answer:
            "Yes. Abu Dhabi to Dubai is one of our most common routes. We do it daily.",
        },
        {
          question: "Do you serve Mussafah industrial area?",
          answer:
            "Yes. We handle both residential and commercial moves in Mussafah.",
        },
        {
          question: "How early should I book?",
          answer:
            "3–5 days in advance is ideal. But if you need a last-minute move, call us — we'll do our best to fit you in.",
        },
      ]}
      metaTitle="Movers and Packers in Abu Dhabi | Best Moving Company | Najm Al Dhahabih"
      metaDescription="Trusted movers and packers in Abu Dhabi."
    />
  );
}
