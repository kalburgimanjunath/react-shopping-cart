import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value++;
    },
    // todoToggled(state, action) {
    //   const todo = state.find((todo) => todo.id === action.payload);
    //   todo.completed = !todo.completed;
    // },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
