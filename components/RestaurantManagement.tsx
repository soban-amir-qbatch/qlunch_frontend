
// // 'use client';
// // import { useState } from 'react';
// // import { Plus, Search, Filter, Edit, Eye, Power, PowerOff, X, Trash2 } from 'lucide-react';

// // type DeleteModalProps = {
// //   isOpen: boolean;
// //   onClose: () => void;
// //   onConfirm: () => void;
// //   restaurantName: string;
// // };

// // type Restaurant = {
// //   id: string;
// //   name: string;
// //   image: string;
// //   totalOrders: number;
// //   revenue: number;
// //   status: 'open' | 'closed';
// //   address: string;
// //   phone: string;
// //   description?: string;
// // };

// // type FilterPeriod = 'day' | 'month' | 'quarter' | 'year';

// // export default function RestaurantManagement() {
// //   const [restaurants, setRestaurants] = useState<Restaurant[]>([
// //     {
// //       id: '1',
// //       name: 'Doctor Saucy',
// //       image: '/doctorsaucy.jpg',
// //       totalOrders: 145,
// //       revenue: 45230,
// //       status: 'open',
// //       address: '123 Main St, London',
// //       phone: '+44 123 456 7890',
// //       description: 'Authentic BBQ restaurant serving the best saucy dishes in town. Known for our signature doctor sauce and grilled specialties.'
// //     },
// //     {
// //       id: '2',
// //       name: 'Adenine Kitchen',
// //       image: '/assets/images/image.png',
// //       totalOrders: 98,
// //       revenue: 32150,
// //       status: 'open',
// //       address: '456 Oak Ave, London',
// //       phone: '+44 987 654 3210',
// //       description: 'Modern continental cuisine with a twist. Fresh ingredients, innovative recipes, and a cozy atmosphere.'
// //     },
// //     {
// //       id: '3',
// //       name: 'Cardinal Chips',
// //       image: '/assets/images/image.png',
// //       totalOrders: 76,
// //       revenue: 18900,
// //       status: 'closed',
// //       address: '789 Pine Rd, London',
// //       phone: '+44 555 123 4567',
// //       description: 'Premium fast food joint specializing in gourmet chips and unique toppings. Quick service with quality ingredients.'
// //     }
// //   ]);

// //   const [filterPeriod, setFilterPeriod] = useState<FilterPeriod>('month');
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [showAddModal, setShowAddModal] = useState(false);
// //   const [showEditModal, setShowEditModal] = useState<{ isOpen: boolean; restaurant: Restaurant | null; hasChanges: boolean }>({
// //     isOpen: false,
// //     restaurant: null,
// //     hasChanges: false
// //   });
// //   const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; restaurantId: string; name: string }>({
// //     isOpen: false,
// //     restaurantId: '',
// //     name: ''
// //   });

// //   const filteredRestaurants = restaurants.filter(restaurant =>
// //     restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     restaurant.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     restaurant.address.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   const toggleRestaurantStatus = (id: string) => {
// //     setRestaurants(prev => prev.map(restaurant => 
// //       restaurant.id === id 
// //         ? { ...restaurant, status: restaurant.status === 'open' ? 'closed' : 'open' }
// //         : restaurant
// //     ));
// //   };

// //   const deleteRestaurant = (id: string) => {
// //     setRestaurants(prev => prev.filter(restaurant => restaurant.id !== id));
// //   };

// //   return (
// //     <div className="space-y-6 px-4">
// //       {/* Header */}
// //       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
// //         <div>
// //           <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Restaurant Management</h2>
// //           <p className="text-sm sm:text-base text-gray-600">Manage restaurants and their status</p>
// //         </div>
// //         <button
// //           onClick={() => setShowAddModal(true)}
// //           className="w-full sm:w-auto bg-black text-white px-5 py-2.5 rounded-lg flex items-center justify-center sm:justify-start gap-2 hover:bg-gray-800 transition-colors"
// //         >
// //           <Plus className="w-4 h-4" />
// //           Add Restaurant
// //         </button>
// //       </div>

// //       {/* Filters */}
// //       <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-200">
// //         <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
// //           <div className="relative w-full sm:flex-1 sm:max-w-md">
// //             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
// //             <input
// //               type="text"
// //               placeholder="Search restaurants..."
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               className="pl-10 pr-4 py-2.5 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
// //             />
// //           </div>
// //           <div className="flex items-center gap-2 w-full sm:w-auto">
// //             <Filter className="w-4 h-4 text-gray-600" />
// //             <select
// //               value={filterPeriod}
// //               onChange={(e) => setFilterPeriod(e.target.value as FilterPeriod)}
// //               className="w-full sm:w-auto border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
// //             >
// //               <option value="day">Today</option>
// //               <option value="month">This Month</option>
// //               <option value="quarter">This Quarter</option>
// //               <option value="year">This Year</option>
// //             </select>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Delete Confirmation Modal */}
// //       {deleteModal.isOpen && (
// //         <div className="fixed inset-0 z-50">
// //           <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setDeleteModal({ isOpen: false, restaurantId: '', name: '' })}></div>
// //           <div className="relative flex items-center justify-center min-h-screen p-4">
// //             <div className="bg-white rounded-xl p-6 max-w-sm w-full mx-auto shadow-xl">
// //               <h3 className="text-xl font-semibold mb-4 text-gray-900">Delete Restaurant</h3>
// //               <p className="text-gray-600 mb-6">
// //                 Are you sure you want to delete "{deleteModal.name}"? This action cannot be undone.
// //               </p>
// //               <div className="flex justify-end gap-3">
// //                 <button
// //                   onClick={() => setDeleteModal({ isOpen: false, restaurantId: '', name: '' })}
// //                   className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors font-medium"
// //                 >
// //                   Cancel
// //                 </button>
// //                 <button
// //                   onClick={() => {
// //                     deleteRestaurant(deleteModal.restaurantId);
// //                     setDeleteModal({ isOpen: false, restaurantId: '', name: '' });
// //                   }}
// //                   className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-medium"
// //                 >
// //                   Delete
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Restaurant Grid */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
// //         {filteredRestaurants.map((restaurant) => (
// //           <div key={restaurant.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
// //             <div className="relative h-40 sm:h-48">
// //               <img
// //                 src={restaurant.image}
// //                 alt={restaurant.name}
// //                 className="w-full h-full object-cover"
// //               />
// //               <div className="absolute top-2 left-2">
// //                 <button
// //                   onClick={() => toggleRestaurantStatus(restaurant.id)}
// //                   className={`p-2 rounded-full ${
// //                     restaurant.status === 'open' 
// //                       ? 'bg-green-500 hover:bg-green-600' 
// //                       : 'bg-red-500 hover:bg-red-600'
// //                   } text-white transition-colors`}
// //                   title={restaurant.status === 'open' ? 'Close Restaurant' : 'Open Restaurant'}
// //                 >
// //                   {restaurant.status === 'open' ? (
// //                     <Power className="w-4 h-4" />
// //                   ) : (
// //                     <PowerOff className="w-4 h-4" />
// //                   )}
// //                 </button>
// //               </div>
// //               <div className="absolute top-2 right-2">
// //                 {/* <button
// //                   onClick={() => setDeleteModal({ isOpen: true, restaurantId: restaurant.id, name: restaurant.name })}
// //                   className="p-2 rounded-full bg-white text-gray-600 hover:bg-red-500 hover:text-white transition-all"
// //                   title="Delete Restaurant"
// //                 >
// //                   <Trash2 className="w-4 h-4" />
// //                 </button> */}
// //                 <button
// //                   onClick={() =>
// //                     setDeleteModal({ isOpen: true, restaurantId: restaurant.id, name: restaurant.name })
// //                   }
// //                   className="p-2 rounded-full bg-white text-gray-600 
// //                             hover:bg-red-500 hover:text-white 
// //                             focus:bg-red-500 focus:text-white 
// //                             active:bg-red-600 active:text-white 
// //                             transition-all"
// //                   title="Delete Restaurant"
// //                 >
// //                   <Trash2 className="w-4 h-4" />
// //                 </button>


