import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name : "ui",
    initialState : {isCartVisible : false, notification:""},
    reducers : {
        toggleCart(state){
            state.isCartVisible = !state.isCartVisible
        },
        showNotification(state,action){
            const notificationDetails = action.payload;
            state.notification = {
                title : notificationDetails.title,
                message: notificationDetails.message,
                status : notificationDetails.status
            }
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;

