import { useState } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] =
    useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && (
        <Cart onClose={hideCartHandler} />
      )}

      <Header onShowCart={showCartHandler} />

      <Hero />

      <Menu />
    </>
  );
}

export default App;