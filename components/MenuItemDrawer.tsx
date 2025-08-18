"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function MenuItemDrawer({open, setOpen}: {open: boolean, setOpen: (open: boolean) => void}) {


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
        ${open ? "translate-y-0" : "translate-y-full"}`}
      >
        {/* Handle */}
        <div className="p-4 flex justify-end items-center border-b">
          <button onClick={() => setOpen(false)} className="ml-auto">
            <X />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-6 overflow-y-auto h-full">
          <h2 className="text-xl font-semibold mb-4">Drawer Content</h2>
          <p className="text-gray-600 mb-6">
            This is a scroll-up drawer. You can put your restaurant menu here!
          </p>

          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="p-4 mb-3 border rounded-lg shadow-sm bg-gray-50"
            >
              Menu Item {i + 1}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
