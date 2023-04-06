import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    vendorType: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setVendorType: (state, action) => {
            state.vendorType = action.payload;
        }
    }
})

export const { } = authSlice.actions;
export default authSlice.reducer