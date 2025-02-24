import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bike, DollarSign, Package, ShoppingCart, Tag, Type } from "lucide-react";
import { z } from "zod";
import { ProductValidation } from "./ProductValidation";
import { toast } from "react-toastify";
import { useCreateProductMutation } from "../../../redux/features/products/productApi";
import Skeleton from "../../../components/Skeleton/Skeleton";

// Define product form schema using Zod
type ProductForm = z.infer<typeof ProductValidation>;

const AddProduct = () => {
  const [createProduct, { isLoading }] = useCreateProductMutation();

  // Use React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductForm>({
    resolver: zodResolver(ProductValidation),
  });

  const onSubmit = async (data: ProductForm) => {
    try {
      const response = await createProduct({data}).unwrap();
      console.log({response});
     
      if(response.success) {
        toast.success("Product added successfully", { position: "top-center" });
      }
      // Reset form after success
      reset();
    } catch (err) {
      toast.error("Error adding product");
      console.error(err);
    }
  };

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className="w-full h-screen mx-auto">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Bike className="h-6 w-6" />
            Add New Product
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Product Name */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <Tag className="h-4 w-4" />
                Product Name
              </label>
              <input
                type="text"
                {...register("name")}
                className={`w-full px-3 py-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
            </div>

            {/* Brand */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <Type className="h-4 w-4" />
                Brand
              </label>
              <input
                type="text"
                {...register("brand")}
                className={`w-full px-3 py-2 border ${errors.brand ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.brand && <p className="text-sm text-red-500">{errors.brand.message}</p>}
            </div>

            {/* Price */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <DollarSign className="h-4 w-4" />
                Price
              </label>
              <input
                type="number"
                {...register("price", { valueAsNumber: true })}
                min="0"
                step="0.01"
                className={`w-full px-3 py-2 border ${errors.price ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.price && <p className="text-sm text-red-500">{errors.price.message}</p>}
            </div>

            {/* Type */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <Package className="h-4 w-4" />
                Type
              </label>
              <select
                {...register("category")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Road">Road</option>
                <option value="Mountain">Mountain</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Electric">Electric</option>
              </select>
              {/* {errors.type && <p className="text-sm text-red-500">{errors.type.message}</p>} */}
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                {...register("description")}
                rows={3}
                className={`w-full px-3 py-2 border ${errors.description ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
            </div>

            {/* Quantity */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <ShoppingCart className="h-4 w-4" />
                Quantity
              </label>
              <input
                type="number"
                {...register("quantity", { valueAsNumber: true })}
                min="0"
                className={`w-full px-3 py-2 border ${errors.quantity ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.quantity && <p className="text-sm text-red-500">{errors.quantity.message}</p>}
            </div>

            {/* In Stock Checkbox */}
            <div className="flex items-center">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("inStock")}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">In Stock</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? "Adding Product..." : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
