'use client'
import { useState, useEffect } from 'react';
import { LogOut, Settings, ChevronRight, User as UserIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface UserProfile {
  name: string;
  email: string;
  profileImage?: string;
}

export default function AccountPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("/api/me/", {
          credentials: 'include'
        });
        console.log(response)
        if (!response.ok) {
          // If not authenticated, redirect to login
          //router.push('/login');
          return;
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        router.push('/login');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [router]);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: 'POST',
        // credentials: 'include'
      });

      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white p-6 flex flex-col">
        {/* Skeleton loading state */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-gray-200 animate-pulse" />
          <div className="h-6 w-32 bg-gray-200 rounded mt-4 animate-pulse" />
          <div className="h-4 w-48 bg-gray-200 rounded mt-2 animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col">
      {/* Profile Header */}
      <div className="flex flex-col items-center mb-8">
        {user?.profileImage ? (
          <Image
            src={user.profileImage}
            alt="Profile"
            width={96}
            height={96}
            className="rounded-full"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
            <UserIcon size={48} className="text-gray-400" />
          </div>
        )}
        <h1 className="text-xl font-semibold mt-4">{user?.name}</h1>
        <p className="text-gray-500">{user?.email}</p>
      </div>

      {/* Menu Items */}
      <div className="space-y-4">
        <button 
          onClick={() => router.push('/account/settings')}
          className="w-full flex items-center justify-between p-4 bg-white rounded-lg border hover:bg-gray-50"
        >
          <div className="flex items-center space-x-3">
            <Settings size={20} className="text-gray-500" />
            <span>Settings</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </button>

        <button 
          onClick={() => router.push('/account/orders')}
          className="w-full flex items-center justify-between p-4 bg-white rounded-lg border hover:bg-gray-50"
        >
          <div className="flex items-center space-x-3">
            <svg 
              className="w-5 h-5 text-gray-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <span>My Orders</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </button>

        <button 
          onClick={handleLogout}
          className="w-full flex items-center justify-between p-4 bg-white rounded-lg border hover:bg-gray-50 text-red-600"
        >
          <div className="flex items-center space-x-3">
            <LogOut size={20} />
            <span>Logout</span>
          </div>
        </button>
      </div>
    </div>
  );
}