// //                 {/* <button
// //                   onClick={() => setDeleteModal({ isOpen: true, restaurantId: restaurant.id, name: restaurant.name })}
// //                   className="p-2 rounded-full bg-white hover:bg-red-500 text-gray-600 hover:text-white transition-all group"
// //                   title="Delete Restaurant"
// //                 >
// //                   <Trash2 className="w-4 h-4 group-hover:text-white transition-colors" />
// //                 </button> */}
// //               </div>
// //             </div>
            
// //             <div className="p-4">
// //               <div className="flex items-center justify-between mb-3">
// //                 <h3 className="text-lg font-semibold text-gray-900 break-words flex-1 mr-2">{restaurant.name}</h3>
// //                 <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
// //                   restaurant.status === 'open' 
// //                     ? 'bg-green-100 text-green-800' 
// //                     : 'bg-red-100 text-red-800'
// //                 }`}>
// //                   {restaurant.status}
// //                 </span>
// //               </div>

// //               <p className="text-sm text-gray-600 mb-2 line-clamp-2">{restaurant.address}</p>
              
// //               <p className="text-sm text-gray-500 mb-3 line-clamp-2">
// //                 {restaurant.description || "No description available"}
// //               </p>
              
// //               <div className="grid grid-cols-2 gap-4 mb-4">
// //                 <div className="bg-gray-50 p-3 rounded-lg">
// //                   <p className="text-xs text-gray-500 mb-1">Orders</p>
// //                   <p className="text-base font-semibold">{restaurant.totalOrders}</p>
// //                 </div>
// //                 <div className="bg-gray-50 p-3 rounded-lg">
// //                   <p className="text-xs text-gray-500 mb-1">Revenue</p>
// //                   <p className="text-base font-semibold text-green-600">Rs. {restaurant.revenue.toLocaleString()}</p>
// //                 </div>
// //               </div>
              
// //               <div className="flex gap-2">
// //                 <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm">
// //                   <Eye className="w-4 h-4" />
// //                   View
// //                 </button>
// //                 <button 
// //                   onClick={() => setShowEditModal({ isOpen: true, restaurant, hasChanges: false })}
// //                   className="flex-1 px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm">
// //                   <Edit className="w-4 h-4" />
// //                   Edit
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Edit Restaurant Modal */}
// //       {showEditModal.isOpen && showEditModal.restaurant && (
// //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
// //           <div className="bg-white rounded-2xl w-full max-w-xs sm:max-w-md mx-auto h-[90vh] sm:h-[80vh] max-h-[700px] flex flex-col shadow-2xl">
// //             {/* Fixed Header */}
// //             <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-100 shrink-0">
// //               <h3 className="text-xl font-bold text-gray-900">Edit Restaurant</h3>
// //               <button
// //                 onClick={() => setShowEditModal({ isOpen: false, restaurant: null, hasChanges: false })}
// //                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
// //               >
// //                 <X className="w-5 h-5 text-gray-500" />
// //               </button>
// //             </div>
            
// //             {/* Scrollable Content */}
// //             <div className="flex-1 overflow-y-auto px-6 py-2">
// //               <div className="space-y-8 pb-6">
// //                 <p className="text-sm text-red-500 mb-4 font-medium">
// //                   * At least one field must be modified
// //                 </p>
                
// //                 {/* Name */}
// //                 <div className="space-y-3">
// //                   <label className="block text-sm font-semibold text-gray-800">
// //                     Restaurant Name
// //                   </label>
// //                   <input
// //                     type="text"
// //                     defaultValue={showEditModal.restaurant.name}
// //                     placeholder="Enter restaurant name"
// //                     onChange={(e) => {
// //                       if (e.target.value !== showEditModal.restaurant?.name) {
// //                         setShowEditModal(prev => ({ ...prev, hasChanges: true }));
// //                       }
// //                     }}
// //                     className="w-full px-4 py-4 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 transition-all"
// //                   />
// //                 </div>

// //                 {/* Address */}
// //                 <div className="space-y-3">
// //                   <label className="block text-sm font-semibold text-gray-800">Address</label>
// //                   <textarea
// //                     defaultValue={showEditModal.restaurant.address}
// //                     placeholder="Enter restaurant address"
// //                     rows={4}
// //                     onChange={(e) => {
// //                       if (e.target.value !== showEditModal.restaurant?.address) {
// //                         setShowEditModal(prev => ({ ...prev, hasChanges: true }));
// //                       }
// //                     }}
// //                     className="w-full px-4 py-4 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 resize-none transition-all"
// //                   />
// //                 </div>

// //                 {/* Description */}
// //                 <div className="space-y-3">
// //                   <label className="block text-sm font-semibold text-gray-800">Description</label>
// //                   <textarea
// //                     placeholder="Enter restaurant description"
// //                     rows={4}
// //                     onChange={(e) => {
// //                       if (e.target.value) {
// //                         setShowEditModal(prev => ({ ...prev, hasChanges: true }));
// //                       }
// //                     }}
// //                     className="w-full px-4 py-4 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 resize-none transition-all"
// //                   />
// //                 </div>

// //                 {/* Restaurant Logo */}
// //                 <div className="space-y-3">
// //                   <label className="block text-sm font-semibold text-gray-800">Restaurant Logo</label>
// //                   <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-gray-300 transition-colors">
// //                     <input
// //                       type="file"
// //                       accept="image/*"
// //                       className="hidden"
// //                       id="edit-logo-upload"
// //                     />
// //                     <label 
// //                       htmlFor="edit-logo-upload"
// //                       className="cursor-pointer flex flex-col items-center gap-3"
// //                     >
// //                       <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
// //                         <Plus className="w-6 h-6 text-gray-400" />
// //                       </div>
// //                       <div>
// //                         <p className="text-sm font-medium text-gray-700">Upload Logo</p>
// //                         <p className="text-xs text-gray-500">JPG, PNG up to 5MB</p>
// //                       </div>
// //                     </label>
// //                   </div>
// //                 </div>

