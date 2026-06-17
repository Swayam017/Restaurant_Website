import { useContext, useRef } from "react";
import Input from "../UI/Input";
import classes from "./Menu.module.css";
import CartContext from "../../store/cart-context";

function MenuItemForm(props) {
  const amountInputRef = useRef();

  const cartCtx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount =
      +amountInputRef.current.value;

    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: enteredAmount,
      price: props.price,
    });
  };

  return (
    <form
      className={classes.form}
      onSubmit={submitHandler}
    >
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button type="submit">
        + Add
      </button>
    </form>
  );
}

export default MenuItemForm;