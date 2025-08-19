// import { BarChart3, TrendingUp, Users, ShoppingBag, DollarSign, Calendar } from 'lucide-react';

// export default function Analytics() {
//   const analyticsData = {
//     revenue: {
//       current: 45231,
//       previous: 38920,
//       growth: 16.2
//     },
//     orders: {
//       current: 1234,
//       previous: 1089,
//       growth: 13.3
//     },
//     users: {
//       current: 2350,
//       previous: 2100,
//       growth: 11.9
//     },
//     avgOrderValue: {
//       current: 367,
//       previous: 358,
//       growth: 2.5
//     }
//   };

//   const topPerformingRestaurants = [
//     { name: 'Doctor Saucy', revenue: 15420, orders: 234, growth: 18.5 },
//     { name: 'Adenine Kitchen', revenue: 12890, orders: 198, growth: 15.2 },
//     { name: 'Cardinal Chips', revenue: 9870, orders: 156, growth: 12.8 },
//     { name: 'Spice Garden', revenue: 7051, orders: 123, growth: 8.9 }
//   ];

//   const recentTrends = [
//     { period: 'Jan', revenue: 32000, orders: 890 },
//     { period: 'Feb', revenue: 35000, orders: 950 },
//     { period: 'Mar', revenue: 38000, orders: 1020 },
//     { period: 'Apr', revenue: 42000, orders: 1150 },
//     { period: 'May', revenue: 45000, orders: 1234 }
//   ];

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
//           <p className="text-gray-600">Comprehensive insights and performance metrics</p>
//         </div>
//         <div className="flex items-center gap-2">
//           <Calendar className="w-4 h-4 text-gray-600" />
//           <select className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
//             <option value="7">Last 7 days</option>
//             <option value="30">Last 30 days</option>
//             <option value="90">Last 3 months</option>
//             <option value="365">Last year</option>
//           </select>
//         </div>
//       </div>

