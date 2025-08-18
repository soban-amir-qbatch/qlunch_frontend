import React from "react";
import CategoryBox from "./CategoryBox";
const categories = [
  { title: "Convenience", imageUrl: "/assets/images/icon.png", alt: "Convenience" },
  { title: "Alcohol", imageUrl: "/assets/images/icon.png", alt: "Alcohol" },
  { title: "Pet Supplies", imageUrl: "/assets/images/icon.png", alt: "Pet Supplies" },
  { title: "More", imageUrl: "/assets/images/icon.png", alt: "More" },
  { title: "Bakery", imageUrl: "/assets/images/icon.png", alt: "Bakery" },
  { title: "Fruits", imageUrl: "/assets/images/icon.png", alt: "Fruits" },
  { title: "Vegetables", imageUrl: "/assets/images/icon.png", alt: "Vegetables" },
  { title: "Snacks", imageUrl: "/assets/images/icon.png", alt: "Snacks" },
  { title: "Drinks", imageUrl: "/assets/images/icon.png", alt: "Drinks" },
  { title: "Dairy", imageUrl: "/assets/images/icon.png", alt: "Dairy" },
  { title: "Meat", imageUrl: "/assets/images/icon.png", alt: "Meat" },
  { title: "Seafood", imageUrl: "/assets/images/icon.png", alt: "Seafood" },
  { title: "Frozen", imageUrl: "/assets/images/icon.png", alt: "Frozen" },
  { title: "Household", imageUrl: "/assets/images/icon.png", alt: "Household" },
  { title: "Personal Care", imageUrl: "/assets/images/icon.png", alt: "Personal Care" },
  { title: "Baby", imageUrl: "/assets/images/icon.png", alt: "Baby" },
  { title: "Cleaning", imageUrl: "/assets/images/icon.png", alt: "Cleaning" },
  { title: "Health", imageUrl: "/assets/images/icon.png", alt: "Health" },
  { title: "Electronics", imageUrl: "/assets/images/icon.png", alt: "Electronics" },
  { title: "Stationery", imageUrl: "/assets/images/icon.png", alt: "Stationery" },
];

export default function CategoriesScreen({ goBack }: { goBack: () => void }) {
  return (
    <div className="w-full h-[70vh] overflow-y-auto" onClick={goBack}>
      <div
        className="space-y-6"
        onClick={(e) => e.stopPropagation()} // prevent closing on inside click
      >
        {/* Sticky heading */}
        <h1 className="text-xl text-center sticky top-0 bg-white py-4 z-10">
          All Categories
        </h1>
        <div className="grid grid-cols-4 gap-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => console.log("Clicked:", cat.title)}
            >
              <CategoryBox imageUrl={cat.imageUrl} title={cat.title} alt={cat.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}