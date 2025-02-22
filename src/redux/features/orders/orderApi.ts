import { baseApi } from "../../api/baseApi";

const ordersApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (orderData) => ({
                url: "/create-order",
                method: "POST",
                body: orderData,
            }),
        }),
        verifyPayment: builder.query({
            query: (orderId) => `/order/verify?order_id=${orderId}`,
        }),
        getTotalRevenue: builder.query({
            query: () => "/orders/revenue",
        }),
        getAllOrders: builder.query({
            query: () => "/orders",
        }),
    }),
});

export const {
    useCreateOrderMutation,
    useVerifyPaymentQuery,
    useGetTotalRevenueQuery,
    useGetAllOrdersQuery,
} = ordersApi;

export default ordersApi;
