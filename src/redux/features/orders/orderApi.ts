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
        verifyOrder: builder.query({
            query: (order_id) => ({
              url: "/order/verify",
              params: { order_id },
              method: "GET",
            }),
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
    useVerifyOrderQuery,
    useGetTotalRevenueQuery,
    useGetAllOrdersQuery,
} = ordersApi;

export default ordersApi;