// //                 {/* Background Image */}
// //                 <div className="space-y-3">
// //                   <label className="block text-sm font-semibold text-gray-800">Background Image</label>
// //                   <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-gray-300 transition-colors">
// //                     <input
// //                       type="file"
// //                       accept="image/*"
// //                       className="hidden"
// //                       id="edit-background-upload"
// //                     />
// //                     <label 
// //                       htmlFor="edit-background-upload"
// //                       className="cursor-pointer flex flex-col items-center gap-3"
// //                     >
// //                       <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
// //                         <Plus className="w-6 h-6 text-gray-400" />
// //                       </div>
// //                       <div>
// //                         <p className="text-sm font-medium text-gray-700">Upload Background</p>
// //                         <p className="text-xs text-gray-500">JPG, PNG up to 10MB</p>
// //                       </div>
// //                     </label>
// //                   </div>
// //                 </div>

// //                 {/* Status */}
// //                 <div className="space-y-3">
// //                   <label className="block text-sm font-semibold text-gray-800">Status</label>
// //                   <div className="flex gap-4">
// //                     <label className="flex items-center gap-3 cursor-pointer">
// //                       <input
// //                         type="radio"
// //                         name="edit-status"
// //                         value="open"
// //                         defaultChecked={showEditModal.restaurant.status === 'open'}
// //                         onChange={() => {
// //                           if (showEditModal.restaurant?.status !== 'open') {
// //                             setShowEditModal(prev => ({ ...prev, hasChanges: true }));
// //                           }
// //                         }}
// //                         className="w-4 h-4 text-black focus:ring-2 focus:ring-black"
// //                       />
// //                       <span className="text-sm font-medium text-gray-700">Open</span>
// //                     </label>
// //                     <label className="flex items-center gap-3 cursor-pointer">
// //                       <input
// //                         type="radio"
// //                         name="edit-status"
// //                         value="closed"
// //                         defaultChecked={showEditModal.restaurant.status === 'closed'}
// //                         onChange={() => {
// //                           if (showEditModal.restaurant?.status !== 'closed') {
// //                             setShowEditModal(prev => ({ ...prev, hasChanges: true }));
// //                           }
// //                         }}
// //                         className="w-4 h-4 text-black focus:ring-2 focus:ring-black"
// //                       />
// //                       <span className="text-sm font-medium text-gray-700">Closed</span>
// //                     </label>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Fixed Footer */}
// //             <div className="p-6 pt-4 border-t border-gray-100 shrink-0">
// //               <div className="flex flex-col sm:flex-row gap-3">
// //                 <button
// //                   onClick={() => setShowEditModal({ isOpen: false, restaurant: null, hasChanges: false })}
// //                   className="w-full sm:flex-1 px-6 py-3 text-base font-medium border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
// //                 >
// //                   Cancel
// //                 </button>
// //                 <button 
// //                   disabled={!showEditModal.hasChanges}
// //                   className={`w-full sm:flex-1 px-6 py-3 text-base font-medium rounded-xl transition-all ${
// //                     showEditModal.hasChanges 
// //                       ? 'bg-black text-white hover:bg-gray-800 cursor-pointer' 
// //                       : 'bg-gray-100 text-gray-400 cursor-not-allowed'
// //                   }`}>
// //                   Save Changes
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Add Restaurant Modal - Improved */}
// //       {showAddModal && (
// //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
// //           <div className="bg-white rounded-2xl w-full max-w-xs sm:max-w-md mx-auto h-[90vh] sm:h-[80vh] max-h-[700px] flex flex-col shadow-2xl">
// //             {/* Fixed Header */}
// //             <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-100 shrink-0">
// //               <h3 className="text-xl font-bold text-gray-900">Add New Restaurant</h3>
// //               <button
// //                 onClick={() => setShowAddModal(false)}
// //                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
// //               >
// //                 <X className="w-5 h-5 text-gray-500" />
// //               </button>
// //             </div>
            
// //             {/* Scrollable Content */}
// //             <div className="flex-1 overflow-y-auto px-6 py-2">
// //               <div className="space-y-8 pb-6">
// //                 {/* Name */}
// //                 <div className="space-y-3">
// //                   <label className="block text-sm font-semibold text-gray-800">
// //                     Restaurant Name <span className="text-red-500">*</span>
// //                   </label>
// //                   <input
// //                     type="text"
// //                     required
// //                     placeholder="Enter restaurant name"
// //                     className="w-full px-4 py-4 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 transition-all"
// //                   />
// //                 </div>

// //                 {/* Address */}
// //                 <div className="space-y-3">
// //                   <label className="block text-sm font-semibold text-gray-800">Address</label>
// //                   <textarea
// //                     placeholder="Enter restaurant address"
// //                     rows={4}
// //                     className="w-full px-4 py-4 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 resize-none transition-all"
// //                   />
// //                 </div>

// //                 {/* Description */}
// //                 <div className="space-y-3">
// //                   <label className="block text-sm font-semibold text-gray-800">Description</label>
// //                   <textarea
// //                     placeholder="Enter restaurant description"
// //                     rows={4}
// //                     className="w-full px-4 py-4 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 resize-none transition-all"
// //                   />
// //                 </div>

// //                 {/* Restaurant Logo */}
// //                 <div className="space-y-3">
// //                   <label className="block text-sm font-semibold text-gray-800">Restaurant Logo</label>
// //                   <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-gray-300 transition-colors">
// //                     <input
// //                       type="file"
// //                       accept="image/*"
// //                       className="hidden"
// //                       id="logo-upload"
// //                     />
// //                     <label 
// //                       htmlFor="logo-upload"
// //                       className="cursor-pointer flex flex-col items-center gap-3"
// //                     >
// //                       <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
// //                         <Plus className="w-6 h-6 text-gray-400" />
// //                       </div>
// //                       <div>
// //                         <p className="text-sm font-medium text-gray-700">Upload Logo</p>
// //                         <p className="text-xs text-gray-500">JPG, PNG up to 5MB</p>
// //                       </div>
// //                     </label>
// //                   </div>
// //                 </div>

// //                 {/* Background Image */}
// //                 <div className="space-y-3">
// //                   <label className="block text-sm font-semibold text-gray-800">Background Image</label>
// //                   <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-gray-300 transition-colors">
// //                     <input
// //                       type="file"
// //                       accept="image/*"
// //                       className="hidden"
// //                       id="background-upload"
// //                     />
// //                     <label 
// //                       htmlFor="background-upload"
// //                       className="cursor-pointer flex flex-col items-center gap-3"
// //                     >
// //                       <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
// //                         <Plus className="w-6 h-6 text-gray-400" />
// //                       </div>
// //                       <div>
// //                         <p className="text-sm font-medium text-gray-700">Upload Background</p>
// //                         <p className="text-xs text-gray-500">JPG, PNG up to 10MB</p>
// //                       </div>
// //                     </label>
// //                   </div>
// //                 </div>

