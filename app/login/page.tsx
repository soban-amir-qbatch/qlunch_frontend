'use client';
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define the form schema
const formSchema = z.object({
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

// Infer TypeScript type from schema
type FormData = z.infer<typeof formSchema>;

export default function Login() {
  const { 
    register, 
    handleSubmit,
    formState: { errors, isValid },
    watch 
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const password = watch("password");

  const onSubmit = (data: FormData) => {
    console.log("Password submitted:", data.password);
  };

  return (
    <main className="flex flex-col h-screen bg-white">
      <div className="flex flex-col h-full justify-between p-6 gap-4 mt-16">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <p className="text-2xl">
            {/* TODO: Add dynamic name */}
            Welcome back, Soban
          </p>
    
          <div className="flex flex-col gap-1">
            <div className="flex border border-gray-200 bg-gray-100 overflow-hidden">
              <input
                type="password"
                placeholder="Please enter your password"
                className="flex-1 px-3 py-4 focus:outline-none"
                {...register("password")}
              />
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password.message}</span>
            )}
          </div>

          <button type="button" className="bg-gray-200 text-black text-xs py-2 px-2 w-fit rounded-4xl mt-4">
            I've forgotten my password
          </button>
        </form>

        <div className='flex justify-between'>
          <button 
            type="button"
            className="bg-gray-200 text-black py-4 px-4 rounded-4xl"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button 
            type="submit"
            className={`flex gap-2 bg-black text-white py-4 px-6 rounded-4xl disabled:opacity-50 transition-all duration-500 ease-in-out ${password?.length ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            disabled={!isValid}
          >
            Continue 
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </main>
  );
}
