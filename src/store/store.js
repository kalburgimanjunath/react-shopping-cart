import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./redux/CounterSlice";

export default configureStore({
  reducer: { counter: counterSlice.reducer },
});