// //                 {/* Status */}
// //                 <div className="space-y-3">
// //                   <label className="block text-sm font-semibold text-gray-800">Status</label>
// //                   <div className="flex gap-4">
// //                     <label className="flex items-center gap-3 cursor-pointer">
// //                       <input
// //                         type="radio"
// //                         name="status"
// //                         value="open"
// //                         defaultChecked
// //                         className="w-4 h-4 text-black focus:ring-2 focus:ring-black"
// //                       />
// //                       <span className="text-sm font-medium text-gray-700">Open</span>
// //                     </label>
// //                     <label className="flex items-center gap-3 cursor-pointer">
// //                       <input
// //                         type="radio"
// //                         name="status"
// //                         value="closed"
// //                         className="w-4 h-4 text-black focus:ring-2 focus:ring-black"
// //                       />
// //                       <span className="text-sm font-medium text-gray-700">Closed</span>
// //                     </label>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Fixed Footer */}
// //             <div className="p-6 pt-4 border-t border-gray-100 shrink-0">
// //               <div className="flex flex-col sm:flex-row gap-3">
// //                 <button
// //                   onClick={() => setShowAddModal(false)}
// //                   className="w-full sm:flex-1 px-6 py-3 text-base font-medium border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
// //                 >
// //                   Cancel
// //                 </button>
// //                 <button className="w-full sm:flex-1 px-6 py-3 text-base font-medium bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
// //                   Add Restaurant
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }










// 'use client';
// import { useState, useEffect } from 'react';
// import { Plus, Search, Filter, Edit, Eye, Power, PowerOff, X, Trash2 } from 'lucide-react';

// type DeleteModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   onConfirm: () => void;
//   restaurantName: string;
// };

// // type Restaurant = {
// //   id: string;
// //   name: string;
// //   image: string;
// //   logo?: string;
// //   totalOrders: number;
// //   revenue: number;
// //   status: 'open' | 'closed';
// //   address: string;
// //   phone: string;
// //   description?: string;
// // };

// type Restaurant = {
//   id: string;
//   name: string;
//   image_url: string;
//   logo_url?: string;
//   address: string;
//   description?: string;
//   enabled: boolean;
//   created_at: string;
//   updated_at: string;
// };

// type FilterPeriod = 'day' | 'month' | 'quarter' | 'year';

// export default function RestaurantManagement() {
//   const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants/`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch restaurants');
//         }
//         const data = await response.json();
//         console.log(data)
//         setRestaurants(data);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'An error occurred');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRestaurants();
//   }, []);



//   const [filterPeriod, setFilterPeriod] = useState<FilterPeriod>('month');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState<{ isOpen: boolean; restaurant: Restaurant | null; hasChanges: boolean }>({
//     isOpen: false,
//     restaurant: null,
//     hasChanges: false
//   });
//   const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; restaurantId: string; name: string }>({
//     isOpen: false,
//     restaurantId: '',
//     name: ''
//   });

//   const filteredRestaurants = restaurants.filter(restaurant =>
//     restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     restaurant.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     restaurant.address.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const toggleRestaurantStatus = (id: string) => {
//     setRestaurants(prev => prev.map(restaurant => 
//       restaurant.id === id 
//         ? { ...restaurant, status: restaurant.status === 'open' ? 'closed' : 'open' }
//         : restaurant
//     ));
//   };

//   const deleteRestaurant = (id: string) => {
//     setRestaurants(prev => prev.filter(restaurant => restaurant.id !== id));
//   };

//   return (
//     <div className="space-y-6 px-4">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
//         <div>
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Restaurant Management</h2>
//           <p className="text-sm sm:text-base text-gray-600">Manage restaurants and their status</p>
//         </div>
//         <button
//           onClick={() => setShowAddModal(true)}
//           className="w-full sm:w-auto bg-black text-white px-5 py-2.5 rounded-lg flex items-center justify-center sm:justify-start gap-2 hover:bg-gray-800 transition-colors"
//         >
//           <Plus className="w-4 h-4" />
//           Add Restaurant
//         </button>
//       </div>

//       {/* Filters */}
//       <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-200">
//         <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
//           <div className="relative w-full sm:flex-1 sm:max-w-md">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <input
//               type="text"
//               placeholder="Search restaurants..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10 pr-4 py-2.5 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
//             />
//           </div>
//           <div className="flex items-center gap-2 w-full sm:w-auto">
//             <Filter className="w-4 h-4 text-gray-600" />
//             <select
//               value={filterPeriod}
//               onChange={(e) => setFilterPeriod(e.target.value as FilterPeriod)}
//               className="w-full sm:w-auto border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
//             >
//               <option value="day">Today</option>
//               <option value="month">This Month</option>
//               <option value="quarter">This Quarter</option>
//               <option value="year">This Year</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Delete Confirmation Modal */}
//       {deleteModal.isOpen && (
//         <div className="fixed inset-0 z-50">
//           <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setDeleteModal({ isOpen: false, restaurantId: '', name: '' })}></div>
//           <div className="relative flex items-center justify-center min-h-screen p-4">
//             <div className="bg-white rounded-xl p-6 max-w-sm w-full mx-auto shadow-xl">
//               <h3 className="text-xl font-semibold mb-4 text-gray-900">Delete Restaurant</h3>
//               <p className="text-gray-600 mb-6">
//                 Are you sure you want to delete "{deleteModal.name}"? This action cannot be undone.
//               </p>
//               <div className="flex justify-end gap-3">
//                 <button
//                   onClick={() => setDeleteModal({ isOpen: false, restaurantId: '', name: '' })}
//                   className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors font-medium"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={() => {
//                     deleteRestaurant(deleteModal.restaurantId);
//                     setDeleteModal({ isOpen: false, restaurantId: '', name: '' });
//                   }}
//                   className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-medium"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Restaurant Grid */}
//       {loading ? (
//         <div className="flex justify-center items-center py-12">
//           <div className="text-gray-500">Loading restaurants...</div>
//         </div>
//       ) : error ? (
//         <div className="flex justify-center items-center py-12">
//           <div className="text-red-500">Error: {error}</div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredRestaurants.map((restaurant) => (
//             <div key={restaurant.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
//               {/* Header with Background Image and Logo */}
//               <div className="relative h-32 bg-gradient-to-r from-gray-400 to-gray-600">
//                 <img
//                   src={restaurant.image_url}
//                   alt={`${restaurant.name} background`}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/20"></div>
                
