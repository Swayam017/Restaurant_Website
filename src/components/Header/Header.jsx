import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Foodie's Hub</h1>

      <button className={classes.cartBtn}>
        🛒 Cart
      </button>
    </header>
  );
}

export default Header;