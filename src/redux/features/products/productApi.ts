import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query<any[], void>({  
            query: () => '/products'
        }),
        getProductById: builder.query({
            query: (productId) => `/products/${productId}`,
        }),
        createProduct: builder.mutation({
            query: (productData) => ({
                url: "/products",
                method: "POST",
                body: productData,
            }),
        }),
        updateProduct: builder.mutation({
            query: ({ productId, updatedData }) => ({
                url: `/products/${productId}`,
                method: "PUT",
                body: updatedData,
            }),
        }),
        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: `/products/${productId}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetAllProductsQuery,
    useGetProductByIdQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productsApi;
export default productsApi;
