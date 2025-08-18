import { DollarSign, Users, Store, ShoppingBag, TrendingUp, TrendingDown } from 'lucide-react';

export default function DashboardStats() {
  const stats = [
    {
      title: 'Total Revenue',
      value: 'Rs. 45,231',
      change: '+20.1%',
      changeType: 'positive',
      icon: DollarSign,
    },
    {
      title: 'Active Users',
      value: '2,350',
      change: '+180.1%',
      changeType: 'positive',
      icon: Users,
    },
    {
      title: 'Restaurants',
      value: '12',
      change: '+19%',
      changeType: 'positive',
      icon: Store,
    },
    {
      title: 'Orders Today',
      value: '89',
      change: '-4.3%',
      changeType: 'negative',
      icon: ShoppingBag,
    },
  ];

  const recentOrders = [
    { id: '#12345', customer: 'John Doe', restaurant: 'Doctor Saucy', amount: 'Rs. 450', status: 'completed' },
    { id: '#12346', customer: 'Jane Smith', restaurant: 'Adenine Kitchen', amount: 'Rs. 320', status: 'pending' },
    { id: '#12347', customer: 'Mike Johnson', restaurant: 'Cardinal Chips', amount: 'Rs. 280', status: 'completed' },
    { id: '#12348', customer: 'Sarah Wilson', restaurant: 'Doctor Saucy', amount: 'Rs. 520', status: 'processing' },
  ];

  const topRestaurants = [
    { name: 'Doctor Saucy', orders: 45, revenue: 'Rs. 12,450' },
    { name: 'Adenine Kitchen', orders: 38, revenue: 'Rs. 9,870' },
    { name: 'Cardinal Chips', orders: 32, revenue: 'Rs. 8,320' },
    { name: 'Spice Garden', orders: 28, revenue: 'Rs. 7,560' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-gray-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                {stat.changeType === 'positive' ? (
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-1">from last month</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
            <button className="text-sm text-black hover:underline">View all</button>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div>
                  <p className="font-medium text-gray-900">{order.customer}</p>
                  <p className="text-sm text-gray-600">{order.restaurant} • {order.id}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{order.amount}</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    order.status === 'completed' ? 'bg-green-100 text-green-800' :
                    order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Restaurants */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Top Restaurants</h3>
            <button className="text-sm text-black hover:underline">View all</button>
          </div>
          <div className="space-y-4">
            {topRestaurants.map((restaurant, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
                    <Store className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{restaurant.name}</p>
                    <p className="text-sm text-gray-600">{restaurant.orders} orders</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{restaurant.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}