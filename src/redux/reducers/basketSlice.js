import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBasketProductsThunk = createAsyncThunk('api/basket', async () => {
    const response = axios.get('http://localhost:4000/basket')
    return response.data
})

export const basketSlice = createSlice({
    name: basket,
    initialState:{
        products: []
    },
    reducer:[],
    extraReducers:builder => {
        builder

        .addCase(getBasketProductsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        .addCase(getBasketProductsThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(getBasketProductsThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})