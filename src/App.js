import "./styles.css";
import { Header, Banner } from "./components";
import { Routes, Route } from "react-router-dom";
import {
  About,
  Books,
  Cart,
  Catelog,
  Checkout,
  Home,
  Register,
  Signin,
} from "./pages";
import { useState } from "react";
import { CartContext } from "./context/CartContext";
export default function App() {
  const [cart] = useState([]);
  return (
    <div className="container bg-blue-100 w-full min-w-full">
      <Header />
      <Banner />
      <section className="p-2 h-full m-20 relative rounded-lg flex justify-center align-center">
        <CartContext.Provider value={cart}>
          <Routes>
            <Route path="/books" element={<Books />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/catelog" element={<Catelog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </CartContext.Provider>
      </section>
    </div>
  );
}
