
import { useState, useEffect } from 'react';
import { Plus, Search, Filter, Edit, Trash2, Eye } from 'lucide-react';
import Image from 'next/image';

type MenuItem = {
  id: string;
  restaurant_id: string;
  category_id: string;
  name: string;
  description: string;
  image_url: string;
  price: string;
  calories: number;
  enabled: boolean;
  created_at: string;
  updated_at: string;
};

export default function ItemManagement() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [restaurantFilter, setRestaurantFilter] = useState<string>('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [totalPages, setTotalPages] = useState(1);

  // For filter dropdowns
  const [categories, setCategories] = useState<{id: string, name: string}[]>([]);
  const [restaurants, setRestaurants] = useState<{id: string, name: string}[]>([]);

  useEffect(() => {
    // Fetch categories and restaurants for dropdowns
    const fetchMeta = async () => {
      try {
        const [catRes, restRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/restaurants/`)
        ]);
        const catData = await catRes.json();
        const restData = await restRes.json();
        setCategories(Array.isArray(catData) ? catData : catData.results || []);
        setRestaurants(Array.isArray(restData) ? restData : restData.results || []);
      } catch {}
    };
    fetchMeta();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams();
        if (restaurantFilter) params.append('restaurant_id', restaurantFilter);
        if (categoryFilter) params.append('category_id', categoryFilter);
        if (searchTerm) params.append('search', searchTerm);
        params.append('page', page.toString());
        params.append('page_size', pageSize.toString());
        const url = `${process.env.NEXT_PUBLIC_API_URL}/menu-items/?${params.toString()}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch menu items');
        const data = await res.json();
        console.log(data)
        // Support direct array, {results: Array}, and {data: Array} formats
        if (Array.isArray(data)) {
          setItems(data);
        } else if (Array.isArray(data.data)) {
          setItems(data.data);
        } else if (Array.isArray(data.results)) {
          setItems(data.results);
        } else {
          setItems([]);
        }
        setTotalPages(data.total_pages || 1);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching items');
        setItems([]);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [restaurantFilter, categoryFilter, searchTerm, page, pageSize]);

  const handleDelete = async (id: string) => {
    // Implement API delete if needed
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-8 px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Menu Item Management</h2>
          <p className="text-base text-gray-600">Manage menu items across all restaurants</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform"
        >
          <Plus className="w-5 h-5" />
          Add Item
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={e => { setSearchTerm(e.target.value); setPage(1); }}
            className="pl-10 pr-4 py-2.5 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={e => { setCategoryFilter(e.target.value); setPage(1); }}
          className="w-full sm:w-40 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <select
          value={restaurantFilter}
          onChange={e => { setRestaurantFilter(e.target.value); setPage(1); }}
          className="w-full sm:w-40 border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">All Restaurants</option>
          {restaurants.map(rest => (
            <option key={rest.id} value={rest.id}>{rest.name}</option>
          ))}
        </select>
      </div>

      {/* Items Grid */}
      {loading ? (
        <div className="flex justify-center items-center py-16">
          <div className="animate-pulse text-gray-400 text-lg">Loading menu items...</div>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center py-16">
          <div className="text-red-500 text-lg">{error}</div>
        </div>
      ) : items.length === 0 ? (
        <div className="flex justify-center items-center py-16">
          <div className="text-gray-500 text-lg">No menu items found.</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={item.image_url || '/landing.png'}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    className={`px-3 py-1 rounded-full text-xs font-semibold shadow ${item.enabled ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                  >
                    {item.enabled ? 'Enabled' : 'Disabled'}
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 rounded-full bg-white text-gray-600 hover:bg-red-500 hover:text-white transition-all shadow-lg"
                    title="Delete Item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex-1 flex flex-col p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900 break-words flex-1 mr-2">{item.name}</h3>
                  <span className="text-lg font-bold text-blue-600 whitespace-nowrap">Rs. {item.price}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span>{item.calories} cal</span>
                  <span>{new Date(item.created_at).toLocaleDateString()}</span>
                </div>
                <div className="flex gap-2 mt-auto">
                  <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button className="flex-1 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 text-sm font-medium">
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className={`px-4 py-2 rounded-lg border ${page === 1 ? 'bg-gray-100 text-gray-400' : 'bg-white text-black hover:bg-gray-50'}`}
          >
            Previous
          </button>
          <span className="px-3 py-2 text-base font-medium">Page {page} of {totalPages}</span>
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className={`px-4 py-2 rounded-lg border ${page === totalPages ? 'bg-gray-100 text-gray-400' : 'bg-white text-black hover:bg-gray-50'}`}
          >
            Next
          </button>
        </div>
      )}

      {/* Add Item Modal (UI only, not functional) */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
            <h3 className="text-lg font-bold mb-4">Add New Item</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Item Name" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <textarea placeholder="Description" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600" rows={3} />
              <input type="number" placeholder="Price (Rs.)" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="">Select Category</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option value="">Select Restaurant</option>
                {restaurants.map(rest => (
                  <option key={rest.id} value={rest.id}>{rest.name}</option>
                ))}
              </select>
              <input type="number" placeholder="Calories" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <input type="file" accept="image/*" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <div className="flex items-center gap-2">
                <input type="checkbox" id="enabled" className="rounded" />
                <label htmlFor="enabled" className="text-sm text-gray-700">Enabled</label>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:scale-105 transition-transform">
                Add Item
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}