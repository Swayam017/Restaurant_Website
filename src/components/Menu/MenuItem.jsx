import classes from "./Menu.module.css";

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

      <div className={classes.actions}>
        <label>Amount</label>

        <input
          type="number"
          min="1"
          defaultValue="1"
        />

        <button>+ Add</button>
      </div>
    </div>
    
  );
}

export default MenuItem;