//                 {/* Status Toggle Button */}
//                 <div className="absolute top-3 left-3">
//                   <button
//                     onClick={() => toggleRestaurantStatus(restaurant.id)}
//                     className={`p-2 rounded-full ${
//                       restaurant.enabled 
//                         ? 'bg-green-500 hover:bg-green-600' 
//                         : 'bg-red-500 hover:bg-red-600'
//                     } text-white transition-colors shadow-lg`}
//                     title={restaurant.enabled ? 'Close Restaurant' : 'Open Restaurant'}
//                   >
//                     {restaurant.enabled ? (
//                       <Power className="w-4 h-4" />
//                     ) : (
//                       <PowerOff className="w-4 h-4" />
//                     )}
//                   </button>
//                 </div>

//                 {/* Delete Button */}
//                 <div className="absolute top-3 right-3">
//                   <button
//                     onClick={() =>
//                       setDeleteModal({ isOpen: true, restaurantId: restaurant.id, name: restaurant.name })
//                     }
//                     className="p-2 rounded-full bg-white/90 text-gray-600 
//                               hover:bg-red-500 hover:text-white 
//                               focus:bg-red-500 focus:text-white 
//                               active:bg-red-600 active:text-white 
//                               transition-all shadow-lg"
//                     title="Delete Restaurant"
//                   >
//                     <Trash2 className="w-4 h-4" />
//                   </button>
//                 </div>

//                 {/* Restaurant Logo */}
//                 <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
//                   <div className="w-16 h-16 rounded-full bg-white p-1 shadow-lg">
//                     {restaurant.logo_url ? (
//                       <img
//                         src={restaurant.logo_url}
//                         alt={`${restaurant.name} logo`}
//                         className="w-full h-full object-cover rounded-full"
//                       />
//                     ) : (
//                       <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
//                         <span className="text-lg font-bold text-gray-600">
//                           {restaurant.name.charAt(0)}
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
              
//               {/* Card Content */}
//               <div className="px-5 pt-12 pb-5">
//                 {/* Restaurant Name and Status */}
//                 <div className="text-center mb-4">
//                   <h3 className="text-lg font-bold text-gray-900 mb-2 break-words">{restaurant.name}</h3>
//                   <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
//                     restaurant.enabled 
//                       ? 'bg-green-100 text-green-800' 
//                       : 'bg-red-100 text-red-800'
//                   }`}>
//                     {restaurant.enabled ? 'Open Now' : 'Closed'}
//                   </span>
//                 </div>

//                 {/* Address */}
//                 <div className="text-center mb-3">
//                   <p className="text-sm text-gray-600 line-clamp-2">{restaurant.address}</p>
//                 </div>
                
//                 {/* Description */}
//                 <div className="text-center mb-4">
//                   <p className="text-sm text-gray-500 line-clamp-2">
//                     {restaurant.description || "No description available"}
//                   </p>
//                 </div>
                
//                 {/* Stats - Since your API doesn't have orders/revenue, showing placeholder or removing */}
//                 <div className="grid grid-cols-2 gap-3 mb-5">
//                   <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-xl text-center">
//                     <p className="text-xs font-semibold text-blue-600 mb-1">Status</p>
//                     <p className="text-lg font-bold text-blue-700">{restaurant.enabled ? 'Active' : 'Inactive'}</p>
//                   </div>
//                   <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-xl text-center">
//                     <p className="text-xs font-semibold text-green-600 mb-1">Created</p>
//                     <p className="text-sm font-bold text-green-700">{new Date(restaurant.created_at).toLocaleDateString()}</p>
//                   </div>
//                 </div>
                
//                 {/* Action Buttons */}
//                 <div className="flex gap-2">
//                   <button className="flex-1 px-3 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
//                     <Eye className="w-4 h-4" />
//                     View
//                   </button>
//                   <button 
//                     onClick={() => setShowEditModal({ isOpen: true, restaurant, hasChanges: false })}
//                     className="flex-1 px-3 py-2.5 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
//                     <Edit className="w-4 h-4" />
//                     Edit
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
      
      

//       {/* Edit Restaurant Modal */}
//       {showEditModal.isOpen && showEditModal.restaurant && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl w-full max-w-xs sm:max-w-md mx-auto h-[90vh] sm:h-[80vh] max-h-[700px] flex flex-col shadow-2xl">
//             {/* Fixed Header */}
//             <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-100 shrink-0">
//               <h3 className="text-xl font-bold text-gray-900">Edit Restaurant</h3>
//               <button
//                 onClick={() => setShowEditModal({ isOpen: false, restaurant: null, hasChanges: false })}
//                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//               >
//                 <X className="w-5 h-5 text-gray-500" />
//               </button>
//             </div>
            
//             {/* Scrollable Content */}
//             <div className="flex-1 overflow-y-auto px-6 py-2">
//               <div className="space-y-6 pb-6">
//                 <p className="text-sm text-red-500 mb-4 font-medium">
//                   * At least one field must be modified
//                 </p>
                
//                 {/* Name */}
//                 <div className="space-y-2">
//                   <label className="block text-sm font-semibold text-gray-800">
//                     Restaurant Name
//                   </label>
//                   <input
//                     type="text"
//                     defaultValue={showEditModal.restaurant.name}
//                     placeholder="Enter restaurant name"
//                     onChange={(e) => {
//                       if (e.target.value !== showEditModal.restaurant?.name) {
//                         setShowEditModal(prev => ({ ...prev, hasChanges: true }));
//                       }
//                     }}
//                     className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 transition-all"
//                   />
//                 </div>

//                 {/* Address */}
//                 <div className="space-y-2">
//                   <label className="block text-sm font-semibold text-gray-800">Address</label>
//                   <textarea
//                     defaultValue={showEditModal.restaurant.address}
//                     placeholder="Enter restaurant address"
//                     rows={3}
//                     onChange={(e) => {
//                       if (e.target.value !== showEditModal.restaurant?.address) {
//                         setShowEditModal(prev => ({ ...prev, hasChanges: true }));
//                       }
//                     }}
//                     className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 resize-none transition-all"
//                   />
//                 </div>

//                 {/* Description */}
//                 <div className="space-y-2">
//                   <label className="block text-sm font-semibold text-gray-800">Description</label>
//                   <textarea
//                     defaultValue={showEditModal.restaurant.description}
//                     placeholder="Enter restaurant description"
//                     rows={3}
//                     onChange={(e) => {
//                       if (e.target.value !== showEditModal.restaurant?.description) {
//                         setShowEditModal(prev => ({ ...prev, hasChanges: true }));
//                       }
//                     }}
//                     className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 resize-none transition-all"
//                   />
//                 </div>

//                 {/* Restaurant Logo */}
//                 <div className="space-y-2">
//                   <label className="block text-sm font-semibold text-gray-800">Restaurant Logo</label>
//                   <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-gray-300 transition-colors">
//                     <input
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       id="edit-logo-upload"
//                       onChange={() => setShowEditModal(prev => ({ ...prev, hasChanges: true }))}
//                     />
//                     <label 
//                       htmlFor="edit-logo-upload"
//                       className="cursor-pointer flex flex-col items-center gap-2"
//                     >
//                       <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
//                         <Plus className="w-5 h-5 text-gray-400" />
//                       </div>
//                       <div>
//                         <p className="text-sm font-medium text-gray-700">Upload Logo</p>
//                         <p className="text-xs text-gray-500">JPG, PNG up to 5MB</p>
//                       </div>
//                     </label>
//                   </div>
//                 </div>

