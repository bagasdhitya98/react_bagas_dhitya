import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/authSlice";
import modeReducer from "./features/modeSlice";
import cartReducer from "./features/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    mode: modeReducer,
    cart: cartReducer,
  },
});

export default store;
