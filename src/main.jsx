import ReactDOM from "react-dom/client";
import App from "./App";
import CartProvider from "./store/CartProvider";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <CartProvider>
    <App />
  </CartProvider>
);