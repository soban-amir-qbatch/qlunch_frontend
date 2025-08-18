// app/page.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleContinueClick = () => {
    router.push("/login");
  };

  return (
    <main className="flex flex-col h-screen bg-white overflow-y-auto">
      {/* Image section */}
      <div className="relative w-full h-1/2">
        <Image
          src="/landing.png"
          alt="Uber Eats Food"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-6 gap-4">
        <p className="text-2xl">Use your Qbatch email to get started</p>

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
          className="bg-black text-white py-4 px-6"
          onClick={handleContinueClick}
        >
          Continue
        </button>
      </div>
    </main>
  );
}
