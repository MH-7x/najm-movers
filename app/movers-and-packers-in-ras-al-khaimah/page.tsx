import LocationPage from "@/components/shared/LocationPage";
import imageSrc from "@/public/Movers-and-Packers-in-Ras-Al-Khaimah.jpg";
import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers and Packers in Ras Al Khaimah | Instant Quotes",
      desc: "Reliable movers and packers in Ras Al Khaimah. House, villa & office moving with full packing. Call +971-55-4495331 for a free RAK moving quote.",
    },
    image: {
      path: "/Movers-and-Packers-in-Ras-Al-Khaimah.jpg",
      alt: "Movers and Packers in Ras Al Khaimah",
    },
    path: "/movers-and-packers-in-ras-al-khaimah",
  },
});

export default function RAKMoversPage() {
  return (
    <LocationPage
      imageSrc={imageSrc}
      images={[
        {
          src: "/villa-house-movers-ras-al-khaimah.jpg",
          alt: "villa house movers ras al khaimah",
        },
        {
          src: "/office-relocation-ras-al-khaimah.jpg",
          alt: "office relocation ras al khaimah",
        },
        {
          src: "/ras-al-khaimah-areas-map-movers-packers-rak-uae.jpg",
          alt: "ras al khaimah areas map movers packers rak uae",
        },
        {
          src: "/Najm-Al-Dhahabih-Movers-In-Dubai.jpg",
          alt: "professional moving team ras al khaimah",
        },
      ]}
      locationName="Ras Al Khaimah"
      heroTitle="Movers and Packers in Ras Al Khaimah - Free Moving Quotes"
      heroSubtitle="Professional RAK Movers"
      heroDescription="Ras Al Khaimah might be further from Dubai, but that doesn't mean you should settle for less when it comes to your moving service. Najm Al Dhahabih provides the same professional, fully-equipped moving service in RAK that we deliver in every other emirate. Whether you're relocating within RAK, moving from RAK to Dubai, or shifting from Dubai up to RAK, we've got you covered."
      services={[
        {
          title: "House Movers in RAK",
          desc: "Apartments and homes across RAK — Al Nakheel, Al Hamra, Al Jazeera Al Hamra, Khuzam, and more. Full packing and shifting services.",
          href: "/house-movers-and-home-shifting-dubai/",
        },
        {
          title: "Villa Movers in RAK",
          desc: "RAK has beautiful villa communities. We handle full villa moves including furniture disassembly, packing, transport, and reassembly.",
          href: "/villa-movers-and-packers-in-dubai/",
        },
        {
          title: "Furniture Movers in RAK",
          desc: "Moving specific furniture between RAK locations or from RAK to other emirates. Wrapped, loaded, and delivered safely.",
          href: "/furniture-movers-in-dubai/",
        },
        {
          title: "Office Movers in RAK",
          desc: "Commercial and office relocation across Ras Al Khaimah. We plan the move to minimize disruption to your operations.",
          href: "/office-movers-in-dubai/",
        },
        {
          title: "Packing & Moving Services",
          desc: "Complete packing service with all materials. All items labeled and organized for easy unpacking.",
          href: "/packing-and-moving-services-dubai/",
        },
        {
          title: "Storage Services",
          desc: "Need to store your belongings between moves? Our secure Dubai warehouse is accessible for RAK customers.",
          href: "/",
        },
      ]}
      areas={[
        "Al Nakheel",
        "Al Hamra",
        "Al Jazeera Al Hamra",
        "Khuzam",
        "Al Dhait North",
        "Al Dhait South",
        "Al Mairid",
        "Al Qusaidat",
        "Al Rams",
        "Digdaga",
        "RAK Free Trade Zone",
        "Al Marjan Island",
        "Mina Al Arab",
      ]}
      crossEmirate={[
        {
          name: "Dubai",
          desc: "About 1–1.5 hours drive. We make this trip regularly.",
        },
        {
          name: "Sharjah",
          desc: "Highway move, all items secured for the journey.",
        },
        {
          name: "Abu Dhabi",
          desc: "Long-distance move handled with full cargo protection.",
        },
        {
          name: "Ajman",
          desc: "Available upon request — fair price, professional service.",
        },
        {
          name: "Al Ain",
          desc: "Cross-country RAK to Al Ain moves handled regularly.",
        },
      ]}
      whyChooseUs={[
        "We're trusted in RAK — known for professional and reliable service",
        "Our trucks are equipped for long-distance highway moves",
        "All items are extra-secured and padded for the journey to/from Dubai",
        "Experienced with RAK communities, building access, and logistics",
        "7 days a week service — Fridays and holidays included",
        "Transparent pricing for both local RAK and cross-emirate moves",
      ]}
      pricing={[
        { type: "Local RAK Move", price: "From AED 700" },
        { type: "RAK to Dubai", price: "AED 1,500–2,500" },
        { type: "RAK to Abu Dhabi", price: "From AED 2,500" },
      ]}
      faqs={[
        {
          question: "How much does moving cost in Ras Al Khaimah?",
          answer:
            "Local RAK moves (within the city) are affordable — studios start from around AED 700. Cross-emirate moves from RAK to Dubai start from AED 1,500–2,500 depending on the volume. Call for an exact price.",
        },
        {
          question: "Can you move from Dubai to RAK?",
          answer:
            "Yes. We move both directions — Dubai to RAK and RAK to Dubai.",
        },
        {
          question: "Do you serve Al Hamra Village and Mina Al Arab?",
          answer: "Yes. We serve all communities in Ras Al Khaimah.",
        },
        {
          question: "How do you secure items for the long highway journey?",
          answer:
            "All items are padded with moving blankets, wrapped in stretch film, and secured with tie-down straps in the truck. Nothing moves during the highway drive.",
        },
      ]}
      metaTitle="Movers and Packers in Ras Al Khaimah | Najm Al Dhahabih Movers"
      metaDescription="Reliable movers and packers in Ras Al Khaimah."
    />
  );
}
