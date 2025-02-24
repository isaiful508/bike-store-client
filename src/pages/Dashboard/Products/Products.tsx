import { useState } from 'react';
import { Bike, Edit, Trash2, Save, X } from 'lucide-react';

import { toast } from 'react-toastify';
import { useDeleteProductMutation, useGetAllProductsQuery, useUpdateProductMutation } from '../../../redux/features/products/productApi';

interface Bike {
    _id: string;
    name: string;
    brand: string;
    price: number;
    type: "Mountain" | "Road" | "Hybrid" | "BMX" | "Electric";
    description: string;
    quantity: number;
    inStock: boolean;
}

const Products = () => {
    const { data: products, error, isLoading,refetch } = useGetAllProductsQuery();
    console.log(products);
    const [updateProduct] = useUpdateProductMutation();
    const [editId, setEditId] = useState<string | null>(null);
    const [editData, setEditData] = useState<Partial<Bike>>({});
     //@ts-ignore
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteProduct] = useDeleteProductMutation();

    const deleteProductHandle = async (id: string) => {
        try {
            await deleteProduct(id).unwrap();
            toast.success("Product deleted successfully", { position: 'top-center' });
            refetch()
        } catch (error) {
            console.error("Failed to delete the product:", error);
            toast.error("Failed to delete product.", { position: 'top-center' });
        }
    };

    const handleEditClick = (bike: Bike) => {

        setEditId(bike._id);
        setEditData({ ...bike });
        setIsModalOpen(true);
    };

    const handleInputChange = (field: keyof Bike, value: string | number | boolean) => {
        setEditData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSave = async () => {
        if (!editId) {
            console.error("Error: editId is undefined.");
            toast.error("Error: Product ID is missing.", { position: 'top-center' });
            return;
        }

        try {
       
            await updateProduct({ productId: editId, updatedData: editData }).unwrap();
            toast.success("Product updated successfully", { position: 'top-center' });
            refetch()
        } catch (err) {
            console.error("Error updating product:", err);
            toast.error("Failed to update product.", { position: 'top-center' });
        }
        setIsModalOpen(false);
        setEditId(null);
        setEditData({});
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setEditId(null);
        setEditData({});
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading products</p>;
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <Bike className="w-6 h-6" />
                Manage Products
            </h1>

            {/* Products Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="px-4 py-2 text-left">ID</th>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Brand</th>
                            <th className="px-4 py-2 text-left">Type</th>
                            <th className="px-4 py-2 text-left">Price ($)</th>
                            <th className="px-4 py-2 text-left">Stock</th>
                            <th className="px-4 py-2 text-left">In Stock</th>
                            <th className="px-4 py-2 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {/* @ts-ignore */}
                        {products?.data.map((bike : Bike, index : number) => (
                            <tr key={bike._id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 text-sm text-gray-900">{index + 1}</td>

                                {editId === bike._id ? (
                                    <td colSpan={8} className="px-4 py-3">
                                    {/* Modal for editing product */}
                                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                                        {/* Modal Header */}
                                        <div className="p-6 border-b border-gray-200">
                                          <h2 className="text-2xl font-semibold text-gray-800">Edit Product</h2>
                                        </div>
                                  
                                        {/* Modal Body */}
                                        <div className="p-6 space-y-6">
                                          {/* Name Field */}
                                          <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                            <input
                                              type="text"
                                              value={editData.name as string}
                                              onChange={(e) => handleInputChange("name", e.target.value)}
                                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                            />
                                          </div>
                                  
                                          {/* Brand Field */}
                                          <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
                                            <input
                                              type="text"
                                              value={editData.brand as string}
                                              onChange={(e) => handleInputChange("brand", e.target.value)}
                                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                            />
                                          </div>
                                  
                                          {/* Type Field */}
                                          <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                                            <select
                                              value={editData.type as string}
                                              onChange={(e) => handleInputChange("type", e.target.value)}
                                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                            >
                                              <option value="Mountain">Mountain</option>
                                              <option value="Road">Road</option>
                                              <option value="Hybrid">Hybrid</option>
                                              <option value="BMX">BMX</option>
                                              <option value="Electric">Electric</option>
                                            </select>
                                          </div>
                                  
                                          {/* Price Field */}
                                          <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                                            <input
                                              type="number"
                                              value={editData.price as number}
                                              onChange={(e) => handleInputChange("price", parseFloat(e.target.value))}
                                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                            />
                                          </div>
                                  
                                          {/* Quantity Field */}
                                          <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                                            <input
                                              type="number"
                                              value={editData.quantity as number}
                                              onChange={(e) => handleInputChange("quantity", parseInt(e.target.value))}
                                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                            />
                                          </div>
                                  
                                          {/* In Stock Field */}
                                          <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">In Stock</label>
                                            <select
                                              value={editData.inStock ? "true" : "false"}
                                              onChange={(e) => handleInputChange("inStock", e.target.value === "true")}
                                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                            >
                                              <option value="true">Yes</option>
                                              <option value="false">No</option>
                                            </select>
                                          </div>
                                        </div>
                                  
                                        {/* Modal Footer */}
                                        <div className="p-6 border-t border-gray-200 flex justify-end gap-4">
                                          <button
                                            onClick={handleCancel}
                                            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                                          >
                                            Cancel
                                          </button>
                                          <button
                                            onClick={handleSave}
                                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                                          >
                                            <Save className="w-5 h-5 mr-2" />
                                            Save Changes
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                ) : (
                                    <>
                                        <td className="px-4 py-3 text-sm">{bike.name}</td>
                                        <td className="px-4 py-3 text-sm">{bike.brand}</td>
                                        <td className="px-4 py-3 text-sm">{bike.type}</td>
                                        <td className="px-4 py-3 text-sm">${bike.price.toFixed(2)}</td>
                                        <td className="px-4 py-3 text-sm">{bike.quantity}</td>
                                        <td className="px-4 py-3 text-sm">{bike.inStock ? "✔️ Yes" : "❌ No"}</td>
                                    </>
                                )}

                                <td className="px-4 py-3 text-right">
                                    {editId === bike._id ? (
                                        <div className="flex gap-2">
                                            <button onClick={handleSave} className="text-green-600 hover:text-green-900">
                                                <Save className="w-5 h-5" />
                                            </button>
                                            <button onClick={handleCancel} className="text-gray-600 hover:text-gray-900">
                                                <X className="w-5 h-5" />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="flex gap-2">
                                            <button onClick={() => handleEditClick(bike)} className="text-blue-600 hover:text-blue-900">
                                                <Edit className="w-5 h-5" />
                                            </button>
                                           
                                            <button onClick={()=>deleteProductHandle(bike._id)} className="text-red-600 hover:text-red-900">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;