//                 {/* Background Image */}
//                 <div className="space-y-2">
//                   <label className="block text-sm font-semibold text-gray-800">Background Image</label>
//                   <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-gray-300 transition-colors">
//                     <input
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       id="edit-background-upload"
//                       onChange={() => setShowEditModal(prev => ({ ...prev, hasChanges: true }))}
//                     />
//                     <label 
//                       htmlFor="edit-background-upload"
//                       className="cursor-pointer flex flex-col items-center gap-2"
//                     >
//                       <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
//                         <Plus className="w-5 h-5 text-gray-400" />
//                       </div>
//                       <div>
//                         <p className="text-sm font-medium text-gray-700">Upload Background</p>
//                         <p className="text-xs text-gray-500">JPG, PNG up to 10MB</p>
//                       </div>
//                     </label>
//                   </div>
//                 </div>

//                 {/* Status */}
//                 <div className="space-y-2">
//                   <label className="block text-sm font-semibold text-gray-800">Status</label>
//                   <div className="flex gap-4">
//                     <label className="flex items-center gap-2 cursor-pointer">
//                       <input
//                         type="radio"
//                         name="edit-status"
//                         value="open"
//                         defaultChecked={showEditModal.restaurant.status === 'open'}
//                         onChange={() => {
//                           if (showEditModal.restaurant?.status !== 'open') {
//                             setShowEditModal(prev => ({ ...prev, hasChanges: true }));
//                           }
//                         }}
//                         className="w-4 h-4 text-black focus:ring-2 focus:ring-black"
//                       />
//                       <span className="text-sm font-medium text-gray-700">Open</span>
//                     </label>
//                     <label className="flex items-center gap-2 cursor-pointer">
//                       <input
//                         type="radio"
//                         name="edit-status"
//                         value="closed"
//                         defaultChecked={showEditModal.restaurant.status === 'closed'}
//                         onChange={() => {
//                           if (showEditModal.restaurant?.status !== 'closed') {
//                             setShowEditModal(prev => ({ ...prev, hasChanges: true }));
//                           }
//                         }}
//                         className="w-4 h-4 text-black focus:ring-2 focus:ring-black"
//                       />
//                       <span className="text-sm font-medium text-gray-700">Closed</span>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Fixed Footer */}
//             <div className="p-6 pt-4 border-t border-gray-100 shrink-0">
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <button
//                   onClick={() => setShowEditModal({ isOpen: false, restaurant: null, hasChanges: false })}
//                   className="w-full sm:flex-1 px-6 py-3 text-base font-medium border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button 
//                   disabled={!showEditModal.hasChanges}
//                   className={`w-full sm:flex-1 px-6 py-3 text-base font-medium rounded-xl transition-all ${
//                     showEditModal.hasChanges 
//                       ? 'bg-black text-white hover:bg-gray-800 cursor-pointer' 
//                       : 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                   }`}>
//                   Save Changes
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Add Restaurant Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl w-full max-w-xs sm:max-w-md mx-auto h-[90vh] sm:h-[80vh] max-h-[700px] flex flex-col shadow-2xl">
//             {/* Fixed Header */}
//             <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-100 shrink-0">
//               <h3 className="text-xl font-bold text-gray-900">Add New Restaurant</h3>
//               <button
//                 onClick={() => setShowAddModal(false)}
//                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//               >
//                 <X className="w-5 h-5 text-gray-500" />
//               </button>
//             </div>
            
//             {/* Scrollable Content */}
//             <div className="flex-1 overflow-y-auto px-6 py-2">
//               <div className="space-y-6 pb-6">
//                 {/* Name */}
//                 <div className="space-y-2">
//                   <label className="block text-sm font-semibold text-gray-800">
//                     Restaurant Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     placeholder="Enter restaurant name"
//                     className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 transition-all"
//                   />
//                 </div>

//                 {/* Address */}
//                 <div className="space-y-2">
//                   <label className="block text-sm font-semibold text-gray-800">Address</label>
//                   <textarea
//                     placeholder="Enter restaurant address"
//                     rows={3}
//                     className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 resize-none transition-all"
//                   />
//                 </div>

//                 {/* Description */}
//                 <div className="space-y-2">
//                   <label className="block text-sm font-semibold text-gray-800">Description</label>
//                   <textarea
//                     placeholder="Enter restaurant description"
//                     rows={3}
//                     className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 resize-none transition-all"
//                   />
//                 </div>

//                 {/* Restaurant Logo */}
//                 <div className="space-y-2">
//                   <label className="block text-sm font-semibold text-gray-800">Restaurant Logo</label>
//                   <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-gray-300 transition-colors">
//                     <input
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       id="logo-upload"
//                     />
//                     <label 
//                       htmlFor="logo-upload"
//                       className="cursor-pointer flex flex-col items-center gap-2"
//                     >
//                       <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
//                         <Plus className="w-5 h-5 text-gray-400" />
//                       </div>
//                       <div>
//                         <p className="text-sm font-medium text-gray-700">Upload Logo</p>
//                         <p className="text-xs text-gray-500">JPG, PNG up to 5MB</p>
//                       </div>
//                     </label>
//                   </div>
//                 </div>

//                 {/* Background Image */}
//                 <div className="space-y-2">
//                   <label className="block text-sm font-semibold text-gray-800">Background Image</label>
//                   <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-gray-300 transition-colors">
//                     <input
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       id="background-upload"
//                     />
//                     <label 
//                       htmlFor="background-upload"
//                       className="cursor-pointer flex flex-col items-center gap-2"
//                     >
//                       <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
//                         <Plus className="w-5 h-5 text-gray-400" />
//                       </div>
//                       <div>
//                         <p className="text-sm font-medium text-gray-700">Upload Background</p>
//                         <p className="text-xs text-gray-500">JPG, PNG up to 10MB</p>
//                       </div>
//                     </label>
//                   </div>
//                 </div>

