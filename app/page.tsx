// app/page.tsx (Next.js App Router)
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-white">
      {/* Image section */}
      <div className="relative w-full h-3/5">
        <Image
          src="/landing.png" // Place your screenshot or food collage in /public
          alt="Uber Eats Food"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-6 gap-4">

        {/* Heading */}
        <p className="text-2xl ">
          Use your Qbatch email to get started
        </p>

        {/* Phone Input */}
        <div className="flex border border-gray-200 bg-gray-100 overflow-hidden">
          
          {/* Phone number */}
          <input
            type="email"
            placeholder="name@qbatch.com"
            className="flex-1 px-3 py-4 focus:outline-none"
          />
        </div>
      </div>
    </main>
  );
}
