'use client';
import { useState } from 'react';
import { Plus, Search, Filter, MoreVertical, Edit, Trash2, DollarSign } from 'lucide-react';

type Employee = {
  id: string;
  name: string;
  email: string;
  role: string;
  balance: number;
  totalCredit: number;
  totalDebit: number;
  status: 'active' | 'inactive';
  joinDate: string;
};

type FilterPeriod = 'day' | 'month' | 'quarter' | 'year';

export default function EmployeeManagement() {
  const [employees] = useState<Employee[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@qbatch.com',
      role: 'Developer',
      balance: 1250,
      totalCredit: 5000,
      totalDebit: 3750,
      status: 'active',
      joinDate: '2024-01-15'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@qbatch.com',
      role: 'Designer',
      balance: 800,
      totalCredit: 3200,
      totalDebit: 2400,
      status: 'active',
      joinDate: '2024-02-20'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike@qbatch.com',
      role: 'Manager',
      balance: -200,
      totalCredit: 2800,
      totalDebit: 3000,
      status: 'inactive',
      joinDate: '2023-12-10'
    }
  ]);

  const [filterPeriod, setFilterPeriod] = useState<FilterPeriod>('month');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showBalanceModal, setShowBalanceModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Employee Management</h2>
          <p className="text-gray-600">Manage employee accounts and balances</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Employee
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search employees..."
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

      {/* Employee Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Employee</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Role</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Balance</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Credit</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Debit</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredEmployees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{employee.name}</p>
                      <p className="text-sm text-gray-600">{employee.email}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-900">{employee.role}</td>
                  <td className="py-4 px-4">
                    <span className={`font-medium ${
                      employee.balance >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      Rs. {employee.balance.toLocaleString()}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-green-600 font-medium">
                    Rs. {employee.totalCredit.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-red-600 font-medium">
                    Rs. {employee.totalDebit.toLocaleString()}
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      employee.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {employee.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedEmployee(employee);
                          setShowBalanceModal(true);
                        }}
                        className="p-1 text-green-600 hover:bg-green-50 rounded"
                        title="Manage Balance"
                      >
                        <DollarSign className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-600 hover:bg-gray-50 rounded">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Employee Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Add New Employee</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Role"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="number"
                placeholder="Initial Balance"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                Add Employee
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Balance Management Modal */}
      {showBalanceModal && selectedEmployee && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Manage Balance - {selectedEmployee.name}</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Current Balance</p>
                <p className={`text-xl font-bold ${
                  selectedEmployee.balance >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  Rs. {selectedEmployee.balance.toLocaleString()}
                </p>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Add Credit
                </button>
                <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                  Add Debit
                </button>
              </div>
              <input
                type="number"
                placeholder="Amount"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <textarea
                placeholder="Note (optional)"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                rows={3}
              />
            </div>
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setShowBalanceModal(false)}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                Update Balance
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}