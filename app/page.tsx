// app/page.tsx (Next.js App Router)
"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isTyping, setIsTyping] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsTyping(value.length > 0);
  };

  return (
    <main className="flex flex-col h-screen bg-white">
      {/* Image section */}
      <div className={`relative w-full transition-all duration-500 ease-in-out ${isTyping ? 'h-0 opacity-0' : 'h-3/5 opacity-100'}`}>
        <Image
          src="/landing.png"
          alt="Uber Eats Food"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className={`flex flex-col p-6 gap-4 transition-all duration-500 ease-in-out ${isTyping ? 'mt-16' : ''}`}>
        {/* Heading */}
        <p className="text-2xl">
          {isTyping ? "Enter your email" : "Use your Qbatch email to get started"}
        </p>

        {/* Email Input */}
        <div className="flex border border-gray-200 bg-gray-100 overflow-hidden">
          <input
            type="email"
            placeholder="name@qbatch.com"
            className="flex-1 px-3 py-4 focus:outline-none"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        {/* Continue Button */}
        <button
          className={`bg-black text-white py-4 px-6 transition-all duration-500 ease-in-out ${
            isTyping ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          Continue
        </button>

      </div>
    </main>
  );
}
