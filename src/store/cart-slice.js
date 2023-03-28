import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
    cartItems : [],
    totalQuantity : 0
}

const cartSlice = createSlice({
    name : "cart",
    initialState : cartInitialState,
    reducers : {
        replaceCart(state,action){
            state.cartItems = action.payload.cartItems;
            state.totalQuantity = action.payload.totalQuantity;
        },
        addToCart(state,action){
            const newItem = action.payload;
            state.totalQuantity++;
            const existingItem = state.cartItems.find((cartItem) => cartItem.id === newItem.id);
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
            }else{
                state.cartItems.push({
                   id:newItem.id,
                   title : newItem.title,
                   price:newItem.price,
                   quantity:1,
                   totalPrice : newItem.price,
                   description:newItem.description
                })

            }
        },
        removeFromCart(state,action){
            state.totalQuantity--;
            const ItemToRemove = action.payload;
            const existingItem = state.cartItems.find((itm) => itm.id === ItemToRemove.id);
            if(existingItem.quantity === 1){
                state.cartItems =  state.cartItems.filter(itm => itm.id !== ItemToRemove.id);
                
                
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }

        }
    }
})

export const cartAction = cartSlice.actions;

export default cartSlice;