//                 {/* Status */}
//                 <div className="space-y-2">
//                   <label className="block text-sm font-semibold text-gray-800">Status</label>
//                   <div className="flex gap-4">
//                     <label className="flex items-center gap-2 cursor-pointer">
//                       <input
//                         type="radio"
//                         name="status"
//                         value="open"
//                         defaultChecked
//                         className="w-4 h-4 text-black focus:ring-2 focus:ring-black"
//                       />
//                       <span className="text-sm font-medium text-gray-700">Open</span>
//                     </label>
//                     <label className="flex items-center gap-2 cursor-pointer">
//                       <input
//                         type="radio"
//                         name="status"
//                         value="closed"
//                         className="w-4 h-4 text-black focus:ring-2 focus:ring-black"
//                       />
//                       <span className="text-sm font-medium text-gray-700">Closed</span>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Fixed Footer */}
//             <div className="p-6 pt-4 border-t border-gray-100 shrink-0">
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <button
//                   onClick={() => setShowAddModal(false)}
//                   className="w-full sm:flex-1 px-6 py-3 text-base font-medium border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button className="w-full sm:flex-1 px-6 py-3 text-base font-medium bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
//                   Add Restaurant
//                 </button>
//               </div>
//           </div>
//           </div>
//           </div>
//         )}
//       </div>
//     );
//   }
            










'use client';
import { useState, useEffect } from 'react';
import { Plus, Search, Filter, Edit, Eye, Power, PowerOff, X, Trash2 } from 'lucide-react';

type DeleteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  restaurantName: string;
};

type Restaurant = {
  id: string;
  name: string;
  image_url: string;
  logo_url?: string;
  address: string;
  description?: string;
  enabled: boolean;
  created_at: string;
  updated_at: string;
};

type FilterPeriod = 'day' | 'month' | 'quarter' | 'year';

