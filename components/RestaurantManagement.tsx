// 'use client';
// import { useState } from 'react';
// import { Plus, Search, Filter, MoreVertical, Edit, Trash2, Eye, Power, PowerOff } from 'lucide-react';
// import Image from 'next/image';

// type Restaurant = {
//   id: string;
//   name: string;
//   image: string;
//   category: string;
//   rating: number;
//   totalOrders: number;
//   revenue: number;
//   status: 'open' | 'closed';
//   address: string;
//   phone: string;
// };

// type FilterPeriod = 'day' | 'month' | 'quarter' | 'year';

// export default function RestaurantManagement() {
//   const [restaurants, setRestaurants] = useState<Restaurant[]>([
//     {
//       id: '1',
//       name: 'Doctor Saucy',
//       image: '/doctorsaucy.jpg',
//       category: 'BBQ',
//       rating: 4.5,
//       totalOrders: 145,
//       revenue: 45230,
//       status: 'open',
//       address: '123 Main St, London',
//       phone: '+44 123 456 7890'
//     },
//     {
//       id: '2',
//       name: 'Adenine Kitchen',
//       image: '/assets/images/image.png',
//       category: 'Continental',
//       rating: 4.4,
//       totalOrders: 98,
//       revenue: 32150,
//       status: 'open',
//       address: '456 Oak Ave, London',
//       phone: '+44 987 654 3210'
//     },
//     {
//       id: '3',
//       name: 'Cardinal Chips',
//       image: '/assets/images/image.png',
//       category: 'Fast Food',
//       rating: 4.3,
//       totalOrders: 76,
//       revenue: 18900,
//       status: 'closed',
//       address: '789 Pine Rd, London',
//       phone: '+44 555 123 4567'
//     }
//   ]);

//   const [filterPeriod, setFilterPeriod] = useState<FilterPeriod>('month');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showAddModal, setShowAddModal] = useState(false);

//   const filteredRestaurants = restaurants.filter(restaurant =>
//     restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     restaurant.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const toggleRestaurantStatus = (id: string) => {
//     setRestaurants(prev => prev.map(restaurant => 
//       restaurant.id === id 
//         ? { ...restaurant, status: restaurant.status === 'open' ? 'closed' : 'open' }
//         : restaurant
//     ));
//   };

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
//         <div>
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Restaurant Management</h2>
//           <p className="text-sm sm:text-base text-gray-600">Manage restaurants and their status</p>
//         </div>
//         <button
//           onClick={() => setShowAddModal(true)}
//           className="w-full sm:w-auto bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center sm:justify-start gap-2 hover:bg-gray-800 transition-colors"
//         >
//           <Plus className="w-4 h-4" />
//           Add Restaurant
//         </button>
//       </div>

//       {/* Filters */}
//       <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-200">
//         <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
//           <div className="relative w-full sm:flex-1 sm:max-w-md">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <input
//               type="text"
//               placeholder="Search restaurants..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
//             />
//           </div>
//           <div className="flex items-center gap-2 w-full sm:w-auto">
//             <Filter className="w-4 h-4 text-gray-600" />
//             <select
//               value={filterPeriod}
//               onChange={(e) => setFilterPeriod(e.target.value as FilterPeriod)}
//               className="w-full sm:w-auto border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
//             >
//               <option value="day">Today</option>
//               <option value="month">This Month</option>
//               <option value="quarter">This Quarter</option>
//               <option value="year">This Year</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Restaurant Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//         {filteredRestaurants.map((restaurant) => (
//           <div key={restaurant.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//             <div className="relative h-40 sm:h-48">
//               <Image
//                 src={restaurant.image}
//                 alt={restaurant.name}
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                 priority
//               />
//               <div className="absolute top-2 right-2">
//                 <button
//                   onClick={() => toggleRestaurantStatus(restaurant.id)}
//                   className={`p-1.5 sm:p-2 rounded-full ${
//                     restaurant.status === 'open' 
//                       ? 'bg-green-500 hover:bg-green-600' 
//                       : 'bg-red-500 hover:bg-red-600'
//                   } text-white transition-colors`}
//                   title={restaurant.status === 'open' ? 'Close Restaurant' : 'Open Restaurant'}
//                 >
//                   {restaurant.status === 'open' ? (
//                     <Power className="w-3 h-3 sm:w-4 sm:h-4" />
//                   ) : (
//                     <PowerOff className="w-3 h-3 sm:w-4 sm:h-4" />
//                   )}
//                 </button>
//               </div>
//             </div>
            
//             <div className="p-3 sm:p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words flex-1 mr-2">{restaurant.name}</h3>
//                 <span className={`inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium whitespace-nowrap ${
//                   restaurant.status === 'open' 
//                     ? 'bg-green-100 text-green-800' 
//                     : 'bg-red-100 text-red-800'
//                 }`}>
//                   {restaurant.status}
//                 </span>
//               </div>
              
//               <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">{restaurant.category}</p>
//               <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">{restaurant.address}</p>
              
//               <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
//                 <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
//                   <p className="text-[10px] sm:text-xs text-gray-500 mb-0.5">Rating</p>
//                   <p className="text-sm sm:text-base font-semibold flex items-center">
//                     <span className="text-yellow-500 mr-1">★</span>
//                     {restaurant.rating}
//                   </p>
//                 </div>
//                 <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
//                   <p className="text-[10px] sm:text-xs text-gray-500 mb-0.5">Orders</p>
//                   <p className="text-sm sm:text-base font-semibold">{restaurant.totalOrders}</p>
//                 </div>
//                 <div className="col-span-2 bg-gray-50 p-2 sm:p-3 rounded-lg">
//                   <p className="text-[10px] sm:text-xs text-gray-500 mb-0.5">Revenue</p>
//                   <p className="text-sm sm:text-base font-semibold text-green-600">Rs. {restaurant.revenue.toLocaleString()}</p>
//                 </div>
//               </div>
              
