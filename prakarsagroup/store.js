import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./slice";
import courseReducer from "./courses";

export const store = configureStore({
  reducer: {
    student: studentReducer,
    course: courseReducer,
  },
});
