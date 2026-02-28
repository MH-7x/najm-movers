import LocationPage from "@/components/shared/LocationPage";
import imageSrc from "@/public/Movers-and-Packers-in-Al-Ain.jpg";
import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers and Packers in Al Ain | Trusted Moving Company",
      desc: "Professional movers and packers in Al Ain. House, villa & office relocation with full packing services. Call +971-55-4495331 for a free Al Ain moving quote.",
    },
    image: {
      path: "/Movers-and-Packers-in-in-Al-Ain.jpg",
      alt: "Movers and Packers in in-Al-Ain",
    },
    path: "/movers-and-packers-in-al-ain",
  },
});

export default function AlAinMoversPage() {
  return (
    <LocationPage
      imageSrc={imageSrc}
      images={[
        {
          src: "/House-Movers-in-Al-Ain.jpg",
          alt: "House Movers in Al Ain",
        },
        {
          src: "/Packing-Moving-Services-in-al-ain.jpg",
          alt: "Packing Moving Services in al ain",
        },
        {
          src: "/moving-services-across-all-areas-of-Al-Ain.jpg",
          alt: "moving services across all areas of Al Ain",
        },
        {
          src: "/best-movers-in-al-ain.jpg",
          alt: "best movers in al ain",
        },
      ]}
      locationName="Al Ain"
      heroTitle="Movers and Packers in Al Ain — Trusted Moving Company"
      heroSubtitle="The Garden City's Trusted Movers"
      heroDescription="Al Ain is a city that many families love — quieter, greener, and great for raising kids. Whether you're moving into Al Ain, moving within the city, or relocating from Al Ain to Abu Dhabi or Dubai, Najm Al Dhahabih provides full moving services for the Garden City. We pack your home, disassemble furniture, load the truck, drive it safely to your new place, unload, reassemble, and unpack. All in one day."
      services={[
        {
          title: "House Movers in Al Ain",
          desc: "Apartments and homes across Al Ain. From a studio near Al Ain Mall to a large family apartment in Al Muwaiji — we handle all sizes.",
          href: "/house-movers-and-home-shifting-dubai/",
        },
        {
          title: "Villa Movers in Al Ain",
          desc: "Al Ain has many spacious villas, and we move families in and out of them with full packing, furniture handling, and setup.",
          href: "/villa-movers-and-packers-in-dubai/",
        },
        {
          title: "Furniture Movers in Al Ain",
          desc: "Moving individual furniture items or complete home/office furniture. Wrapped, transported, and reassembled at the new location.",
          href: "/furniture-movers-in-dubai/",
        },
        {
          title: "Office Movers in Al Ain",
          desc: "Business and commercial office relocations across Al Ain. Quick, organized, and professional.",
          href: "/office-movers-in-dubai/",
        },
        {
          title: "Packing & Moving Services",
          desc: "Complete packing service — we bring all materials and pack everything room by room with proper labeling.",
          href: "/packing-and-moving-services-dubai/",
        },
        {
          title: "Storage Services",
          desc: "Items can be stored at our Dubai facility between Al Ain moves or while you wait for your new property.",
          href: "/storage-and-warehousing-services-dubai/",
        },
      ]}
      areas={[
        "Al Jimi",
        "Al Muwaiji",
        "Al Khabisi",
        "Al Mutarad",
        "Al Towayya",
        "Al Markhaniya",
        "Al Bateen",
        "Al Sarooj",
        "Zakher",
        "Al Ain Industrial Area",
        "Al Hili",
        "Al Foah",
        "Mezyad",
        "Al Yahar",
      ]}
      crossEmirate={[
        {
          name: "Abu Dhabi",
          desc: "Our most common Al Ain route — about 1.5 hours away.",
        },
        {
          name: "Dubai",
          desc: "Highway move with full cargo security — about 1.5 hours.",
        },
        { name: "Sharjah", desc: "Available upon request." },
        {
          name: "Ajman & RAK",
          desc: "Long-distance moves handled with extra care.",
        },
      ]}
      whyChooseUs={[
        "Family-friendly service suited to Al Ain's family-oriented community",
        "Experienced with Al Ain's neighborhoods, building access, and logistics",
        "Long-distance highway moves fully equipped — padded trucks, secured cargo",
        "7 days a week service including Fridays and holidays",
        "Clear, honest pricing — no hidden charges",
        "Same-day or next-day service available when our schedule allows",
      ]}
      pricing={[
        { type: "Local Al Ain Move", price: "From AED 700" },
        { type: "Al Ain to Abu Dhabi", price: "From AED 1,500" },
        { type: "Al Ain to Dubai", price: "From AED 2,000" },
      ]}
      faqs={[
        {
          question: "How much does moving cost in Al Ain?",
          answer:
            "Local moves within Al Ain are affordable — starting from AED 700 for studios. Moves from Al Ain to Abu Dhabi start from AED 1,500. Al Ain to Dubai starts from AED 2,000. Call for your specific quote.",
        },
        {
          question: "Do you move from Dubai to Al Ain?",
          answer: "Yes, both directions. Dubai to Al Ain and Al Ain to Dubai.",
        },
        {
          question: "Can you handle weekend moves in Al Ain?",
          answer: "Yes. We work 7 days a week in Al Ain.",
        },
        {
          question: "How long does an Al Ain to Dubai move take?",
          answer:
            "The drive is about 1.5 hours. With loading and unloading, a full move from Al Ain to Dubai typically takes one full day.",
        },
      ]}
      metaTitle="Movers and Packers in Al Ain | Trusted Moving Company | Najm Al Dhahabih"
      metaDescription="Professional movers and packers in Al Ain."
    />
  );
}