//       {/* Key Metrics */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-600">Total Revenue</p>
//               <p className="text-2xl font-bold text-gray-900">Rs. {analyticsData.revenue.current.toLocaleString()}</p>
//             </div>
//             <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
//               <DollarSign className="w-6 h-6 text-green-600" />
//             </div>
//           </div>
//           <div className="mt-4 flex items-center">
//             <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
//             <span className="text-sm font-medium text-green-600">+{analyticsData.revenue.growth}%</span>
//             <span className="text-sm text-gray-500 ml-1">vs last period</span>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-600">Total Orders</p>
//               <p className="text-2xl font-bold text-gray-900">{analyticsData.orders.current.toLocaleString()}</p>
//             </div>
//             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//               <ShoppingBag className="w-6 h-6 text-blue-600" />
//             </div>
//           </div>
//           <div className="mt-4 flex items-center">
//             <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
//             <span className="text-sm font-medium text-green-600">+{analyticsData.orders.growth}%</span>
//             <span className="text-sm text-gray-500 ml-1">vs last period</span>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-600">Active Users</p>
//               <p className="text-2xl font-bold text-gray-900">{analyticsData.users.current.toLocaleString()}</p>
//             </div>
//             <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
//               <Users className="w-6 h-6 text-purple-600" />
//             </div>
//           </div>
//           <div className="mt-4 flex items-center">
//             <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
//             <span className="text-sm font-medium text-green-600">+{analyticsData.users.growth}%</span>
//             <span className="text-sm text-gray-500 ml-1">vs last period</span>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
//               <p className="text-2xl font-bold text-gray-900">Rs. {analyticsData.avgOrderValue.current}</p>
//             </div>
//             <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
//               <BarChart3 className="w-6 h-6 text-orange-600" />
//             </div>
//           </div>
//           <div className="mt-4 flex items-center">
//             <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
//             <span className="text-sm font-medium text-green-600">+{analyticsData.avgOrderValue.growth}%</span>
//             <span className="text-sm text-gray-500 ml-1">vs last period</span>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Revenue Trend Chart */}
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
//           <div className="space-y-4">
//             {recentTrends.map((trend, index) => (
//               <div key={index} className="flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <span className="text-sm font-medium text-gray-600 w-8">{trend.period}</span>
//                   <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-32">
//                     <div 
//                       className="bg-green-600 h-2 rounded-full" 
//                       style={{ width: `${(trend.revenue / 50000) * 100}%` }}
//                     />
//                   </div>
//                 </div>
//                 <span className="text-sm font-medium text-gray-900">Rs. {trend.revenue.toLocaleString()}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Top Performing Restaurants */}
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Restaurants</h3>
//           <div className="space-y-4">
//             {topPerformingRestaurants.map((restaurant, index) => (
//               <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
//                 <div>
//                   <p className="font-medium text-gray-900">{restaurant.name}</p>
//                   <p className="text-sm text-gray-600">{restaurant.orders} orders</p>
//                 </div>
//                 <div className="text-right">
//                   <p className="font-medium text-gray-900">Rs. {restaurant.revenue.toLocaleString()}</p>
//                   <p className="text-sm text-green-600">+{restaurant.growth}%</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Additional Analytics */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//           <h4 className="text-md font-semibold text-gray-900 mb-3">Peak Hours</h4>
//           <div className="space-y-2">
//             <div className="flex justify-between">
//               <span className="text-sm text-gray-600">12:00 - 13:00</span>
//               <span className="text-sm font-medium">234 orders</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-sm text-gray-600">19:00 - 20:00</span>
//               <span className="text-sm font-medium">198 orders</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-sm text-gray-600">20:00 - 21:00</span>
//               <span className="text-sm font-medium">176 orders</span>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//           <h4 className="text-md font-semibold text-gray-900 mb-3">Popular Categories</h4>
//           <div className="space-y-2">
//             <div className="flex justify-between">
//               <span className="text-sm text-gray-600">BBQ</span>
//               <span className="text-sm font-medium">45%</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-sm text-gray-600">Continental</span>
//               <span className="text-sm font-medium">28%</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-sm text-gray-600">Fast Food</span>
//               <span className="text-sm font-medium">27%</span>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//           <h4 className="text-md font-semibold text-gray-900 mb-3">Customer Satisfaction</h4>
//           <div className="space-y-2">
//             <div className="flex justify-between">
//               <span className="text-sm text-gray-600">5 Stars</span>
//               <span className="text-sm font-medium">68%</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-sm text-gray-600">4 Stars</span>
//               <span className="text-sm font-medium">22%</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-sm text-gray-600">3 Stars</span>
//               <span className="text-sm font-medium">10%</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






import { BarChart3, TrendingUp, Users, ShoppingBag, DollarSign, Calendar } from 'lucide-react';

