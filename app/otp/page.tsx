"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect, useRef } from "react";

const otpSchema = z.object({
  otp: z.string()
    .min(4, "OTP must be 4 digits")
    .max(4, "OTP must be 4 digits")
    .regex(/^[0-9]+$/, "OTP must contain only numbers")
});

type OtpForm = z.infer<typeof otpSchema>;

export default function Otp() {
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds timer
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch
  } = useForm<OtpForm>({
    resolver: zodResolver(otpSchema),
    mode: "onChange"
  });

  const otp = watch("otp");

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleResend = () => {
    // Add your resend OTP logic here
    setTimeLeft(30); // Reset timer
  };

  const onSubmit = (data: OtpForm) => {
    console.log("OTP submitted:", data.otp);
    // Add your verification logic here
  };

  return (
    <main className="flex flex-col h-full bg-white p-6">
      <div className="flex flex-col h-full justify-between gap-4 mt-16">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* TODO: make the email dynamic */}
          <p className="text-xl">Enter the 4-digit code sent to you at: soban.amir@qbatch.com</p>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              {[0, 1, 2, 3].map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  pattern="[0-9]"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  className="w-14 h-14 text-center text-2xl font-semibold border border-gray-200 bg-gray-100 focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                  onKeyDown={(e) => {
                    // Handle backspace
                    if (e.key === "Backspace") {
                      const inputs = Array.from(document.querySelectorAll('input[type="text"]')) as HTMLInputElement[];
                      const currentIndex = inputs.indexOf(e.target as HTMLInputElement);
                      if (currentIndex > 0 && !(e.target as HTMLInputElement).value) {
                        inputs[currentIndex - 1].focus();
                      }
                    }
                  }}
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    const value = target.value.replace(/[^0-9]/g, '');
                    target.value = value;
                    
                    if (value) {
                      const inputs = Array.from(document.querySelectorAll('input[type="text"]')) as HTMLInputElement[];
                      const currentIndex = inputs.indexOf(target);
                      const combinedValue = inputs.map(input => input.value).join('');
                      
                      if (currentIndex < inputs.length - 1) {
                        inputs[currentIndex + 1].focus();
                      }
                      
                      // Update the form value
                      register("otp").onChange({
                        target: {
                          value: combinedValue,
                          name: "otp"
                        }
                      });
                    }
                  }}
                  onPaste={(e) => {
                    e.preventDefault();
                    const pastedData = e.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, 4);
                    const inputs = Array.from(document.querySelectorAll('input[type="text"]')) as HTMLInputElement[];
                    
                    pastedData.split('').forEach((char, index) => {
                      if (inputs[index]) {
                        inputs[index].value = char;
                      }
                    });
                    
                    // Update form value
                    register("otp").onChange({
                      target: {
                        value: pastedData,
                        name: "otp"
                      }
                    });
                    
                    // Focus last filled input or next empty input
                    const lastIndex = Math.min(pastedData.length, inputs.length) - 1;
                    if (lastIndex >= 0) {
                      inputs[lastIndex].focus();
                    }
                  }}
                />
              ))}
            </div>
            {errors.otp && (
              <span className="text-red-500 text-sm">{errors.otp.message}</span>
            )}
          </div>

          {/* Resend OTP Section */}
          <div className="flex items-center gap-2 mt-2">
            <button
              type="button"
              onClick={handleResend}
              className={`text-sm ${timeLeft > 0 ? 'text-gray-400 cursor-not-allowed' : 'text-black hover:underline'} bg-gray-200 py-2 px-2 w-fit rounded-4xl`}
              disabled={timeLeft > 0}
            >
              Resend OTP
            </button>
            {timeLeft > 0 && (
              <span className="text-sm text-gray-400">
                ({timeLeft}s)
              </span>
            )}
          </div>
        </form>

        <div className="flex justify-between mt-auto pb-16">
          <button
            type="button"
            className="bg-gray-200 text-black py-4 px-4 rounded-full"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleSubmit(onSubmit)}
            className={`flex gap-2 bg-black text-white py-4 px-6 rounded-full disabled:opacity-50 transition-all duration-500 ease-in-out ${otp?.length === 4 ? 'opacity-100' : 'opacity-50'}`}
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
