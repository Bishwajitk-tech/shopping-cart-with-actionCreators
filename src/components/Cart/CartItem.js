import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/cart-slice';

const CartItem = (props) => {
  const {id, title, quantity, total, price,description } = props.item;
  const dispatch = useDispatch();

  const addToCartHandler =() => {
    dispatch(cartAction.addToCart({
      id:id,
      title:title,
      price:price,
      description:description
    }))
  };

  const removeFromCartHandler = () => {
    dispatch(cartAction.removeFromCart({id:id}))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div><h5>{description}</h5></div>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
