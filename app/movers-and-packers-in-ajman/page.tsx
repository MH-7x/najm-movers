import LocationPage from "@/components/shared/LocationPage";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import imageSrc from "@/public/Movers-and-Packers-in-Ajman.jpg";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers and Packers in Ajman | Affordable Moving Company",
      desc: "Affordable movers and packers in Ajman. Complete moving services for houses, offices & furniture. Call +971-55-4495331 for a free Ajman moving quote.",
    },
    image: {
      path: "/Movers-and-Packers-in-Ajman.jpg",
      alt: "Movers and Packers in Ajman",
    },
    path: "/movers-and-packers-in-ajman",
  },
});
export default function AjmanMoversPage() {
  return (
    <LocationPage
      imageSrc={imageSrc}
      images={[
        {
          src: "/house-movers-ajman-furniture-packing-services.jpg",
          alt: "house movers ajman furniture packing services",
        },
        {
          src: "/office-movers-ajman-cheap-moving-company.jpg",
          alt: "office movers ajman cheap moving company",
        },
        {
          src: "/moving-services-all-areas-ajman-uae.jpg",
          alt: "moving services all areas ajman uae",
        },
        {
          src: "/budget-friendly-movers-ajman-professional-relocation.jpg",
          alt: "budget friendly movers ajman professional relocation",
        },
      ]}
      locationName="Ajman"
      heroTitle="Movers and Packers in Ajman — Affordable Moving Services"
      heroSubtitle="Budget-Friendly Ajman Movers"
      heroDescription="Ajman is known for its affordable living — and your moving service should match that. Najm Al Dhahabih provides budget-friendly moving services across Ajman without cutting corners on quality. Whether you're moving within Ajman, or relocating to or from Dubai, Sharjah, or anywhere in the UAE, we provide the same professional service: packing, loading, safe transport, and full setup."
      services={[
        {
          title: "House Movers in Ajman",
          desc: "Apartments and flats across Ajman — from studios in Al Rashidiya to family homes in Al Jurf. Full packing, transport, and unpacking.",
          href: "/house-movers-and-home-shifting-dubai/",
        },
        {
          title: "Villa Movers in Ajman",
          desc: "Ajman's villa communities are growing, and we move families in and out of them regularly. Full villa relocation with furniture handling and setup.",
          href: "/villa-movers-and-packers-in-dubai/",
        },
        {
          title: "Furniture Movers in Ajman",
          desc: "Individual furniture pieces or complete sets. Proper wrapping, secure transport, and reassembly at the destination.",
          href: "/furniture-movers-in-dubai/",
        },
        {
          title: "Office Movers in Ajman",
          desc: "Small businesses and commercial offices relocated quickly and carefully. Weekend moves available.",
          href: "/office-movers-in-dubai/",
        },
        {
          title: "Packing & Moving Services",
          desc: "Full packing service with all materials included. Budget-friendly options available.",
          href: "/packing-and-moving-services-dubai/",
        },
        {
          title: "Cheap Movers in Ajman",
          desc: "Ajman is one of our most affordable markets. Studios start from AED 500–700. Great value with no compromise on service quality.",
          href: "/cheap-movers-and-packers-in-dubai/",
        },
      ]}
      areas={[
        "Al Rashidiya",
        "Al Nuaimiya",
        "Al Jurf",
        "Al Bustan",
        "Ajman Industrial Area",
        "Al Hamidiya",
        "Al Mowaihat",
        "Ajman Downtown",
        "Emirates City",
        "Garden City",
        "Al Zahra",
        "Al Rawda",
      ]}
      crossEmirate={[
        {
          name: "Sharjah",
          desc: "Just across the border — often a 15-minute move.",
        },
        { name: "Dubai", desc: "Daily moves between Ajman and Dubai." },
        { name: "Ras Al Khaimah", desc: "Straightforward highway trip." },
        {
          name: "Abu Dhabi",
          desc: "Longer route, but we handle it regularly.",
        },
      ]}
      whyChooseUs={[
        "Low prices — Ajman is an affordable emirate and our prices reflect that",
        "Same quality — budget price, professional service",
        "Fast turnaround — most Ajman moves are completed in half a day",
        "Cross-emirate experience — we know the Ajman–Dubai and Ajman–Sharjah routes well",
        "7 days a week service including Fridays and holidays",
        "No hidden charges — the price we quote is what you pay",
      ]}
      pricing={[
        { type: "Studio Move", price: "AED 500–700" },
        { type: "2BHK Apartment", price: "AED 1,000–1,800" },
        { type: "Villa Move", price: "From AED 2,000" },
      ]}
      faqs={[
        {
          question: "How much does moving cost in Ajman?",
          answer:
            "Ajman moves are among the most affordable. Studios start from AED 500–700. 2BHK moves range from AED 1,000–1,800. Call for your specific price.",
        },
        {
          question: "Can you move from Ajman to Dubai?",
          answer:
            "Yes. We handle Ajman to Dubai moves every day. It's one of our most frequent routes.",
        },
        {
          question: "How long does an Ajman move take?",
          answer:
            "Most small Ajman moves are completed in half a day. Cross-emirate moves to Sharjah or Dubai take slightly longer depending on traffic.",
        },
        {
          question: "Do you work on weekends in Ajman?",
          answer:
            "Yes. We operate 7 days a week including Fridays and public holidays.",
        },
      ]}
      metaTitle="Movers and Packers in Ajman | Affordable Moving Company | Najm Al Dhahabih"
      metaDescription="Affordable movers and packers in Ajman."
    />
  );
}
