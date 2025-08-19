'use client'
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CategoryBox from "@/components/CategoryBox";
import RestaurantCard from "@/components/RestaurantCard";
import CategoriesScreen from "@/components/CategoriesScreen";

export default function HomePage() {
  const [showCategories, setShowCategories] = useState(false);
  
  interface Restaurant {
    id: number;
    name: string;
    image_url: string;
  }
  
  const [Restaurants, setRestaurants] = useState<Restaurant[] | null>(null);

  useEffect(() => {
    // Fetch restaurants data from API or static file
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants/`); // Adjust the endpoint as needed
        const data = await response.json();
        setRestaurants(data.results);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  
    
  }, [])

  if(Restaurants === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Loading restaurants...</p> 
      </div>
    );
  }
  
  return (
    <div className="relative min-h-screen">
      {/* Background (always rendered, blurred if modal open) */}
      <div className={`transition-all duration-300 ${showCategories ? "blur-sm" : ""}`}>
        <div className="flex flex-col h-screen p-6 bg-white">
          <h1 className="text-xl mb-4 text-center font-bold">Now - Qbatch</h1>
          {/* Categories Section */}
          <div className="space-y-1 mb-6">
            {/* First row → 2 items */}
            <div className="grid grid-cols-2 gap-1">
              <div onClick={() => setShowCategories(true)} className="cursor-pointer h-24">
                <CategoryBox imageUrl="/assets/images/icon.png" title="American" alt="American" isLarge={true} />
              </div>
              <div onClick={() => setShowCategories(true)} className="cursor-pointer h-24">
                <CategoryBox imageUrl="/assets/images/icon.png" title="Grocery" alt="Grocery" isLarge={true} />
              </div>
            </div>
            {/* Second row → 4 items */}
            <div className="grid grid-cols-4 gap-2">
              <div onClick={() => console.log("clicked")} className="cursor-pointer">
                <CategoryBox imageUrl="/assets/images/icon.png" title="Convenience" alt="Convenience" />
              </div>
              <div onClick={() => console.log("clicked")} className="cursor-pointer">
                <CategoryBox imageUrl="/assets/images/icon.png" title="Alcohol" alt="Alcohol" />
              </div>
              <div onClick={() => console.log("clicked")} className="cursor-pointer">
                <CategoryBox imageUrl="/assets/images/icon.png" title="Pet Supplies" alt="Pet Supplies" />
              </div>
              <div onClick={() => setShowCategories(true)} className="cursor-pointer">
                <CategoryBox imageUrl="/assets/images/MoreIcon.png" title="More" alt="More" />
              </div>
            </div>
          </div>
          {/* Restaurants Section */}
          <div className="flex-1 overflow-auto min-h-0">
            <div className="flex flex-col gap-2">
              {Restaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  imageUrl={restaurant.image_url}
                  title={restaurant.name}
                  rating={4.8}
                />))
              }
            </div>
          </div>
        </div>
      </div>
      {/* Categories Modal */}
      {/* <AnimatePresence>
        {showCategories && (
          <motion.div
            key="categories"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 z-50 flex items-center justify-center"
          >
            <div className="bg-white w-full max-w-4xl shadow-lg p-6">
              <CategoriesScreen goBack={() => setShowCategories(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
      {/* Categories Modal — bottom aligned */}
      <AnimatePresence>
        {showCategories && (
          <motion.div
            key="categories"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            // items-end aligns children to the bottom of the screen
            // pb-6 gives a nice 1.5rem gap from the viewport bottom (remove if you want flush)
            className="absolute inset-0 z-50 flex items-end justify-center pb-6"
            onClick={() => setShowCategories(false)}
          >
            {/* stopPropagation keeps clicks inside modal from closing */}
            <div
              className="bg-white w-full max-w-4xl shadow-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <CategoriesScreen goBack={() => setShowCategories(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
