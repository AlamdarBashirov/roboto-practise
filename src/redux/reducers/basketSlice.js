import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBasketProductsThunk = createAsyncThunk('api/products/basket', async () => {
    const response = await axios.get('http://localhost:5800/basket')
    return response.data
})

export const deleteProductsBasketThunk = createAsyncThunk('api/basket/delete', async (id) => {
    const response = await axios.delete(`http://localhost:5800/basket/${id}`)
    return id
})

export const basketSlice = createSlice({
    name: 'basket',
    initialState:{
        basket: []
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

        //delete
        
    }
})

export default basketSlice.reducer