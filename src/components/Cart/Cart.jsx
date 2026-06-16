import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

function Cart(props) {
  return (
    <Modal onClose={props.onClose}>
      <ul className={classes.cartItems}>
        <li>Margherita Pizza x 2</li>
        <li>Cheese Burger x 1</li>
      </ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹797.00</span>
      </div>

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