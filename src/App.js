import "./styles.css";
import { Header, Banner } from "./components";
import { Routes, Route } from "react-router-dom";
import { Cart, Catelog, Checkout, Home, Register, Signin } from "./pages";

export default function App() {
  return (
    <div className="container bg-blue-100 w-full min-w-full">
      <Header />
      <Banner />
      <section className="p-2 bg-white h-full m-20 relative rounded-lg">
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/catelog" element={<Catelog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </section>
    </div>
  );
}
