'use client';
import { useState } from 'react';
import Image from 'next/image';

interface ImageUploadProps {
  onFileSelect: (file: File) => void;
  className?: string;
  currentImage?: string;
}

export function ImageUpload({ onFileSelect, className = '', currentImage }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(currentImage || null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Pass the file to parent component
    onFileSelect(file);
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
        id="image-upload"
      />
      <label
        htmlFor="image-upload"
        className="cursor-pointer block"
      >
        {preview ? (
          <div className="relative aspect-square w-full">
            <Image
              src={preview}
              alt="Upload preview"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg aspect-square w-full hover:border-gray-400 transition-colors">
            <div className="text-center">
              <div className="mt-2 text-sm text-gray-600">
                Click to upload
              </div>
            </div>
          </div>
        )}
      </label>
    </div>
  );
}
