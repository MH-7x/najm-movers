import LocationPage from "@/components/shared/LocationPage";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import imageSrc from "@/public/Movers-and-Packers-in-Sharjah.jpg";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers and Packers in Sharjah | Najm Al Dhahabih",
      desc: "Trusted movers and packers in Sharjah. Affordable house, villa, office & furniture moving services. Call +971-55-4495331 for a free Sharjah moving quote.",
    },
    image: {
      path: "/Movers-and-Packers-in-Sharjah.jpg",
      alt: "Movers and Packers in Sharjah",
    },
    path: "/movers-and-packers-in-sharjah",
  },
});

export default function SharjahMoversPage() {
  return (
    <LocationPage
      imageSrc={imageSrc}
      images={[
        {
          src: "/villa-movers-in-sharjah-reliable-moving-company.jpg",
          alt: "villa movers in sharjah reliable moving company",
        },
        {
          src: "/house-movers-in-sharjah-packing-and-moving-services.jpg",
          alt: "house movers in sharjah packing and moving services",
        },
        {
          src: "/sharjah-moving-services-all-areas-covered.jpg",
          alt: "sharjah moving services all areas covered",
        },
        {
          src: "/reliable-sharjah-to-dubai-movers-affordable-pricing.jpg",
          alt: "reliable sharjah to dubai movers affordable pricing",
        },
      ]}
      locationName="Sharjah"
      heroTitle="Movers and Packers in Sharjah — Reliable Moving Company"
      heroSubtitle="Sharjah to Dubai & Beyond"
      heroDescription="Sharjah is one of the busiest emirates for moving — people shift between Sharjah and Dubai every day, families upgrade to bigger apartments, and businesses relocate to areas with better rent. Najm Al Dhahabih provides complete moving and packing services across Sharjah. From a small flat in Al Nahda to a villa in Al Ramla, we pack it, move it, and set it up."
      services={[
        {
          title: "House Movers in Sharjah",
          desc: "Apartments of all sizes — studios, 1BHK, 2BHK, 3BHK and larger. We pack every room, load the truck, drive to your new place, and unpack everything.",
          href: "/house-movers-and-home-shifting-dubai/",
        },
        {
          title: "Villa Movers in Sharjah",
          desc: "Sharjah has plenty of villa communities — Al Ramla, Al Ramaqia, Al Jazzat, Sharjah Sustainable City. We handle full villa relocations with the right crew and trucks.",
          href: "/villa-movers-and-packers-in-dubai/",
        },
        {
          title: "Furniture Movers in Sharjah",
          desc: "Moving specific furniture pieces within Sharjah or from Sharjah to other emirates. Proper wrapping, careful loading, and safe delivery.",
          href: "/furniture-movers-in-dubai/",
        },
        {
          title: "Office Movers in Sharjah",
          desc: "Business offices, shops, and commercial spaces in Sharjah — relocated quickly with minimal disruption to your work.",
          href: "/office-movers-in-dubai/",
        },
        {
          title: "Packing & Moving Services",
          desc: "Full packing service with all materials. We pack, label, and organize so unpacking at your new place is easy.",
          href: "/packing-and-moving-services-dubai/",
        },
        {
          title: "Cheap Movers in Sharjah",
          desc: "Sharjah moves tend to be more affordable than Dubai. Studio moves start from around AED 600–800. Great value for budget-conscious movers.",
          href: "/cheap-movers-and-packers-in-dubai/",
        },
      ]}
      areas={[
        "Al Nahda",
        "Al Majaz",
        "Al Khan",
        "Al Taawun",
        "Muwaileh",
        "Al Mamzar",
        "Bu Tina",
        "Al Qasimia",
        "Abu Shagara",
        "Al Ramla",
        "Al Ramaqia",
        "Al Jazzat",
        "University City",
        "Sharjah Industrial Area",
        "Al Yarmook",
        "Al Gulaya",
        "Al Fisht",
        "Al Gharb",
        "Al Wahda",
      ]}
      crossEmirate={[
        {
          name: "Dubai",
          desc: "Our most common cross-emirate route. Multiple Sharjah–Dubai moves daily.",
        },
        {
          name: "Abu Dhabi",
          desc: "Full service available for longer cross-emirate moves.",
        },
        { name: "Ajman", desc: "Very short trip — just across the border." },
        {
          name: "Ras Al Khaimah",
          desc: "Highway move with full cargo security.",
        },
      ]}
      whyChooseUs={[
        "We run the Sharjah–Dubai route daily — our drivers know every road",
        "Best timing knowledge to avoid traffic on the Sharjah–Dubai highway",
        "Affordable rates reflecting Sharjah's budget-friendly nature",
        "Industrial area moves handled — Sharjah Industrial, SAIF Zone",
        "We work 7 days a week including Fridays",
        "Clear pricing with no hidden charges",
      ]}
      pricing={[
        { type: "Studio Move", price: "AED 600–800" },
        { type: "2BHK Apartment", price: "AED 1,200–2,000" },
        { type: "Villa Move", price: "From AED 2,500" },
      ]}
      faqs={[
        {
          question: "How much do movers charge in Sharjah?",
          answer:
            "Sharjah moves tend to be more affordable than Dubai moves. Studio moves start from around AED 600–800. 2BHK moves range from AED 1,200–2,000. Call for an exact quote.",
        },
        {
          question: "Can you move from Sharjah to Dubai?",
          answer:
            "Yes. It's our most common cross-emirate route. We do multiple Sharjah–Dubai moves every day.",
        },
        {
          question: "Do you work in Sharjah Industrial Area?",
          answer:
            "Yes. We handle both residential and commercial moves in all parts of Sharjah, including the industrial areas.",
        },
        {
          question: "How do you avoid traffic on the Sharjah–Dubai route?",
          answer:
            "Our drivers know the best times and routes to avoid the peak-hour traffic on the main Sharjah–Dubai highway. We factor this into your move schedule.",
        },
      ]}
      metaTitle="Movers and Packers in Sharjah | Reliable Moving Company | Najm Al Dhahabih"
      metaDescription="Trusted movers and packers in Sharjah."
    />
  );
}
