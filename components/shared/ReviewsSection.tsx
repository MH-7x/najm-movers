import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ahmed Al Rashidi",
    location: "Dubai Marina, Dubai",
    rating: 5,
    text: "Excellent service from start to finish. The team arrived on time, packed everything carefully, and had us settled in the new apartment by evening. No damage, no drama. Highly recommended!",
    moveType: "2BHK Apartment Move",
  },
  {
    name: "Sarah Johnson",
    location: "Arabian Ranches, Dubai",
    rating: 5,
    text: "We moved our 4-bedroom villa and I was worried it would be chaos. But the Najm Al Dhahabih crew was so organized. Everything was labeled, reassembled perfectly at the new place. Worth every dirham.",
    moveType: "Villa Move",
  },
  {
    name: "Mohammed Al Farsi",
    location: "Business Bay, Dubai",
    rating: 5,
    text: "They moved our entire office over the weekend — 25 workstations, a server room, and a full pantry. By Sunday evening we were ready for Monday. Impressive team, clear communication.",
    moveType: "Office Relocation",
  },
  {
    name: "Priya Sharma",
    location: "International City, Dubai",
    rating: 5,
    text: "Very affordable and professional. I was quoted a price and that's exactly what I paid. The movers were polite and handled my furniture like it was their own. Will use again for sure.",
    moveType: "1BHK Apartment Move",
  },
  {
    name: "Khalid Al Mansouri",
    location: "Khalifa City, Abu Dhabi",
    rating: 5,
    text: "Moved from Dubai to Abu Dhabi. Long drive but they handled it professionally. Everything arrived in perfect condition. The team was careful with my antique furniture.",
    moveType: "Dubai to Abu Dhabi Move",
  },
  {
    name: "Fatima Al Zaabi",
    location: "Al Nahda, Sharjah",
    rating: 5,
    text: "Booked them last minute for a Sharjah to Dubai move. They fit us in the next day, showed up on time, and the whole thing was done by 4 PM. Really impressed with their speed and professionalism.",
    moveType: "Sharjah to Dubai Move",
  },
];

interface ReviewsSectionProps {
  title?: string;
  subtitle?: string;
}

export default function ReviewsSection({
  title = "What Our Customers Say",
  subtitle = "Thousands of families and businesses across the UAE have trusted us with their moves. Here's what some of them have to say.",
}: ReviewsSectionProps) {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#00357A] mb-3">{title}</h2>
          <p className="text-[#666666] max-w-2xl mx-auto">{subtitle}</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-[#00357A] font-bold">4.9/5</span>
            <span className="text-[#666666] text-sm">based on 500+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs text-[#FF2828] bg-red-50 px-2 py-1 rounded-full font-medium">
                  {review.moveType}
                </span>
              </div>
              <p className="text-[#666666] text-sm leading-relaxed mb-4 italic">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-[#00357A] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">
                    {review.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <div>
                  <p className="text-[#00357A] font-semibold text-sm">{review.name}</p>
                  <p className="text-[#666666] text-xs">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
