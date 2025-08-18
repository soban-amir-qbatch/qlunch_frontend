// import Image from "next/image";


// type CategoryBoxProps = {
//   imageUrl: string;
//   title: string;
//   alt: string
// };

// export default function CategoryBox({
//   imageUrl,
//   title,
//   alt
// }: CategoryBoxProps) {
//   return (
//     <div className="inline-flex flex-col items-center bg-white p-1 hover:shadow-md transition-shadow duration-200">
//       {/* Icon/Image Container */}
//       <div className="relative w-20 h-20 mb-3 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden">
//         <Image
//           src={imageUrl}
//           alt={alt}
//           width={48}
//           height={48}
//           className="object-contain"
//           priority={false}
//         />
//       </div>
      
//       {/* Title */}
//       <h3 className="text-[8px] font-semibold text-gray-900 text-center">
//         {title}
//       </h3>
//     </div>
//   )

// }









import Image from "next/image";

type CategoryBoxProps = {
  imageUrl: string;
  title: string;
  alt: string;
};

export default function CategoryBox({
  imageUrl,
  title,
  alt,
}: CategoryBoxProps) {
  return (
    <div className="inline-flex flex-col items-center bg-white p-1 hover:shadow-md transition-shadow duration-200">
      {/* Icon/Image Container */}
      <div className="relative w-20 h-20 mb-3 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden">
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="object-contain"
          priority={false}
        />
      </div>

      {/* Title */}
      <h3 className="text-[8px] font-semibold text-gray-900 text-center">
        {title}
      </h3>
    </div>
  );
}
