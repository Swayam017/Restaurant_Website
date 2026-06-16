import Input from "../UI/Input";
import classes from "./Menu.module.css";

function MenuItemForm({ id }) {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: `amount_${id}`,
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