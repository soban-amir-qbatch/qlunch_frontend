'use client';
import { useState } from 'react';
import { Plus, Search, Filter, MoreVertical, Edit, Trash2, UserX, UserCheck } from 'lucide-react';

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalOrders: number;
  totalSpent: number;
  status: 'active' | 'suspended' | 'inactive';
  joinDate: string;
  lastOrder: string;
};

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+44 123 456 7890',
      totalOrders: 25,
      totalSpent: 2450,
      status: 'active',
      joinDate: '2024-01-15',
      lastOrder: '2024-01-20'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '+44 987 654 3210',
      totalOrders: 18,
      totalSpent: 1890,
      status: 'active',
      joinDate: '2024-02-10',
      lastOrder: '2024-01-18'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      phone: '+44 555 123 4567',
      totalOrders: 5,
      totalSpent: 450,
      status: 'suspended',
      joinDate: '2023-12-05',
      lastOrder: '2024-01-10'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const updateUserStatus = (userId: string, newStatus: 'active' | 'suspended' | 'inactive') => {
    setUsers(prev => prev.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
  };

  const deleteUser = (userId: string) => {
    setUsers(prev => prev.filter(user => user.id !== userId));
  };

  return (
    <div className="space-y-6 px-4 sm:px-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">User Management</h2>
          <p className="text-sm sm:text-base text-gray-600">Manage platform users and their accounts</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="w-full sm:w-auto bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center sm:justify-start gap-2 hover:bg-gray-800 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add User
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <div className="relative w-full sm:flex-1 sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full sm:w-auto border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="suspended">Suspended</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mx-[-16px] sm:mx-0">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-4 sm:px-6 text-xs sm:text-sm font-medium text-gray-900">User</th>
                <th className="text-left py-4 px-4 sm:px-6 text-xs sm:text-sm font-medium text-gray-900 hidden sm:table-cell">Contact</th>
                <th className="text-left py-4 px-4 sm:px-6 text-xs sm:text-sm font-medium text-gray-900 hidden sm:table-cell">Orders</th>
                <th className="text-left py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-900">Total Spent</th>
                <th className="text-left py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-900 hidden md:table-cell">Last Order</th>
                <th className="text-left py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="py-5 sm:py-5 px-4 sm:px-6">
                    <div>
                      <p className="text-sm sm:text-base font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs sm:text-sm text-gray-600">Joined {user.joinDate}</p>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 hidden sm:table-cell">
                    <div>
                      <p className="text-xs sm:text-sm text-gray-900">{user.email}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{user.phone}</p>
                    </div>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-900 hidden sm:table-cell">{user.totalOrders}</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium text-green-600">
                    Rs. {user.totalSpent.toLocaleString()}
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4">
                    <span className={`inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium ${
                      user.status === 'active' ? 'bg-green-100 text-green-800' :
                      user.status === 'suspended' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm text-gray-600 hidden md:table-cell">{user.lastOrder}</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4">
                    <div className="flex items-center gap-1 sm:gap-2">
                      {user.status === 'active' ? (
                        <button
                          onClick={() => updateUserStatus(user.id, 'suspended')}
                          className="p-1 text-red-600 hover:bg-red-50 rounded"
                          title="Suspend User"
                        >
                          <UserX className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      ) : (
                        <button
                          onClick={() => updateUserStatus(user.id, 'active')}
                          className="p-1 text-green-600 hover:bg-green-50 rounded"
                          title="Activate User"
                        >
                          <UserCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      )}
                      <button className="p-1 text-gray-600 hover:bg-gray-50 rounded">
                        <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="p-1 text-red-600 hover:bg-red-50 rounded"
                      >
                        <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        <div className="bg-white p-4 sm:p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{users.length}</p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Active Users</p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">
                {users.filter(u => u.status === 'active').length}
              </p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Suspended</p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-red-600">
                {users.filter(u => u.status === 'suspended').length}
              </p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <UserX className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-4 md:p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="pr-2">
              <p className="text-xs sm:text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 break-words">
                Rs. {users.reduce((sum, user) => sum + user.totalSpent, 0).toLocaleString()}
              </p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-lg sm:text-xl text-green-600 font-bold">₨</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Add New User</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full px-3 py-2 text-sm sm:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full px-3 py-2 text-sm sm:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm text-gray-700 font-medium">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full px-3 py-2 text-sm sm:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm text-gray-700 font-medium">Status</label>
                <select className="w-full px-3 py-2 text-sm sm:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 mt-5 sm:mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="w-full sm:flex-1 px-4 py-2 text-sm sm:text-base border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="w-full sm:flex-1 px-4 py-2 text-sm sm:text-base bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                Add User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}