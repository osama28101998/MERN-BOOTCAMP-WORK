import { configureStore } from "@reduxjs/toolkit";
import Studentslice from "./Slice/Studentslice";
export const store = configureStore({
  reducer: {
    studentform: Studentslice,
  },
});
