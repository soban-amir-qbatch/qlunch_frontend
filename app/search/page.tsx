'use client'
import React, { useState, useEffect } from "react";
import { Search as SearchIcon } from "lucide-react";
import RestaurantCard, { RestaurantCardSkeleton } from "@/components/RestaurantCard";

interface Restaurant {
  id: number;
  name: string;
  image_url: string;
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500); // Wait for 500ms after last keystroke before searching

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch restaurants based on search query
  useEffect(() => {
    const fetchRestaurants = async () => {
      if (!debouncedQuery) {
        setRestaurants(null);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/restaurants/?name=${debouncedQuery}`,
          {
            cache: 'no-store' // Don't cache search results
          }
        );
        const data = await response.json();
        setRestaurants(data.results);
      } catch (error) {
        console.error("Error searching restaurants:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurants();
  }, [debouncedQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-white p-4">
      {/* Search Input */}
      <div className="sticky top-0 bg-white pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <SearchIcon 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
            size={20}
          />
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 space-y-4">
        {isLoading ? (
          // Show skeletons while loading
          Array.from({ length: 3 }).map((_, index) => (
            <RestaurantCardSkeleton key={index} />
          ))
        ) : restaurants === null ? (
          // Initial state or empty query
          <div className="text-center text-gray-500 mt-8">
            Search for restaurants...
          </div>
        ) : restaurants.length === 0 ? (
          // No results found
          <div className="text-center text-gray-500 mt-8">
            No restaurants found
          </div>
        ) : (
          // Results list
          restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              imageUrl={restaurant.image_url}
              title={restaurant.name}
              rating={4.8}
            />
          ))
        )}
      </div>
    </div>
  );
}
