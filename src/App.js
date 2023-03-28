import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch,useSelector} from 'react-redux';
import {useEffect} from "react";
import Notification from "./components/UI/Notification";
import {sendCartData, fetchCartData} from "./store/cart-actions"
let initial = true;

function App() {

  const isCartShow = useSelector((state) => state.ui);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  },[dispatch])

  useEffect(() => {
    // const sendCartData = async() => {
    //   dispatch(uiActions.showNotification({
    //     title:"request processing!!",
    //     message : "sending cart in process...",
    //     status : "pending"
    //   }))
    //   const response = await fetch("https://react-my-burger-c088e-default-rtdb.firebaseio.com/cartItem.json",{
    //     method : "PUT",
    //     body : JSON.stringify(cart)
    //   })
    //   if(!response.ok){
    //     throw new Error("can't send data to DB!!!")
    //   }
    //   dispatch(uiActions.showNotification({
    //     title:"request processed!!",
    //     message : "cart sent successfully...",
    //     status : "success"
    //   }))

    //  const data = await response.json();
    // }
    if(initial){
      initial=false;
      return;
    }
    // sendCartData().catch(error => {
    //   dispatch(uiActions.showNotification({
    //     title:"error in request!!",
    //     message : "sending cart failed...",
    //     status : "error"
    //   }))
    // })
    
    dispatch(sendCartData(cart));
  },[cart,dispatch]);

  return (
    <>
    <Notification 
    title={isCartShow.notification.title} 
    message={isCartShow.notification.message}
    status={isCartShow.notification.status}
    />
    <Layout>
     {isCartShow.isCartVisible && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
