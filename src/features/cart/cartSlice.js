import { createSlice } from "@reduxjs/toolkit"

const initialeState = {
    items:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialeState,
    reducers: {
        addToCart:(state,action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
             if(existingItem){
                existingItem.quantity++ ; 
             }else{
                state.items.push({...action.payload,quantity:1});
             }
        }
    }
})

export const {addToCart} = createSlice.actions ; 
export default cartSlice.reducer; 