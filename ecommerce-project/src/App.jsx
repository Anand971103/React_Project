import "./App.css";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import OrdersPage from "./pages/OrdersPage";
import TrackingPage from "./pages/TrackingPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cartItems, setCartItems] = useState();
  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCartItems(response.data);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cartItems={cartItems}/>} />
        <Route path="checkout" element={<CheckoutPage cartItems={cartItems}/>} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Routes>
    </>
  );
}

export default App;
