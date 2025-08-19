'use client';
import { use, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuItemDrawer from "@/components/MenuItemDrawer";
import { Skeleton } from "@/components/ui/skeleton";

interface Restaurant {
  id: string;
  name: string;
  description: string;
  logo_url: string | null;
  image_url: string;
  enabled: boolean;
  address: string;
  created_at: string;
  updated_at: string;
}

export default function Restaurant(
  {
    params,
  }: {
    params: Promise<{ id: string }>
  }) 
  {
  const { id } = use(params);
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants/${id}/`);
        if (!response.ok) {
          throw new Error('Restaurant not found');
        }
        const data = await response.json();
        setRestaurant(data);
      } catch (error) {
        console.error('Error fetching restaurant:', error);
        router.push('/home');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurant();
  }, [id, router]);

  if (isLoading) {
      return (
        <div className="flex flex-col min-h-[calc(100dvh-64px)] bg-white">
          <div className="relative w-full h-48">
            <Skeleton className="absolute inset-0 w-full h-full" />
          </div>
          <div className="flex-1 p-6 pt-12">
            <Skeleton className="h-6 w-2/3 rounded mb-4 mx-auto" />
            <Skeleton className="h-4 w-full rounded mb-2" />
            <Skeleton className="h-4 w-5/6 rounded" />
          </div>
        </div>
      );
  }

  if (!restaurant) {
    return null;
  }

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <div className="relative w-full h-48">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 z-10 p-2 bg-white rounded-full shadow-md"
        >
          <ArrowLeft size={24} />
        </button>

        {/* Banner */}
        <Image
          src={restaurant.image_url}
          alt={restaurant.name}
          fill
          className="object-cover"
          priority
        />

        {/* Profile Image in circle, bottom center of banner */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[34px] w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg z-2">
          <Image
            src={restaurant.logo_url || restaurant.image_url}
            alt={`${restaurant.name} Logo`}
            fill
            className="object-cover"
            priority={true}
            />
        </div>
      </div>

      {/* Restaurant details below the banner */}
      <div className="pt-16 pb-6 text-center text-black bg-white rounded-t-2xl shadow-[0_-10px_10px_rgba(0,0,0,0.2)] -mt-5 z-1">

        <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
        
        <p className="text-gray-600 text-sm px-6 mb-4">{restaurant.description}</p>

        <div className="flex items-start text-center px-6  text-gray-500 text-sm">
          <MapPin size={20} className="mr-1" />
          <span>{restaurant.address}</span>

        </div>
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

