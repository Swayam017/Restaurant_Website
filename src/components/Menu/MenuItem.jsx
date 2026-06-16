import classes from "./Menu.module.css";
import MenuItemForm from "./MenuItemForm";

function MenuItem({ item }) {
  return (
    <div className={classes.menuItem}>
      <img
        src={item.image}
        alt={item.name}
        className={classes.foodImage}
      />

      <div className={classes.info}>
        <h3>{item.name}</h3>

        <p>{item.description}</p>

        <span className={classes.price}>
          ₹{item.price.toFixed(2)}
        </span>
      </div>

      <MenuItemForm id={item.id} />
    </div>
  );
}

export default MenuItem;