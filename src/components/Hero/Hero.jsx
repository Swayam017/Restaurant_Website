import classes from "./Hero.module.css";
import heroImage from "../../assets/Hero.jpg";

function Hero() {
  return (
    <section
      className={classes.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className={classes.overlay}>
        <h2>Delicious Food Delivered To You</h2>

        <p>
          Choose your favorite meals from our broad selection
          of available dishes and enjoy a delicious lunch or
          dinner at home.
        </p>

        <button>Order Now</button>
      </div>
    </section>
  );
}

export default Hero;