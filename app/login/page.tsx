'use client';
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react";

export default function Login() {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleContinueClick = () => {
    // Handle login logic here
    console.log("Password submitted:", password);
  };

  return (
    <main className="flex flex-col h-screen bg-white">
          
          {/* Content */}
          <div className="flex flex-col h-full justify-between p-6 gap-4 mt-16">
            {/* Heading */}
            <div className="flex flex-col gap-2">
              <p className="text-2xl">
                Welcome back, Soban
              </p>
      
              {/* Email Input */}
              <div className="flex border border-gray-200 bg-gray-100 overflow-hidden">
                <input
                  type="password"
                  placeholder="Please enter your password"
                  className="flex-1 px-3 py-4 focus:outline-none"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>

              <button className="bg-gray-200 text-black text-xs py-2 px-2 w-fit rounded-4xl mt-4">
                I've forgotten my password
              </button>
            </div >
    
            {/* Continue Button */}

           <div className='flex justify-between'>

              <button className="bg-gray-200 text-black py-4 px-4 rounded-4xl"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-6 h-6" />
              </button>

              <button className={`flex gap-2 bg-black text-white py-4 px-6 rounded-4xl disabled:opacity-50 transition-all duration-500 ease-in-out ${password.trim().length ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={handleContinueClick} disabled={!password.trim().length}
              >
                Continue 
                <ArrowRight className="w-6 h-6" />
              </button>

           </div>
    
          </div>
        </main>
  )
}
