import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsThunk = createAsyncThunk('api/products', async () => {
    const response = await axios.get("https://dummyjson.com/products")
    return response.data.products
})

export const postBasketThunk = createAsyncThunk('api/basket/post', async (data) => {
    const response = axios.post("http://localhost:5800/basket",data)
    return data
})

export const postWishlistThunk = createAsyncThunk('api/wishlist/post', async (data) => {
    const response = axios.post("http://localhost:5800/wishlist",data)
    return data
})

export const productsSlice = createSlice({
    name: 'products',
    initialState:{
        products:[]
    },
    reducer:[],
    extraReducers:builder => {
        builder

        //getProdyucts to home
        .addCase(getProductsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        .addCase(getProductsThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(getProductsThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        //postBasket
        .addCase(postBasketThunk.fulfilled, (state, action) => {
            state.loading = false
        }) 
        .addCase(postBasketThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(postBasketThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        
        //postwish
        .addCase(postWishlistThunk.fulfilled, (state, action) => {
            state.loading = false
        })
        .addCase(postWishlistThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(postWishlistThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default productsSlice.reducer