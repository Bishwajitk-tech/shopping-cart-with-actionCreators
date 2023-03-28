import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {

  const cartItems = useSelector((state) => state.cart)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.cartItems.map((cartItm) => (
           <CartItem
           item={{ 
             id : cartItm.id,
             title: cartItm.title, 
            quantity: cartItm.quantity, 
            total: cartItm.totalPrice, 
            price: cartItm.price, 
            description:cartItm.description 
          }}
         />
        ))}
       
      </ul>
    </Card>
  );
};

export default Cart;
