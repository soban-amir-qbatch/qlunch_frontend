'use client';
import { ArrowLeft, ArrowRight, Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useRef } from "react";
import Image from "next/image";
import { ImageUpload } from "@/components/ImageUpload";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const registerSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),
  email: z.email("Please enter a valid email"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegisterForm = z.infer<typeof registerSchema>;

export default function Register() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { 
    register, 
    handleSubmit,
    formState: { errors, isValid },
    watch 
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    mode: "onChange"
  });

  const handleFileSelect = (file: File) => {
    if (file.size > MAX_FILE_SIZE) {
      alert("File size must be less than 5MB");
      return;
    }
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      alert("File must be an image (JPEG, PNG, or WebP)");
      return;
    }
    setSelectedFile(file);
  };

  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const data = await response.json();
    return data.url;
  };

  const onSubmit = async (data: RegisterForm) => {
    try {
      setIsSubmitting(true);
      let profileImageUrl = null;

      if (selectedFile) {
        profileImageUrl = await uploadImage(selectedFile);
      }

      const response = await fetch("/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          ...data,
          profile_image: profileImageUrl 
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      // Redirect to login
      window.location.href = "/login?email=" + encodeURIComponent(data.email);
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <main className="flex flex-col h-full bg-white p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 h-full">
        <h1 className="text-2xl font-semibold">Create your account</h1>

        {/* Profile Picture Upload */}
        {/* <div className="flex flex-col items-center gap-4">
          <div 
            className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
            onClick={triggerFileInput}
          >
            {profilePic ? (
              <Image src={profilePic} alt="Profile" fill className="object-cover" />
            ) : (
              <Upload className="w-8 h-8 text-gray-400" />
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="profilePic"
          />
          <label
            htmlFor="profilePic"
            className="cursor-pointer text-sm text-gray-600 hover:text-gray-800"
          >
            {profilePic ? 'Change photo' : 'Upload photo'}
          </label>
        </div> */}

        <ImageUpload 
          onFileSelect={handleFileSelect}
          className="w-32 mx-auto"
        />

        {/* Name Input */}
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="Full name"
            className="px-3 py-4 border border-gray-200 bg-gray-100 focus:outline-none"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-1">
          <input
            type="email"
            placeholder="Email address"
            className="px-3 py-4 border border-gray-200 bg-gray-100 focus:outline-none"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Password Input */}
        <div className="flex flex-col gap-1">
          <input
            type="password"
            placeholder="Password"
            className="px-3 py-4 border border-gray-200 bg-gray-100 focus:outline-none"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password.message}</span>
          )}
        </div>

        {/* Confirm Password Input */}
        <div className="flex flex-col gap-1">
          <input
            type="password"
            placeholder="Confirm password"
            className="px-3 py-4 border border-gray-200 bg-gray-100 focus:outline-none"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-auto pb-16">
          <button
            type="button"
            className="bg-gray-200 text-black py-4 px-4 rounded-full"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            type="submit"
            className={`flex gap-2 bg-black text-white py-4 px-6 rounded-full disabled:opacity-50 transition-all duration-500 ease-in-out ${isValid ? 'opacity-100' : 'opacity-50'}`}
            disabled={!isValid || isSubmitting}
          >
            Continue
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

      </form>
    </main>
  );
}
