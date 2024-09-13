import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductState {
  products: Product[];
}

const dummyProducts = [
  {
    id: 1,
    name: 'Wireless Earbuds',
    price: 29.99,
  },
  {
    id: 2,
    name: 'Smartphone Case',
    price: 15.49,
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 45.99,
  },
  {
    id: 4,
    name: 'Laptop Stand',
    price: 39.95,
  },
  {
    id: 5,
    name: 'Portable Charger',
    price: 24.99,
  },
  {
    id: 6,
    name: 'Gaming Mouse',
    price: 49.99,
  },
  {
    id: 7,
    name: 'USB-C Cable',
    price: 9.99,
  },
];

const initialState: ProductState = {
  products: dummyProducts,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.unshift(action.payload);
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        product => product.id !== action.payload,
      );
    },
  },
});

export const {addProduct, deleteProduct} = productSlice.actions;
export default productSlice.reducer;
