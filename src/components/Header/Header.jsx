import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header({ onShowCart }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        Foodie's Hub
      </h1>

      <HeaderCartButton
        onClick={onShowCart}
      />
    </header>
  );
}

export default Header;