import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import AIRecommendations from "../AI/AIRecommendations";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount =
    `₹${cartCtx.totalAmount.toFixed(2)}`;

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes.cartItems}>
         {cartCtx.items.length === 0 && (
    <p>Your cart is empty.</p>
  )}
        {cartCtx.items.map((item) => (
          <li
  key={item.id}
  className={classes.cartItem}
>
  <div>
    <h3>{item.name}</h3>

    <div className={classes.summary}>
      <span className={classes.price}>
        ₹{item.price.toFixed(2)}
      </span>

      <span className={classes.amount}>
        x {item.amount}
      </span>
    </div>
  </div>

  <div className={classes.itemActions}>
    <button
      onClick={() =>
        cartCtx.removeItem(item.id)
      }
    >
      −
    </button>

    <button
      onClick={() =>
        cartCtx.addItem({
          ...item,
          amount: 1,
        })
      }
    >
      +
    </button>
  </div>
</li>
        ))}
      </ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <AIRecommendations />

      <div className={classes.actions}>
        <button
          className={classes.buttonAlt}
          onClick={props.onClose}
        >
          Close
        </button>

        <button className={classes.button}>
          Order
        </button>
      </div>
    </Modal>
  );
}

export default Cart;