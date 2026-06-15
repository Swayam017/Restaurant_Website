import classes from "./Menu.module.css";
import MenuItem from "./MenuItem";
import pizzaImg from "../../assets/Margerita_Pizza.jpg";
import burgerImg from "../../assets/Cheese_Burger.jpg";
import pastaImg from "../../assets/WhiteSauce_Pasta.jpg";
import Card from "../UI/Card";
const MENU_ITEMS = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic Italian pizza with mozzarella",
    price: 299,
    image: pizzaImg,
  },
  {
    id: 2,
    name: "Cheese Burger",
    description: "Juicy grilled cheese Aloo tikki burger",
    price: 199,
    image: burgerImg,
  },
  {
    id: 3,
    name: "White Sauce Pasta",
    description: "Rich Creamy Spaghetti with veggies",
    price: 249,
    image: pastaImg,
  },
];

function Menu() {
  return (
    <section className={classes.menu}>
        <Card>
      <ul className={classes.menuList}>
        {MENU_ITEMS.map((item) => (
          <li key={item.id}>
            <MenuItem item={item} />
          </li>
        ))}
      </ul>
      </Card>
    </section>
  );
}

export default Menu;