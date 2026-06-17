import classes from "./Header.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

function HeaderCartButton({ onClick }) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems =
    cartCtx.items.reduce(
      (currentNumber, item) => {
        return currentNumber + item.amount;
      },
      0
    );

  return (
    <button
      className={classes.button}
      onClick={onClick}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>

      <span>Your Cart</span>

      <span className={classes.badge}>
        {numberOfCartItems}
      </span>
    </button>
  );
}

export default HeaderCartButton;