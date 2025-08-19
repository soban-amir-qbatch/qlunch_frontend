'use client';
import { useState } from 'react';
import { Plus, Search, Filter, MoreVertical, Edit, Trash2, Eye, Power, PowerOff } from 'lucide-react';
import Image from 'next/image';

type Restaurant = {
  id: string;
  name: string;
  image: string;
  category: string;
  rating: number;
  totalOrders: number;
  revenue: number;
  status: 'open' | 'closed';
  address: string;
  phone: string;
};

type FilterPeriod = 'day' | 'month' | 'quarter' | 'year';

export default function RestaurantManagement() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([
    {
      id: '1',
      name: 'Doctor Saucy',
      image: '/doctorsaucy.jpg',
      category: 'BBQ',
      rating: 4.5,
      totalOrders: 145,
      revenue: 45230,
      status: 'open',
      address: '123 Main St, London',
      phone: '+44 123 456 7890'
    },
    {
      id: '2',
      name: 'Adenine Kitchen',
      image: '/assets/images/image.png',
      category: 'Continental',
      rating: 4.4,
      totalOrders: 98,
      revenue: 32150,
      status: 'open',
      address: '456 Oak Ave, London',
      phone: '+44 987 654 3210'
    },
    {
      id: '3',
      name: 'Cardinal Chips',
      image: '/assets/images/image.png',
      category: 'Fast Food',
      rating: 4.3,
      totalOrders: 76,
      revenue: 18900,
      status: 'closed',
      address: '789 Pine Rd, London',
      phone: '+44 555 123 4567'
    }
  ]);

  const [filterPeriod, setFilterPeriod] = useState<FilterPeriod>('month');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    restaurant.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleRestaurantStatus = (id: string) => {
    setRestaurants(prev => prev.map(restaurant => 
      restaurant.id === id 
        ? { ...restaurant, status: restaurant.status === 'open' ? 'closed' : 'open' }
        : restaurant
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Restaurant Management</h2>
          <p className="text-gray-600">Manage restaurants and their status</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Restaurant
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search restaurants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-600" />
            <select
              value={filterPeriod}
              onChange={(e) => setFilterPeriod(e.target.value as FilterPeriod)}
              className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            >
              <option value="day">Today</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="relative h-48">
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => toggleRestaurantStatus(restaurant.id)}
                  className={`p-2 rounded-full ${
                    restaurant.status === 'open' 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-red-500 hover:bg-red-600'
                  } text-white transition-colors`}
                  title={restaurant.status === 'open' ? 'Close Restaurant' : 'Open Restaurant'}
                >
                  {restaurant.status === 'open' ? (
                    <Power className="w-4 h-4" />
                  ) : (
                    <PowerOff className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{restaurant.name}</h3>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  restaurant.status === 'open' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {restaurant.status}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-2">{restaurant.category}</p>
              <p className="text-sm text-gray-600 mb-3">{restaurant.address}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500">Rating</p>
                  <p className="font-semibold">{restaurant.rating}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Orders</p>
                  <p className="font-semibold">{restaurant.totalOrders}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-gray-500">Revenue</p>
                  <p className="font-semibold text-green-600">Rs. {restaurant.revenue.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-1">
                  <Eye className="w-4 h-4" />
                  View
                </button>
                <button className="flex-1 px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-1">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Restaurant Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">Add New Restaurant</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Restaurant Name"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Category"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <textarea
                placeholder="Address"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                rows={3}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="file"
                accept="image/*"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                Add Restaurant
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}