import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 0,
      title: "",
      image: "",
      description: "",
      quantity: 0,
      price: 0,
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => {
        item.id !== action.payload;
      });
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
