// import Image from "next/image";
// import { Heart } from "lucide-react";

// type RestaurantCardProps = {
//   imageUrl: string;
//   title: string;
//   rating: number;
// };

// export default function RestaurantCard({
//   imageUrl,
//   title,
//   rating,
// }: RestaurantCardProps) {
//   return (
//     <div className="w-[370px] mx-auto overflow-hidden bg-white">
//       {/* Image section */}
//       <div className="relative">
//         <Image
//           src={imageUrl}
//           alt={title}
//           width={300}
//           height={180}
//           className="object-cover w-full h-[180px]"
//         />

//         {/* Heart Icon */}
//         <div className="absolute top-2 right-2 p-1 shadow">
//           <Heart className="w-5 h-5 text-white" />
//         </div>
//       </div>

//       {/* Info section */}
//       <div className="p-3">
//         <div className="flex justify-between items-center">
//           <h3 className="font-semibold text-lg">{title}</h3>
//           <span className="bg-gray-100 text-sm px-2 py-0.5 rounded-full">
//             {rating.toFixed(1)}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }







import Image from "next/image";
import { Heart } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";

type RestaurantCardProps = {
  id: number;
  imageUrl: string;
  title: string;
  rating: number;
};

export function RestaurantCardSkeleton() {
  return (
    <div className="w-full max-w-[370px] mx-auto overflow-hidden bg-white shadow-md rounded-lg">
      {/* Image skeleton */}
      <div className="relative w-full h-44 sm:h-52 md:h-60 lg:h-64">
        <Skeleton className="h-full w-full" />
        
        {/* Heart Icon skeleton */}
        <div className="absolute top-3 right-3">
          <Skeleton className="h-7 w-7 rounded-full" />
        </div>
      </div>

      {/* Info section skeleton */}
      <div className="p-3">
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-32" /> {/* Title skeleton */}
          <Skeleton className="h-6 w-10 rounded-full" /> {/* Rating skeleton */}
        </div>
      </div>
    </div>
  );
}

export default function RestaurantCard({
  id,
  imageUrl,
  title,
  rating,
}: RestaurantCardProps) {

  const router = useRouter()

  return (
    <div className="w-full max-w-[370px] mx-auto overflow-hidden bg-white shadow-md rounded-lg" onClick={() => router.push(`/restaurant/${id}`)}>
      {/* Image section: parent controls size, image uses `fill` */}
      <div className="relative w-full h-44 sm:h-52 md:h-60 lg:h-64">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority={false}
        />

        {/* Heart Icon */}
        <div className="absolute top-3 right-3 p-1 rounded-full shadow bg-black/40">
          <Heart className="w-5 h-5 text-white" />
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