export default function RestaurantManagement() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        setError(null); // Clear previous errors
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants/`);
        if (!response.ok) {
          throw new Error(`Failed to fetch restaurants: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log('API Response:', data);
        
        // Ensure data is an array
        if (Array.isArray(data)) {
          setRestaurants(data);
        } else if (data && Array.isArray(data.results)) {
          // Handle paginated response
          setRestaurants(data.results);
        } else if (data && typeof data === 'object') {
          // Handle single object wrapped in array
          setRestaurants([data]);
        } else {
          throw new Error('Invalid data format received from API');
        }
      } catch (err) {
        console.error('Error fetching restaurants:', err);
        setError(err instanceof Error ? err.message : 'An error occurred while fetching restaurants');
        setRestaurants([]); // Ensure restaurants is always an array
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const [filterPeriod, setFilterPeriod] = useState<FilterPeriod>('month');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState<{ isOpen: boolean; restaurant: Restaurant | null; hasChanges: boolean }>({
    isOpen: false,
    restaurant: null,
    hasChanges: false
  });
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; restaurantId: string; name: string }>({
    isOpen: false,
    restaurantId: '',
    name: ''
  });

  // Safe filtering with fallback to empty array
  const filteredRestaurants = (restaurants || []).filter(restaurant =>
    restaurant?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    restaurant?.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    restaurant?.address?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleRestaurantStatus = async (id: string) => {
    try {
      const restaurant = restaurants.find(r => r.id === id);
      if (!restaurant) return;

      // Optimistic update
      setRestaurants(prev => prev.map(restaurant => 
        restaurant.id === id 
          ? { ...restaurant, enabled: !restaurant.enabled }
          : restaurant
      ));

      // Make API call to update status
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants/${id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ enabled: !restaurant.enabled }),
      });

      if (!response.ok) {
        // Revert optimistic update on failure
        setRestaurants(prev => prev.map(r => 
          r.id === id 
            ? { ...r, enabled: restaurant.enabled }
            : r
        ));
        throw new Error('Failed to update restaurant status');
      }
    } catch (err) {
      console.error('Error updating restaurant status:', err);
      // You might want to show a toast notification here
    }
  };

  const deleteRestaurant = async (id: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants/${id}/`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete restaurant');
      }

      // Remove from local state
      setRestaurants(prev => prev.filter(restaurant => restaurant.id !== id));
    } catch (err) {
      console.error('Error deleting restaurant:', err);
      // You might want to show a toast notification here
    }
  };

  return (
    <div className="space-y-6 px-4">
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

      {/* Delete Confirmation Modal */}
      {deleteModal.isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setDeleteModal({ isOpen: false, restaurantId: '', name: '' })}></div>
          <div className="relative flex items-center justify-center min-h-screen p-4">
            <div className="bg-white rounded-xl p-6 max-w-sm w-full mx-auto shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Delete Restaurant</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete "{deleteModal.name}"? This action cannot be undone.
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setDeleteModal({ isOpen: false, restaurantId: '', name: '' })}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    deleteRestaurant(deleteModal.restaurantId);
                    setDeleteModal({ isOpen: false, restaurantId: '', name: '' });
                  }}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Restaurant Grid */}
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="text-gray-500">Loading restaurants...</div>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center py-12">
          <div className="text-red-500">Error: {error}</div>
        </div>
      ) : filteredRestaurants.length === 0 ? (
        <div className="flex justify-center items-center py-12">
          <div className="text-gray-500">
            {searchTerm ? 'No restaurants found matching your search.' : 'No restaurants found.'}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Header with Background Image and Logo */}
              <div className="relative h-32 bg-gradient-to-r from-gray-400 to-gray-600">
                {restaurant.image_url ? (
                  <img
                    src={restaurant.image_url}
                    alt={`${restaurant.name} background`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to gradient if image fails to load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-gray-400 to-gray-600"></div>
                )}
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Status Toggle Button */}
                <div className="absolute top-3 left-3">
                  <button
                    onClick={() => toggleRestaurantStatus(restaurant.id)}
                    className={`p-2 rounded-full ${
                      restaurant.enabled 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-red-500 hover:bg-red-600'
                    } text-white transition-colors shadow-lg`}
                    title={restaurant.enabled ? 'Close Restaurant' : 'Open Restaurant'}
                  >
                    {restaurant.enabled ? (
                      <Power className="w-4 h-4" />
                    ) : (
                      <PowerOff className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Delete Button */}
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() =>
                      setDeleteModal({ isOpen: true, restaurantId: restaurant.id, name: restaurant.name })
                    }
                    className="p-2 rounded-full bg-white/90 text-gray-600 
                              hover:bg-red-500 hover:text-white 
                              focus:bg-red-500 focus:text-white 
                              active:bg-red-600 active:text-white 
                              transition-all shadow-lg"
                    title="Delete Restaurant"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Restaurant Logo */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 rounded-full bg-white p-1 shadow-lg">
                    {restaurant.logo_url ? (
                      <img
                        src={restaurant.logo_url}
                        alt={`${restaurant.name} logo`}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          // Fallback to initial letter if logo fails to load
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : null}
                    {!restaurant.logo_url && (
                      <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-600">
                          {restaurant.name?.charAt(0)?.toUpperCase() || '?'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="px-5 pt-12 pb-5">
                {/* Restaurant Name and Status */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 break-words">{restaurant.name}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    restaurant.enabled 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {restaurant.enabled ? 'Open Now' : 'Closed'}
                  </span>
                </div>

                {/* Address */}
                <div className="text-center mb-3">
                  <p className="text-sm text-gray-600 line-clamp-2">{restaurant.address}</p>
                </div>
                
                {/* Description */}
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {restaurant.description || "No description available"}
                  </p>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-xl text-center">
                    <p className="text-xs font-semibold text-blue-600 mb-1">Orders</p>
                    <p className="text-lg font-bold text-blue-700">{0}</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-xl text-center">
                    <p className="text-xs font-semibold text-green-600 mb-1">Last Updated</p>
                    <p className="text-sm font-bold text-green-700">
                      {new Date(restaurant.updated_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button 
                    onClick={() => setShowEditModal({ isOpen: true, restaurant, hasChanges: false })}
                    className="flex-1 px-3 py-2.5 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Edit Restaurant Modal */}
      {showEditModal.isOpen && showEditModal.restaurant && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-xs sm:max-w-md mx-auto h-[90vh] sm:h-[80vh] max-h-[700px] flex flex-col shadow-2xl">
            {/* Fixed Header */}
            <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-100 shrink-0">
              <h3 className="text-xl font-bold text-gray-900">Edit Restaurant</h3>
              <button
                onClick={() => setShowEditModal({ isOpen: false, restaurant: null, hasChanges: false })}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-2">
              <div className="space-y-6 pb-6">
                <p className="text-sm text-red-500 mb-4 font-medium">
                  * At least one field must be modified
                </p>
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    defaultValue={showEditModal.restaurant.name}
                    placeholder="Enter restaurant name"
                    onChange={(e) => {
                      if (e.target.value !== showEditModal.restaurant?.name) {
                        setShowEditModal(prev => ({ ...prev, hasChanges: true }));
                      }
                    }}
                    className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 transition-all"
                  />
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">Address</label>
                  <textarea
                    defaultValue={showEditModal.restaurant.address}
                    placeholder="Enter restaurant address"
                    rows={3}
                    onChange={(e) => {
                      if (e.target.value !== showEditModal.restaurant?.address) {
                        setShowEditModal(prev => ({ ...prev, hasChanges: true }));
                      }
                    }}
                    className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 resize-none transition-all"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">Description</label>
                  <textarea
                    defaultValue={showEditModal.restaurant.description}
                    placeholder="Enter restaurant description"
                    rows={3}
                    onChange={(e) => {
                      if (e.target.value !== showEditModal.restaurant?.description) {
                        setShowEditModal(prev => ({ ...prev, hasChanges: true }));
                      }
                    }}
                    className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 resize-none transition-all"
                  />
                </div>

                {/* Restaurant Logo */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">Restaurant Logo</label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-gray-300 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="edit-logo-upload"
                      onChange={() => setShowEditModal(prev => ({ ...prev, hasChanges: true }))}
                    />
                    <label 
                      htmlFor="edit-logo-upload"
                      className="cursor-pointer flex flex-col items-center gap-2"
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <Plus className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Upload Logo</p>
                        <p className="text-xs text-gray-500">JPG, PNG up to 5MB</p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Background Image */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">Background Image</label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-gray-300 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="edit-background-upload"
                      onChange={() => setShowEditModal(prev => ({ ...prev, hasChanges: true }))}
                    />
                    <label 
                      htmlFor="edit-background-upload"
                      className="cursor-pointer flex flex-col items-center gap-2"
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <Plus className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Upload Background</p>
                        <p className="text-xs text-gray-500">JPG, PNG up to 10MB</p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Status */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">Status</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="edit-status"
                        value="enabled"
                        defaultChecked={showEditModal.restaurant.enabled}
                        onChange={() => {
                          if (!showEditModal.restaurant?.enabled) {
                            setShowEditModal(prev => ({ ...prev, hasChanges: true }));
                          }
                        }}
                        className="w-4 h-4 text-black focus:ring-2 focus:ring-black"
                      />
                      <span className="text-sm font-medium text-gray-700">Open</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="edit-status"
                        value="disabled"
                        defaultChecked={!showEditModal.restaurant.enabled}
                        onChange={() => {
                          if (showEditModal.restaurant?.enabled) {
                            setShowEditModal(prev => ({ ...prev, hasChanges: true }));
                          }
                        }}
                        className="w-4 h-4 text-black focus:ring-2 focus:ring-black"
                      />
                      <span className="text-sm font-medium text-gray-700">Closed</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed Footer */}
            <div className="p-6 pt-4 border-t border-gray-100 shrink-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowEditModal({ isOpen: false, restaurant: null, hasChanges: false })}
                  className="w-full sm:flex-1 px-6 py-3 text-base font-medium border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  disabled={!showEditModal.hasChanges}
                  className={`w-full sm:flex-1 px-6 py-3 text-base font-medium rounded-xl transition-all ${
                    showEditModal.hasChanges 
                      ? 'bg-black text-white hover:bg-gray-800 cursor-pointer' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Restaurant Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-xs sm:max-w-md mx-auto h-[90vh] sm:h-[80vh] max-h-[700px] flex flex-col shadow-2xl">
            {/* Fixed Header */}
            <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-100 shrink-0">
              <h3 className="text-xl font-bold text-gray-900">Add New Restaurant</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-2">
              <div className="space-y-6 pb-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">
                    Restaurant Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter restaurant name"
                    className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 transition-all"
                  />
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">Address</label>
                  <textarea
                    placeholder="Enter restaurant address"
                    rows={3}
                    className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 resize-none transition-all"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">Description</label>
                  <textarea
                    placeholder="Enter restaurant description"
                    rows={3}
                    className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 resize-none transition-all"
                  />
                </div>

                {/* Restaurant Logo */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">Restaurant Logo</label>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-gray-300 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="logo-upload"
                    />
                    <label 
                      htmlFor="logo-upload"
                      className="cursor-pointer flex flex-col items-center gap-2"
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <Plus className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Upload Logo</p>
                        <p className="text-xs text-gray-500">JPG, PNG up to 5MB</p>
                      </div>
                    </label>
                  </div>
                </div>


                {/* Background Image */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">Background Image</label>                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-gray-300 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="background-upload"
                      />
                      <label 
                        htmlFor="background-upload"
                        className="cursor-pointer flex flex-col items-center gap-2"
                      >
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <Plus className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Upload Background</p>
                          <p className="text-xs text-gray-500">JPG, PNG up to 10MB</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-800">Status</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="status"
                          value="open"
                          defaultChecked
                          className="w-4 h-4 text-black focus:ring-2 focus:ring-black"
                        />
                        <span className="text-sm font-medium text-gray-700">Open</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="status"
                          value="closed"
                          className="w-4 h-4 text-black focus:ring-2 focus:ring-black"
                        />
                        <span className="text-sm font-medium text-gray-700">Closed</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fixed Footer */}
              <div className="p-6 pt-4 border-t border-gray-100 shrink-0">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="w-full sm:flex-1 px-6 py-3 text-base font-medium border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="w-full sm:flex-1 px-6 py-3 text-base font-medium bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
                    Add Restaurant
                  </button>
                </div>
            </div>
            </div>
            </div>
          )}
        </div>
      );
    }

               