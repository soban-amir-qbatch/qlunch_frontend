'use client';
import { useState, useEffect } from 'react';
import { Plus, Search, Filter, Edit, Eye, X, Trash2, Tag } from 'lucide-react';

type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

type FilterPeriod = 'all' | 'recent' | 'alphabetical';

export default function CategoryManagement() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/`);
        if (!response.ok) {
          throw new Error(`Failed to fetch categories: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        // Support both array and paginated response
        if (Array.isArray(data)) {
          setCategories(data);
        } else if (data && Array.isArray(data.results)) {
          setCategories(data.results);
        } else if (data && typeof data === 'object') {
          setCategories([data]);
        } else {
          throw new Error('Invalid data format received from API');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching categories');
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const [filterPeriod, setFilterPeriod] = useState<FilterPeriod>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState<{ isOpen: boolean; category: Category | null; hasChanges: boolean }>({
    isOpen: false,
    category: null,
    hasChanges: false
  });
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; categoryId: string; name: string }>({
    isOpen: false,
    categoryId: '',
    name: ''
  });

  const filteredCategories = (categories || []).filter(category =>
    category?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category?.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category?.slug?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteCategory = async (id: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}/`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete category');
      }

      setCategories(prev => prev.filter(category => category.id !== id));
    } catch (err) {
      console.error('Error deleting category:', err);
    }
  };

  return (
    <div className="space-y-6 px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Category Management</h2>
          <p className="text-sm sm:text-base text-gray-600">Manage food categories and classifications</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="w-full sm:w-auto bg-black text-white px-5 py-2.5 rounded-lg flex items-center justify-center sm:justify-start gap-2 hover:bg-gray-800 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Category
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <div className="relative w-full sm:flex-1 sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search categories..."
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
              <option value="all">All Categories</option>
              <option value="recent">Recently Added</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModal.isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setDeleteModal({ isOpen: false, categoryId: '', name: '' })}></div>
          <div className="relative flex items-center justify-center min-h-screen p-4">
            <div className="bg-white rounded-xl p-6 max-w-sm w-full mx-auto shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Delete Category</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete "{deleteModal.name}"? This action cannot be undone.
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setDeleteModal({ isOpen: false, categoryId: '', name: '' })}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    deleteCategory(deleteModal.categoryId);
                    setDeleteModal({ isOpen: false, categoryId: '', name: '' });
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

      {/* Category Grid */}
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="text-gray-500">Loading categories...</div>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center py-12">
          <div className="text-red-500">Error: {error}</div>
        </div>
      ) : filteredCategories.length === 0 ? (
        <div className="flex justify-center items-center py-12">
          <div className="text-gray-500">
            {searchTerm ? 'No categories found matching your search.' : 'No categories found.'}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group relative">
              {/* Trash Icon Top Right */}
              <div className="absolute top-3 right-3 z-10">
                <button
                  onClick={() => setDeleteModal({ isOpen: true, categoryId: category.id, name: category.name })}
                  className="p-2 rounded-full bg-white text-gray-600 hover:bg-red-500 hover:text-white transition-all shadow-lg"
                  title="Delete Category"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              {/* Card Content Only: Name, Slug, Description */}
              <div className="px-5 pt-10 pb-5">
                <div className="text-center mb-3">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 break-words">{category.name}</h3>
                  <p className="text-sm text-blue-600 font-medium">/{category.slug}</p>
                </div>
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {category.description || "No description available"}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm font-medium">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button 
                    onClick={() => setShowEditModal({ isOpen: true, category, hasChanges: false })}
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
      
      {/* Edit Category Modal */}
      {showEditModal.isOpen && showEditModal.category && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md mx-auto max-h-[80vh] flex flex-col shadow-2xl">
            {/* Fixed Header */}
            <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-100 shrink-0">
              <h3 className="text-xl font-bold text-gray-900">Edit Category</h3>
              <button
                onClick={() => setShowEditModal({ isOpen: false, category: null, hasChanges: false })}
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
                    Category Name
                  </label>
                  <input
                    type="text"
                    defaultValue={showEditModal.category.name}
                    placeholder="Enter category name"
                    onChange={(e) => {
                      if (e.target.value !== showEditModal.category?.name) {
                        setShowEditModal(prev => ({ ...prev, hasChanges: true }));
                      }
                    }}
                    className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 transition-all"
                  />
                </div>

                {/* Slug */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">Slug</label>
                  <input
                    type="text"
                    defaultValue={showEditModal.category.slug}
                    placeholder="enter-category-slug"
                    onChange={(e) => {
                      if (e.target.value !== showEditModal.category?.slug) {
                        setShowEditModal(prev => ({ ...prev, hasChanges: true }));
                      }
                    }}
                    className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 transition-all"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">Description</label>
                  <textarea
                    defaultValue={showEditModal.category.description}
                    placeholder="Enter category description"
                    rows={3}
                    onChange={(e) => {
                      if (e.target.value !== showEditModal.category?.description) {
                        setShowEditModal(prev => ({ ...prev, hasChanges: true }));
                      }
                    }}
                    className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 resize-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Fixed Footer */}
            <div className="p-6 pt-4 border-t border-gray-100 shrink-0">
              <div className="flex gap-3">
                <button
                  onClick={() => setShowEditModal({ isOpen: false, category: null, hasChanges: false })}
                  className="flex-1 px-6 py-3 text-base font-medium border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  disabled={!showEditModal.hasChanges}
                  className={`flex-1 px-6 py-3 text-base font-medium rounded-xl transition-all ${
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

      {/* Add Category Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md mx-auto max-h-[80vh] flex flex-col shadow-2xl">
            {/* Fixed Header */}
            <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-100 shrink-0">
              <h3 className="text-xl font-bold text-gray-900">Add New Category</h3>
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
                    Category Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter category name"
                    className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 transition-all"
                  />
                </div>

                {/* Slug */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">
                    Slug <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="enter-category-slug"
                    className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 transition-all"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-800">Description</label>
                  <textarea
                    placeholder="Enter category description"
                    rows={3}
                    className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-400 resize-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Fixed Footer */}
            <div className="p-6 pt-4 border-t border-gray-100 shrink-0">
              <div className="flex gap-3">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-6 py-3 text-base font-medium border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 px-6 py-3 text-base font-medium bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
                  Add Category
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}