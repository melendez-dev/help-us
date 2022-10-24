import { configureStore } from "@reduxjs/toolkit";
import movilSlice from "../features/movil/movilSlice";

export const store = configureStore({
  reducer: {
    movil: movilSlice,
  },
});
