
import { uiActions } from "./ui-slice";
import { cartAction } from "./cart-slice";

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            title:"request processing!!",
            message : "sending cart in process...",
            status : "pending"
          }));

          const sendRequest = async() => {
            const response = await fetch("https://react-my-burger-c088e-default-rtdb.firebaseio.com/cartItem.json",{
                method : "PUT",
                body : JSON.stringify(cart)
            });
            if(!response.ok){
                throw new Error("failed to send data in cart!!!")
            }
            const data = await response.json();
          }
          try{
              await sendRequest();
              dispatch(uiActions.showNotification({
                    title:"request processed!!",
                    message : "cart sent successfully...",
                   status : "success"
                 }))
          }
          catch(error){
            dispatch(uiActions.showNotification({
                title:"error in request!!",
                message : "sending cart failed...",
                status : "error"
              }))
          }
    }
}

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchCart = async () => {
            const response = await fetch("https://react-my-burger-c088e-default-rtdb.firebaseio.com/cartItem.json");

            if(!response.ok) {
                throw new Error("Error in fetching data!!!")
            }
            const data = await response.json();
            return data;
        }
        try{
            const itemsInCart = await fetchCart();
            dispatch(cartAction.replaceCart({
                cartItems : itemsInCart.cartItems || [],
                totalQuantity : itemsInCart.totalQuantity || 0
            }));
        }
        catch(error){

        }
       
    }
}