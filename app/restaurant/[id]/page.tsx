'use client';
import { use, useState } from "react";
import Image from "next/image";
import MenuItemDrawer from "@/components/MenuItemDrawer";


export default function Restaurant(
  {
    params,
  }:
  {
    params: Promise<{ id: string }>
  }) 
  {


  const { id } = use(params);
  const [open, setOpen] = useState(false);

  return (
    <main className="flex flex-col min-h-screen bg-white">

      <div className="relative w-full h-48">
        {/* Banner */}
        <Image
          src="/landing.png"
          alt="Doctor Saucy"
          fill
          className="object-cover"
        />

        {/* Profile Image in circle, bottom center of banner */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[34px] w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg z-2">
          <Image
            src="/doctorsaucy.jpg"
            alt="Restaurant Logo"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Name + tagline below the banner */}
      <div className="pt-16 pb-6 text-center text-black bg-white rounded-t-2xl shadow-[0_-10px_10px_rgba(0,0,0,0.2)] -mt-5 z-1">
        <h1 className="text-3xl font-bold">Doctor Saucy</h1>
      </div>


      <nav className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <ul className="flex px-6 py-2 space-x-6 overflow-auto">
          <li><a href="#BBQ" className="hover:text-blue-500">BBQ</a></li>
          <li><a href="#Continental" className="hover:text-blue-500">Continental</a></li>
          <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
          <li><a href="/" className="hover:text-blue-500">Home</a></li>
          <li><a href="/about" className="hover:text-blue-500">About</a></li>
          <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>

      <MenuItemDrawer open={open} setOpen={setOpen} />

      <section id="BBQ" className="flex flex-col p-6 gap-4 scroll-mt-10">

        <h1 className="text-xl font-semibold">Bar B Q</h1>

        <div className="flex gap-2 items-start justify-between">
          <div className="flex flex-col gap-1" onClick={() => setOpen(true)}>

            <p className="font-semibold">Malai Boti</p>
            <p className="text-xs text-blue-600 font-semibold">Rs. 340/-</p>
            <p className="text-xs text-gray-600">Tender chicken pieces marinated in creamy spices.</p>
          
          </div>

          <div className="relative w-24 h-24 shrink-0">
            <Image
              src="/landing.png"
              alt="Doctor Saucy"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex gap-2 items-start justify-between">
          <div className="flex flex-col gap-1">

            <p className="font-semibold">Malai Boti</p>
            <p className="text-xs text-blue-600 font-semibold">Rs. 340/-</p>
            <p className="text-xs text-gray-600">Tender chicken pieces marinated in creamy spices.</p>
          
          </div>

          <div className="relative w-24 h-24 shrink-0">
            <Image
              src="/landing.png"
              alt="Doctor Saucy"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex gap-2 items-start justify-between">
          <div className="flex flex-col gap-1">

            <p className="font-semibold">Malai Boti</p>
            <p className="text-xs text-blue-600 font-semibold">Rs. 340/-</p>
            <p className="text-xs text-gray-600">Tender chicken pieces marinated in creamy spices.</p>
          
          </div>

          <div className="relative w-24 h-24 shrink-0">
            <Image
              src="/landing.png"
              alt="Doctor Saucy"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex gap-2 items-start justify-between">
          <div className="flex flex-col gap-1">

            <p className="font-semibold">Malai Boti</p>
            <p className="text-xs text-blue-600 font-semibold">Rs. 340/-</p>
            <p className="text-xs text-gray-600">Tender chicken pieces marinated in creamy spices.</p>
          
          </div>

          <div className="relative w-24 h-24 shrink-0">
            <Image
              src="/landing.png"
              alt="Doctor Saucy"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </section>

      <section id="Continental" className="flex flex-col p-6 gap-4 scroll-mt-10">

        <h1 className="text-xl font-semibold">Continental</h1>

        <div className="flex gap-2 items-start justify-between">
          <div className="flex flex-col gap-1">

            <p className="font-semibold">Malai Boti</p>
            <p className="text-xs text-blue-600 font-semibold">Rs. 340/-</p>
            <p className="text-xs text-gray-600">Tender chicken pieces marinated in creamy spices.</p>
          
          </div>

          <div className="relative w-24 h-24 shrink-0">
            <Image
              src="/landing.png"
              alt="Doctor Saucy"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex gap-2 items-start justify-between">
          <div className="flex flex-col gap-1">

            <p className="font-semibold">Malai Boti</p>
            <p className="text-xs text-blue-600 font-semibold">Rs. 340/-</p>
            <p className="text-xs text-gray-600">Tender chicken pieces marinated in creamy spices.</p>
          
          </div>

          <div className="relative w-24 h-24 shrink-0">
            <Image
              src="/landing.png"
              alt="Doctor Saucy"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex gap-2 items-start justify-between">
          <div className="flex flex-col gap-1">

            <p className="font-semibold">Malai Boti</p>
            <p className="text-xs text-blue-600 font-semibold">Rs. 340/-</p>
            <p className="text-xs text-gray-600">Tender chicken pieces marinated in creamy spices.</p>
          
          </div>

          <div className="relative w-24 h-24 shrink-0">
            <Image
              src="/landing.png"
              alt="Doctor Saucy"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex gap-2 items-start justify-between">
          <div className="flex flex-col gap-1">

            <p className="font-semibold">Malai Boti</p>
            <p className="text-xs text-blue-600 font-semibold">Rs. 340/-</p>
            <p className="text-xs text-gray-600">Tender chicken pieces marinated in creamy spices.</p>
          
          </div>

          <div className="relative w-24 h-24 shrink-0">
            <Image
              src="/landing.png"
              alt="Doctor Saucy"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </section>

      <section id="BBQ" className="flex flex-col p-6 gap-4 scroll-mt-10">

        <h1 className="text-xl font-semibold">Bar B Q</h1>

        <div className="flex gap-2 items-start justify-between">
          <div className="flex flex-col gap-1">

            <p className="font-semibold">Malai Boti</p>
            <p className="text-xs text-blue-600 font-semibold">Rs. 340/-</p>
            <p className="text-xs text-gray-600">Tender chicken pieces marinated in creamy spices.</p>
          
          </div>

          <div className="relative w-24 h-24 shrink-0">
            <Image
              src="/landing.png"
              alt="Doctor Saucy"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex gap-2 items-start justify-between">
          <div className="flex flex-col gap-1">

            <p className="font-semibold">Malai Boti</p>
            <p className="text-xs text-blue-600 font-semibold">Rs. 340/-</p>
            <p className="text-xs text-gray-600">Tender chicken pieces marinated in creamy spices.</p>
          
          </div>

          <div className="relative w-24 h-24 shrink-0">
            <Image
              src="/landing.png"
              alt="Doctor Saucy"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex gap-2 items-start justify-between">
          <div className="flex flex-col gap-1">

            <p className="font-semibold">Malai Boti</p>
            <p className="text-xs text-blue-600 font-semibold">Rs. 340/-</p>
            <p className="text-xs text-gray-600">Tender chicken pieces marinated in creamy spices.</p>
          
          </div>

          <div className="relative w-24 h-24 shrink-0">
            <Image
              src="/landing.png"
              alt="Doctor Saucy"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex gap-2 items-start justify-between">
          <div className="flex flex-col gap-1">

            <p className="font-semibold">Malai Boti</p>
            <p className="text-xs text-blue-600 font-semibold">Rs. 340/-</p>
            <p className="text-xs text-gray-600">Tender chicken pieces marinated in creamy spices.</p>
          
          </div>

          <div className="relative w-24 h-24 shrink-0">
            <Image
              src="/landing.png"
              alt="Doctor Saucy"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </section>
      
    </main>
  )
}

