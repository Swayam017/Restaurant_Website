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

        <p>All our meals are cooked with high-quality ingredients , just in time and 
          of course by experienced chefs</p>
      </div>
    </section>
  );
}

export default Hero;