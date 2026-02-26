"use client";
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import GoogleReviewCard from "../GoogleReviewCard";

const googleReviews = [
  {
    name: "Khalid Al-Hashmi",
    time: "5 days ago",
    star: 5,
    review:
      "Najm Al Dhahabih moved us from Dubai Marina to JVC without a single issue. The team was careful with every piece of furniture and finished faster than I expected.",
    image: "/ava/32.jpg",
  },
  {
    name: "Rebecca Thompson",
    time: "2 weeks ago",
    star: 5,
    review:
      "Really happy with how they handled my move. Everything was wrapped properly and nothing was damaged — even my glass dining table arrived perfectly.",
    image: "/ava/44.jpg",
  },
  {
    name: "Arjun Nair",
    time: "3 days ago",
    star: 5,
    review:
      "Called them last minute for a move in Sharjah and they showed up on time. Fair pricing too — no hidden charges at the end.",
    image: "/ava/86.jpg",
  },
  {
    name: "Layla Ibrahim",
    time: "1 month ago",
    star: 5,
    review:
      "We used Najm Al Dhahabih for our villa move in Abu Dhabi. The workers were respectful, hardworking, and reassembled all the wardrobes without any problems.",
    image: "/ava/68.jpg",
  },
  {
    name: "Tom Bradley",
    time: "4 days ago",
    star: 5,
    review:
      "Moved my one-bedroom apartment in under three hours. The guys knew exactly what they were doing and placed everything where I asked.",
    image: "/ava/22.jpg",
  },
  {
    name: "Noura Al-Suwaidi",
    time: "6 weeks ago",
    star: 5,
    review:
      "I was nervous about moving my piano but Najm Al Dhahabih handled it like pros. Very careful team and good communication from start to finish.",
    image: "/ava/90.jpg",
  },
  {
    name: "Daniel Carter",
    time: "1 week ago",
    star: 5,
    review:
      "Third time using them and they're consistently good. Reliable furniture movers in Dubai — that's hard to find, honestly.",
    image: "/ava/54.jpg",
  },
  {
    name: "Amina Rashid",
    time: "3 weeks ago",
    star: 5,
    review:
      "They packed all my kitchen items and fragile stuff so well. Not a single scratch on anything. Will recommend Najm Al Dhahabih to my friends.",
    image: "/ava/29.jpg",
  },
  {
    name: "Chris Fernandez",
    time: "2 months ago",
    star: 5,
    review:
      "Used their service for an office move in Business Bay. Quick, organized, and the price was fair compared to other movers I contacted.",
    image: "/ava/11.jpg",
  },
  {
    name: "Sana Malik",
    time: "8 days ago",
    star: 5,
    review:
      "Smooth move from Ajman to Dubai. The team was friendly and didn't rush through anything. Would definitely hire Najm Al Dhahabih again.",
    image: "/ava/19.jpg",
  },
];

export default function ReviewSection() {
  return (
    <section className="mt-16 max-w-6xl md:px-0 px-3 pb-24 mx-auto">
      <div className="flex items-center justify-center text-center flex-col">
        <h2 className="font-bold text-brand-secondary whitespace-normal text-4xl wrap-break-word">
          What Our Customers Says
        </h2>
        <p className="text-brand-text max-w-2xl mx-auto mt-5">
          Thousands of families and businesses across the UAE have trusted us
          with their moves. Here&apos;s what some of them have to say.
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex gap-x-1 ">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-yellow-500 fill-yellow-500"
                />
              ))}
          </div>
          <span className="text-brand-secondary font-bold">4.9/5</span>
          <span className="text-brand-text text-sm">based on 500+ reviews</span>
        </div>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="max-w-5xl mx-auto mt-10"
      >
        <CarouselContent>
          {googleReviews.map((review, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 select-none"
            >
              <GoogleReviewCard review={{ ...review }} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