//               <div className="flex gap-1.5 sm:gap-2">
//                 <button className="flex-1 px-2 sm:px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-1 text-xs sm:text-sm">
//                   <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
//                   <span className="hidden xs:inline">View</span>
//                 </button>
//                 <button className="flex-1 px-2 sm:px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-1 text-xs sm:text-sm">
//                   <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
//                   <span className="hidden xs:inline">Edit</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Add Restaurant Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white p-4 sm:p-6 rounded-lg w-[95%] sm:w-full sm:max-w-md max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
//             <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-5">Add New Restaurant</h3>
//             <div className="space-y-4 sm:space-y-5">
//               <div className="space-y-1.5">
//                 <label className="text-xs sm:text-sm text-gray-700 font-medium">Restaurant Name<span className="text-red-500">*</span></label>
//                 <input
//                   type="text"
//                   required
//                   placeholder="Enter restaurant name"
//                   className="w-full px-3 py-2.5 text-sm sm:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400"
//                 />
//               </div>
//               <div className="space-y-1.5">
//                 <label className="text-xs sm:text-sm text-gray-700 font-medium flex items-center gap-1">
//                   Description
//                   <span className="text-xs text-gray-400">(Optional)</span>
//                 </label>
//                 <textarea
//                   placeholder="Enter restaurant description"
//                   className="w-full px-3 py-2.5 text-sm sm:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400 min-h-[80px]"
//                   rows={3}
//                 />
//               </div>
//               <div className="space-y-1.5">
//                 <label className="text-xs sm:text-sm text-gray-700 font-medium flex items-center gap-1">
//                   Address
//                   <span className="text-xs text-gray-400">(Optional)</span>
//                 </label>
//                 <textarea
//                   placeholder="Enter restaurant address"
//                   className="w-full px-3 py-2.5 text-sm sm:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400"
//                   rows={2}
//                 />
//               </div>
//               <div className="space-y-1.5">
//                 <label className="text-xs sm:text-sm text-gray-700 font-medium flex items-center gap-1">
//                   Restaurant Image
//                   <span className="text-xs text-gray-400">(Optional)</span>
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="w-full px-3 py-2.5 text-sm sm:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-black file:text-white hover:file:bg-gray-800"
//                 />
//               </div>
//               <div className="space-y-1.5">
//                 <label className="text-xs sm:text-sm text-gray-700 font-medium flex items-center gap-1">
//                   Status
//                   <span className="text-xs text-gray-400">(Optional)</span>
//                 </label>
//                 <select className="w-full px-3 py-2.5 text-sm sm:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
//                   <option value="open">Open</option>
//                   <option value="closed">Closed</option>
//                 </select>
//               </div>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-2.5 mt-6 sm:mt-7">
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="w-full sm:flex-1 px-4 py-2.5 text-sm sm:text-base border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
//               >
//                 Cancel
//               </button>
//               <button className="w-full sm:flex-1 px-4 py-2.5 text-sm sm:text-base bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
//                 Add Restaurant
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




'use client';
import { useState } from 'react';
import { Plus, Search, Filter, Edit, Eye, Power, PowerOff } from 'lucide-react';
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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Restaurant Management</h2>
          <p className="text-sm sm:text-base text-gray-600">Manage restaurants and their status</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="w-full sm:w-auto bg-black text-white px-5 py-2.5 rounded-lg flex items-center justify-center sm:justify-start gap-2 hover:bg-gray-800 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Restaurant
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <div className="relative w-full sm:flex-1 sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search restaurants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2.5 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-gray-600" />
            <select
              value={filterPeriod}
              onChange={(e) => setFilterPeriod(e.target.value as FilterPeriod)}
              className="w-full sm:w-auto border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="relative h-40 sm:h-48">
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
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
                <h3 className="text-lg font-semibold text-gray-900 break-words flex-1 mr-2">{restaurant.name}</h3>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  restaurant.status === 'open' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {restaurant.status}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-1">{restaurant.category}</p>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{restaurant.address}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Rating</p>
                  <p className="text-base font-semibold">{restaurant.rating}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Orders</p>
                  <p className="text-base font-semibold">{restaurant.totalOrders}</p>
                </div>
                <div className="col-span-2 bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Revenue</p>
                  <p className="text-base font-semibold text-green-600">Rs. {restaurant.revenue.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm">
                  <Eye className="w-4 h-4" />
                  View
                </button>
                <button className="flex-1 px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm">
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 sm:p-8 rounded-xl w-full sm:max-w-lg max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-semibold mb-6">Add New Restaurant</h3>
            
            <div className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Restaurant Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  placeholder="Enter restaurant name"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Description</label>
                <textarea
                  placeholder="Enter restaurant description"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400 min-h-[100px]"
                />
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Address</label>
                <textarea
                  placeholder="Enter restaurant address"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400 min-h-[80px]"
                />
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Restaurant Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full text-sm border border-gray-200 rounded-lg file:mr-4 file:py-2 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-black file:text-white hover:file:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Status */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Status</label>
                <select className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button
                onClick={() => setShowAddModal(false)}
                className="w-full sm:flex-1 px-5 py-3 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="w-full sm:flex-1 px-5 py-3 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                Add Restaurant
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
