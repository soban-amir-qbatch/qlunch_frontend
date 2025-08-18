"use client";
import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

export default function MenuItemDrawer({open, setOpen}: {open: boolean, setOpen: (open: boolean) => void}) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Add your cart logic here
    console.log(`Adding ${quantity} items to cart`);
  };

  return (
    <>
      
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Bottom Drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 h-[70%] bg-white rounded-t-2xl shadow-lg z-50 
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-y-0" : "translate-y-full"} overflow-hidden`}
      >
        {/* Handle */}
      
        {/* Drawer Content */}
        <div className="overflow-auto h-full">
          <div className="relative w-full h-48">
            {/* Banner */}
            <Image
              src="/landing.png"
              alt="Doctor Saucy"
              fill
              className="object-cover"
            />    

            <button onClick={() => setOpen(false)} className="absolute top-2 right-2 text-blue-500">
            <X />
          </button>

          </div>

          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Burger</h2>
            <p className="text-xs text-blue-600 font-semibold mt-2">
              Rs. 340/-
            </p> 
            <p className="text-sm text-gray-600 mt-2">
              A delicious burger with a juicy patty, fresh lettuce, and a special sauce.
            </p>

            {/* Quantity Selector */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-sm font-medium">Quantity:</span>
              <div className="flex items-center gap-3 border rounded-lg overflow-hidden">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Add to Cart Button - Fixed at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white">
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-900 transition-colors"
            >
              Add to Cart - Rs. {340 * quantity}/-
            </button>
          </div>

          {/* Add padding bottom to account for fixed button */}
          <div className="pb-20" />
        </div>
      </div>
    </>
  );
}
