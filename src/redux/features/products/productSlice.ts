import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Product = {
    _id: string;
    name: string;
    brand: string;
    image? : string,
    category: string;
    description: string;
    price: number;
    quantity: number;
    inStock: boolean;
    createdAt?: string;
    updatedAt?: string;
};

// Define the initial state type
type ProductsState = {
    products: Product[];
    loading: boolean;
    error: string | null;
}

// Initial state
const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getAllProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        },
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
        updateProduct: (state, action: PayloadAction<Product>) => {
            const index = state.products.findIndex((p) => p._id === action.payload._id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },
        deleteProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter((product) => product._id !== action.payload);
        },
    },
});

export const { getAllProducts, addProduct, updateProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
