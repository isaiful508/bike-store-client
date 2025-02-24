import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useGetProductByIdQuery } from '../../redux/features/products/productApi';
import { useCurrentUser } from '../../redux/features/auth/authSlice';
import { useAppSelector } from '../../redux/hooks';
import { useCreateOrderMutation } from '../../redux/features/orders/orderApi';


export type IUser = {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: "customer" | "admin";
  phone?: string;
  address?: string;
  city?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const Checkout = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);
  const product = data?.data;

  // const user = useAppSelector(useCurrentUser);
  const user: IUser | null = useAppSelector(useCurrentUser) as IUser | null;
  const [createOrder, {data: order, isSuccess, isLoading}] = useCreateOrderMutation();
  console.log({order});

  useEffect(() => {
    if(isSuccess) {
      if(order?.data) {
        window.location.href = order?.data;
      }
    }
  },[isLoading, isSuccess, order?.data]);

  const {
    register,
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      quantity: 1
    },
  });

  const quantity = watch('quantity');
  const total = product?.price * quantity;

  const onSubmit = async (data: any) => {

    const payload = {
      data: {
        user: user?.id ?? "",
        products: [
          {
            product: product?._id,
            quantity: data.quantity,
          }
        ]
      },
    };
    try {
      setIsProcessing(true);
      await createOrder(payload).unwrap();
    } catch (error) {
      console.error(error);
    } finally {
      setIsProcessing(false);
    }

    console.log(payload);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Checkout</h1>
          <p className="mt-2 text-gray-600">Complete your purchase</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Product Summary */}
          <div className="border-b border-gray-200 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt={product?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-6 flex-1">
                <h3 className="text-lg font-medium text-gray-900">{product?.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product?.brand}</p>
                <p className="mt-1 text-sm text-gray-500">{product?.category}</p>
                <p className="mt-1 text-lg font-medium text-gray-900">${product?.price}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              {/* Customer Details */}
              <div className="sm:col-span-2">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Customer Details</h3>
              </div>

              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  value={user?.name}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={user?.email}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={user?.phone}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  value={user?.address}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  value={user?.city}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              {/* Order Details */}
              <div className="sm:col-span-2 mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Order Details</h3>
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <input
                  type="number"
                  min="1"
                  {...register('quantity', { valueAsNumber: true })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              {/* Payment Method */}
              <div className="sm:col-span-2 mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      value="surjopay"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      checked
                      readOnly
                    />
                    <label htmlFor="surjopay" className="ml-3">
                      <span className="block text-sm font-medium text-gray-700">SurjoPay</span>
                      <span className="block text-sm text-gray-500">Pay securely with SurjoPay payment gateway</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="sm:col-span-2 mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>
                <div className="bg-gray-50 rounded-lg p-4">


                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="text-lg font-medium text-gray-900">Total</span>
                      <span className="text-lg font-medium text-gray-900">${total.toFixed(2)}</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isProcessing ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Place Order'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;