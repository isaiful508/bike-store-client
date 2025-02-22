import { Link, useSearchParams } from "react-router-dom";
import { useVerifyOrderQuery } from "../../redux/features/orders/orderApi";
import Skeleton from "../../components/Skeleton/Skeleton";


interface OrderData {
  id: number;
  order_id: string;
  currency: string;
  amount: number;
  payable_amount: number;
  discsount_amount: number | null;
  disc_percent: number;
  received_amount: string;
  usd_amt: number;
  usd_rate: number;
  is_verify: number;
  card_holder_name: string | null;
  card_number: string | null;
  phone_no: string;
  bank_trx_id: string;
  invoice_no: string;
  bank_status: string;
  customer_order_id: string;
  sp_code: string;
  sp_message: string;
  name: string;
  email: string;
  address: string;
  city: string;
  value1: string | null;
  value2: string | null;
  value3: string | null;
  value4: string | null;
  transaction_status: string | null;
  method: string;
  date_time: string;
}


const VerifyOrder = () => {
  const [searchParams] = useSearchParams();
  const {data, isLoading} = useVerifyOrderQuery(searchParams.get("order_id"),
  {
    refetchOnMountOrArgChange: true,
  });
  console.log({data});
  const orderData: OrderData = data?.data?.[0];
  const handleVerify = () => {
    // Handle verify order
  };

  // const orderData: OrderData = {
  //   id: 1,
  //   order_id: "123456",
  //   currency: "BDT",
  //   amount: 1000,
  //   payable_amount: 1000,
  //   discsount_amount: null,
  //   disc_percent: 0,
  //   received_amount: "1000.00",
  //   usd_amt: 11.76,
  //   usd_rate: 85.00,
  //   is_verify: 0,
  //   card_holder_name: null,
  //   card_number: null,
  //   phone_no: "01711111111",
  //   bank_trx_id: "123456",
  //   invoice_no: "123456",
  //   bank_status: "Success",
  //   customer_order_id: "123456",
  //   sp_code: "000",
  //   sp_message: "Success",
  //   name: "John Doe",
  //   email: "",
  //   address: "1234 Main St",
  //   city: "Dhaka",
  //   value1: null,
  //   value2: null,
  //   value3: null,
  //   value4: null,
  //   transaction_status: null,
  //   method: "bKash",
  //   date_time: "2021-09-01 12:00:00",
  // };
  
  return (
    isLoading ? <Skeleton/> :
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6">Order Verification</h1>
    <div className="grid gap-6 md:grid-cols-2">
      {/* Order Details */}
      <div className="border rounded-lg shadow-md p-4 bg-white">
        <h2 className="text-xl font-semibold mb-4">Order Details</h2>
        <dl className="grid grid-cols-2 gap-2">
          <dt className="font-semibold">Order ID:</dt>
          <dd>{orderData?.order_id}</dd>
          <dt className="font-semibold">Amount:</dt>
          <dd>{orderData?.currency} {orderData?.amount?.toFixed(2)}</dd>
          <dt className="font-semibold">Status:</dt>
          <dd>
            <span className={`px-2 py-1 rounded text-sm font-medium ${orderData?.bank_status === "Success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
              {orderData?.bank_status}
            </span>
          </dd>
          <dt className="font-semibold">Date:</dt>
          <dd>{new Date(orderData?.date_time)?.toLocaleString()}</dd>
        </dl>
      </div>

      {/* Payment Information */}
      <div className="border rounded-lg shadow-md p-4 bg-white">
        <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
        <dl className="grid grid-cols-2 gap-2">
          <dt className="font-semibold">Method:</dt>
          <dd>{orderData?.method}</dd>
          <dt className="font-semibold">Transaction ID:</dt>
          <dd>{orderData?.bank_trx_id}</dd>
          <dt className="font-semibold">Invoice No:</dt>
          <dd>{orderData?.invoice_no}</dd>
          <dt className="font-semibold">SP Code:</dt>
          <dd>{orderData?.sp_code}</dd>
          <dt className="font-semibold">SP Message:</dt>
          <dd>{orderData?.sp_message}</dd>
        </dl>
      </div>

      {/* Customer Information */}
      <div className="border rounded-lg shadow-md p-4 bg-white">
        <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
        <dl className="grid grid-cols-2 gap-2">
          <dt className="font-semibold">Name:</dt>
          <dd>{orderData?.name}</dd>
          <dt className="font-semibold">Email:</dt>
          <dd>{orderData?.email}</dd>
          <dt className="font-semibold">Phone:</dt>
          <dd>{orderData?.phone_no}</dd>
          <dt className="font-semibold">Address:</dt>
          <dd>{orderData?.address}</dd>
          <dt className="font-semibold">City:</dt>
          <dd>{orderData?.city}</dd>
        </dl>
      </div>

      {/* Verification Status */}
      <div className="border rounded-lg shadow-md p-4 bg-white">
        <h2 className="text-xl font-semibold mb-4">Verification Status</h2>
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 rounded text-sm font-medium ${orderData?.is_verify === 1 ? "bg-green-500 text-white" : "bg-yellow-500 text-black"}`}>
            {orderData?.is_verify === 1 ? "Verified" : "Not Verified"}
          </span>
        </div>
        <div className="mt-4 flex gap-2">
          <Link to="/order">
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">View Orders</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
}; 

export default VerifyOrder;