export default function Analytics() {
  const analyticsData = {
    revenue: {
      current: 45231,
      previous: 38920,
      growth: 16.2
    },
    orders: {
      current: 1234,
      previous: 1089,
      growth: 13.3
    },
    users: {
      current: 2350,
      previous: 2100,
      growth: 11.9
    },
    avgOrderValue: {
      current: 367,
      previous: 358,
      growth: 2.5
    }
  };

  const topPerformingRestaurants = [
    { name: 'Doctor Saucy', revenue: 15420, orders: 234, growth: 18.5 },
    { name: 'Adenine Kitchen', revenue: 12890, orders: 198, growth: 15.2 },
    { name: 'Cardinal Chips', revenue: 9870, orders: 156, growth: 12.8 },
    { name: 'Spice Garden', revenue: 7051, orders: 123, growth: 8.9 }
  ];

  const recentTrends = [
    { period: 'Jan', revenue: 32000, orders: 890 },
    { period: 'Feb', revenue: 35000, orders: 950 },
    { period: 'Mar', revenue: 38000, orders: 1020 },
    { period: 'Apr', revenue: 42000, orders: 1150 },
    { period: 'May', revenue: 45000, orders: 1234 }
  ];

  return (
    <div className="space-y-4 sm:space-y-6 p-1 sm:p-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
          <p className="text-sm sm:text-base text-gray-600">Comprehensive insights and performance metrics</p>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-600 flex-shrink-0" />
          <select className="border border-gray-200 rounded-lg px-2 sm:px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent min-w-0 flex-1 sm:flex-none">
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 3 months</option>
            <option value="365">Last year</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900 truncate">Rs. {analyticsData.revenue.current.toLocaleString()}</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 ml-2">
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-3 sm:mt-4 flex items-center">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-green-600">+{analyticsData.revenue.growth}%</span>
            <span className="text-xs sm:text-sm text-gray-500 ml-1 truncate">vs last period</span>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">{analyticsData.orders.current.toLocaleString()}</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 ml-2">
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-3 sm:mt-4 flex items-center">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-green-600">+{analyticsData.orders.growth}%</span>
            <span className="text-xs sm:text-sm text-gray-500 ml-1 truncate">vs last period</span>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm font-medium text-gray-600">Active Users</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">{analyticsData.users.current.toLocaleString()}</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 ml-2">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-3 sm:mt-4 flex items-center">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-green-600">+{analyticsData.users.growth}%</span>
            <span className="text-xs sm:text-sm text-gray-500 ml-1 truncate">vs last period</span>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm font-medium text-gray-600">Avg Order Value</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900 truncate">Rs. {analyticsData.avgOrderValue.current}</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 ml-2">
              <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-3 sm:mt-4 flex items-center">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-green-600">+{analyticsData.avgOrderValue.growth}%</span>
            <span className="text-xs sm:text-sm text-gray-500 ml-1 truncate">vs last period</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Revenue Trend Chart */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Revenue Trend</h3>
          <div className="space-y-3 sm:space-y-4">
            {recentTrends.map((trend, index) => (
              <div key={index} className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
                  <span className="text-xs sm:text-sm font-medium text-gray-600 w-6 sm:w-8 flex-shrink-0">{trend.period}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-1.5 sm:h-2 max-w-20 sm:max-w-32">
                    <div 
                      className="bg-green-600 h-1.5 sm:h-2 rounded-full" 
                      style={{ width: `${(trend.revenue / 50000) * 100}%` }}
                    />
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-900 flex-shrink-0">Rs. {trend.revenue.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Restaurants */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Top Performing Restaurants</h3>
          <div className="space-y-3 sm:space-y-4">
            {topPerformingRestaurants.map((restaurant, index) => (
              <div key={index} className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-100 last:border-b-0 gap-3">
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-900 text-sm sm:text-base truncate">{restaurant.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{restaurant.orders} orders</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-medium text-gray-900 text-sm sm:text-base">Rs. {restaurant.revenue.toLocaleString()}</p>
                  <p className="text-xs sm:text-sm text-green-600">+{restaurant.growth}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
          <h4 className="text-sm sm:text-md font-semibold text-gray-900 mb-2 sm:mb-3">Peak Hours</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-600">12:00 - 13:00</span>
              <span className="text-xs sm:text-sm font-medium">234 orders</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-600">19:00 - 20:00</span>
              <span className="text-xs sm:text-sm font-medium">198 orders</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-600">20:00 - 21:00</span>
              <span className="text-xs sm:text-sm font-medium">176 orders</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
          <h4 className="text-sm sm:text-md font-semibold text-gray-900 mb-2 sm:mb-3">Popular Categories</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-600">BBQ</span>
              <span className="text-xs sm:text-sm font-medium">45%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-600">Continental</span>
              <span className="text-xs sm:text-sm font-medium">28%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-600">Fast Food</span>
              <span className="text-xs sm:text-sm font-medium">27%</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 sm:col-span-2 md:col-span-1">
          <h4 className="text-sm sm:text-md font-semibold text-gray-900 mb-2 sm:mb-3">Customer Satisfaction</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-600">5 Stars</span>
              <span className="text-xs sm:text-sm font-medium">68%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-600">4 Stars</span>
              <span className="text-xs sm:text-sm font-medium">22%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-600">3 Stars</span>
              <span className="text-xs sm:text-sm font-medium">10%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}