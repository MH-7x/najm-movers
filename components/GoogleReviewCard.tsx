import { BadgeCheck } from "lucide-react";
import Image from "next/image";

export interface Review {
  name: string;
  time: string;
  star: number; // You could also use strict literal types like: 1 | 2 | 3 | 4 | 5
  review: string;
  image: string;
}

const GoogleReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="bg-white rounded-3xl p-6 max-w-96 shadow-sm font-sans">
      <div className="flex justify-between items-start mb-3">
        <div className="flex gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden flex-shrink-0 border overflow-hidden border-gray-100 relative">
            <Image
              src={review.image}
              alt={`image of ${review.name}`}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-[16px]! font-bold text-gray-900 leading-tight">
              {review.name}
            </h3>
            <span className="text-gray-500 !text-[13px] mt-0.5">
              {review.time}
            </span>
          </div>
        </div>

        <div className="w-5 h-5 flex-shrink-0 relative">
          <Image
            src={"/google-icon.svg"}
            alt="google icon"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex items-center gap-1.5 mb-3">
        <div className="flex space-x-[1px] text-[#fbbc04]">
          {Array.from({ length: review.star }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[18px] h-[18px]"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>

        {/* Verified Badge (Blue Check) */}
        <BadgeCheck fill="#1a73e8" className="text-white" size={20} />
      </div>

      <div className="mb-2">
        <p className="text-[#1f1f1f] text-[15px]! leading-[1.45]">
          {review.review}
        </p>
      </div>
    </div>
  );
};

export default GoogleReviewCard;
