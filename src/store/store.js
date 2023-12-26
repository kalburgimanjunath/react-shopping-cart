import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./redux/CounterSlice";
import { cartSlice } from "./redux/CartSlice";
export default configureStore({
  reducer: { counter: counterSlice.reducer, cart: cartSlice.reducer },
});
