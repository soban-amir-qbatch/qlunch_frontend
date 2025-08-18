import Image from "next/image";

type CategoryBoxProps = {
  imageUrl: string;
  title: string;
  alt: string;
  isLarge?: boolean;
};
export default function CategoryBox({
  imageUrl,
  title,
  alt,
  isLarge = false,
}: CategoryBoxProps) {
  if (isLarge) {
    return (
      <div className="bg-gray-200 w-full h-full rounded-xl relative p-4">
        <div className="absolute top-0 right-0 p-2">
          <div className="w-12 h-12 relative">
            <Image
              src={imageUrl}
              alt={alt}
              fill
              className="object-contain"
              priority={false}
            />
          </div>
        </div>
        <div className="absolute bottom-3 left-4">
          <h3 className="text-base font-bold text-gray-900">
            {title}
          </h3>
        </div>
      </div>
    );
  }
  return (
    <div className="inline-flex flex-col items-center bg-white p-1 hover:shadow-md transition-shadow duration-200 w-full h-full">
      <div className="relative w-full aspect-square mb-3 rounded-xl bg-gray-200 flex items-center justify-center overflow-hidden">
        <div className="w-3/5 h-3/5 relative">
          <Image
            src={imageUrl}
            alt={alt}
            fill
            className="object-contain"
            priority={false}
          />
        </div>
      </div>
      {/* Title */}
      <h3 className="text-[10px] font-bold text-gray-900 text-center">
        {title}
      </h3>
    </div>
  );
}
