import { useLocation, Link, Navigate } from 'react-router-dom';

const OrderSuccess = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;

  if (!orderDetails) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Order Successful!</h2>
          <p className="mt-2 text-gray-600">Thank you for your purchase</p>
        </div>

        <div className="mt-8">
          <div className="border-t border-gray-200 py-6">
            <h3 className="text-lg font-medium text-gray-900">Order Details</h3>
            <dl className="mt-4 space-y-4">
              <div className="flex justify-between">
                <dt className="text-sm font-medium text-gray-600">Order ID</dt>
                <dd className="text-sm text-gray-900">{orderDetails.orderId}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm font-medium text-gray-600">Product</dt>
                <dd className="text-sm text-gray-900">{orderDetails.product.name}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm font-medium text-gray-600">Quantity</dt>
                <dd className="text-sm text-gray-900">{orderDetails.quantity}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm font-medium text-gray-600">Total Amount</dt>
                <dd className="text-sm font-medium text-gray-900">${orderDetails.total.toFixed(2)}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-8 space-y-4">
            <Link
              to="/products"
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Continue Shopping
            </Link>
            <button
              onClick={() => window.print()}
              className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Print Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;