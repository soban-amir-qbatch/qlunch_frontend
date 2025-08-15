import Image from "next/image";
import { Heart } from "lucide-react";

type FoodCardProps = {
  imageUrl: string;
  title: string;
  rating: number;
};

export default function FoodCard({
  imageUrl,
  title,
  rating,
}: FoodCardProps) {
  return (
    <div className="w-[300px] rounded-lg overflow-hidden shadow bg-white border">
      {/* Image section */}
      <div className="relative">
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={180}
          className="object-cover w-full h-[180px]"
        />

        {/* Heart Icon */}
        <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
          <Heart className="w-5 h-5 text-gray-700" />
        </div>
      </div>

      {/* Info section */}
      <div className="p-3">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">{title}</h3>
          <span className="bg-gray-100 text-sm px-2 py-0.5 rounded-full">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}

