import { APP } from "@/lib/App";
import { MetadataRoute } from "next";
const pages: MetadataRoute.Sitemap = [
  {
    url: "",
    changeFrequency: "weekly",
    priority: 1,
    images: ["/Najm-Al-Dhahabih-Movers-LLC.jpg"],
    lastModified: "2026-03-07",
  },
  {
    url: "/contact-us",
    changeFrequency: "yearly",
    priority: 0.5,
    images: ["/Najm-Al-Dhahabih-Movers-LLC.jpg"],
    lastModified: "2026-03-07",
  },
  {
    url: "/about-us",
    changeFrequency: "yearly",
    priority: 0.5,
    images: ["/trusted-villa-movers-dubai-experienced-moving-team.jpg"],
    lastModified: "2026-03-07",
  },
  // Location pages
  {
    url: "/movers-and-packers-in-ajman",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/Movers-and-Packers-in-Ajman.jpg"],
    lastModified: "2026-03-07",
  },
  {
    url: "/movers-and-packers-in-al-ain",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/Movers-and-Packers-in-in-Al-Ain.jpg"],
    lastModified: "2026-03-07",
  },
  {
    url: "/movers-and-packers-in-ras-al-khaimah",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/Movers-and-Packers-in-Ras-Al-Khaimah.jpg"],
    lastModified: "2026-03-07",
  },
  {
    url: "/movers-and-packers-in-sharjah",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/Movers-and-Packers-in-Sharjah.jpg"],
    lastModified: "2026-03-07",
  },
  {
    url: "/movers-and-packers-in-abu-dhabi",
    changeFrequency: "monthly",
    priority: 0.8,
    images: ["/movers-and-packers-in-abu-dhabi"],
    lastModified: "2026-03-07",
  },
  // Services pages
  {
    url: "/house-movers-and-home-shifting-dubai",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/House-Movers-Home-Shifting-Services-in-Dubai.jpg"],
    lastModified: "2026-03-07",
  },
  {
    url: "/furniture-movers-in-dubai",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/Furniture-Movers-in-Dubai.jpg"],
    lastModified: "2026-03-07",
  },
  {
    url: "/cheap-movers-and-packers-in-dubai",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/Cheap-Movers-and-Packers-in-Dubai.jpg"],
    lastModified: "2026-03-07",
  },
  {
    url: "/office-movers-in-dubai",
    changeFrequency: "monthly",
    priority: 0.7,
    images: ["/Office-Movers-in-Dubai.jpg"],
    lastModified: "2026-03-07",
  },
  {
    url: "/packing-and-moving-services-dubai",
    changeFrequency: "monthly",
    priority: 0.7, // was 7 -> now valid
    images: ["/Packing-and-Moving-Services-in-Dubai.jpg"],
    lastModified: "2026-03-07",
  },
  {
    url: "/villa-movers-and-packers-in-dubai",
    changeFrequency: "monthly",
    priority: 0.7, // was 7 -> now valid
    images: ["/Villa-Movers-and-Packers-in-Dubai.jpg"],
    lastModified: "2026-03-07",
  },
  {
    url: "/privacy-policy",
    changeFrequency: "yearly",
    priority: 0.7, // was 7 -> now valid
    images: ["/Najm-Al-Dhahabih-Movers-In-Dubai.jpg"],
    lastModified: "2026-03-07",
  },
  {
    url: "/terms-and-conditions",
    changeFrequency: "yearly",
    priority: 0.7, // was 7 -> now valid
    images: ["/Najm-Al-Dhahabih-Movers-In-Dubai.jpg"],
    lastModified: "2026-03-07",
  },
];
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    ...page,
    url: `${APP.url}${page.url}/`,
    images: page.images ? page.images.map((img) => `${APP.url}${img}`) : [],
    lastModified: page.lastModified,
  }));
}
