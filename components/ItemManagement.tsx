'use client';
import { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2, Eye } from 'lucide-react';
import Image from 'next/image';

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  restaurant: string;
  image: string;
  available: boolean;
  preparationTime: number;
};

export default function ItemManagement() {
  const [items, setItems] = useState<MenuItem[]>([
    {
      id: '1',
      name: 'Malai Boti',
      description: 'Tender chicken pieces marinated in creamy spices',
      price: 340,
      category: 'BBQ',
      restaurant: 'Doctor Saucy',
      image: '/landing.png',
      available: true,
      preparationTime: 25
    },
    {
      id: '2',
      name: 'Chicken Karahi',
      description: 'Traditional Pakistani chicken curry',
      price: 450,
      category: 'Main Course',
      restaurant: 'Doctor Saucy',
      image: '/landing.png',
      available: true,
      preparationTime: 30
    },
    {
      id: '3',
      name: 'Fish & Chips',
      description: 'Crispy battered fish with golden fries',
      price: 280,
      category: 'Fast Food',
      restaurant: 'Cardinal Chips',
      image: '/landing.png',
      available: false,
      preparationTime: 20
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [restaurantFilter, setRestaurantFilter] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const categories = ['BBQ', 'Main Course', 'Fast Food', 'Continental', 'Desserts'];
  const restaurants = ['Doctor Saucy', 'Cardinal Chips', 'Adenine Kitchen'];

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    const matchesRestaurant = restaurantFilter === 'all' || item.restaurant === restaurantFilter;
    return matchesSearch && matchesCategory && matchesRestaurant;
  });

  const toggleAvailability = (itemId: string) => {
    setItems(prev => prev.map(item => 
      item.id === itemId ? { ...item, available: !item.available } : item
    ));
  };

  const deleteItem = (itemId: string) => {
    setItems(prev => prev.filter(item => item.id !== itemId));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Item Management</h2>
          <p className="text-sm sm:text-base text-gray-600">Manage menu items across all restaurants</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="w-full sm:w-auto bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center sm:justify-start gap-2 hover:bg-gray-800 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Item
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="relative w-full sm:flex-1 sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full sm:w-40 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select
              value={restaurantFilter}
              onChange={(e) => setRestaurantFilter(e.target.value)}
              className="w-full sm:w-40 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            >
              <option value="all">All Restaurants</option>
              {restaurants.map(restaurant => (
                <option key={restaurant} value={restaurant}>{restaurant}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="relative h-40 sm:h-48">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => toggleAvailability(item.id)}
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.available 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {item.available ? 'Available' : 'Unavailable'}
                </button>
              </div>
            </div>
            
            <div className="p-3 sm:p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words flex-1 mr-2">{item.name}</h3>
                <span className="text-base sm:text-lg font-bold text-green-600 whitespace-nowrap">Rs. {item.price}</span>
              </div>
              
              <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
              
              <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                <span className="break-words flex-1 mr-2">{item.category}</span>
                <span className="whitespace-nowrap">{item.preparationTime} min</span>
              </div>
              
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 break-words">{item.restaurant}</p>
              
              <div className="flex gap-1 sm:gap-2">
                <button className="flex-1 px-2 sm:px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-1 text-xs sm:text-sm">
                  <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">View</span>
                </button>
                <button className="flex-1 px-2 sm:px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-1 text-xs sm:text-sm">
                  <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">Edit</span>
                </button>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="px-2 sm:px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Item Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="text-base sm:text-lg font-semibold mb-4">Add New Item</h3>
            <div className="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder="Item Name"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <textarea
                placeholder="Description"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                rows={3}
              />
              <input
                type="number"
                placeholder="Price (Rs.)"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                <option value="">Select Restaurant</option>
                {restaurants.map(restaurant => (
                  <option key={restaurant} value={restaurant}>{restaurant}</option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Preparation Time (minutes)"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="file"
                accept="image/*"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="flex items-center gap-2">
                <input type="checkbox" id="available" className="rounded" />
                <label htmlFor="available" className="text-sm text-gray-700">Available</label>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                Add Item
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}