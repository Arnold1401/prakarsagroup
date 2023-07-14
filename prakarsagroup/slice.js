import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    student: [],
  },
  reducers: {
    increment: (state) => {
      state.student = state.student + 1;
    },
    add: (state, action) => {
      let max =
        (state.student.length > 0
          ? state.student[state.student.length - 1].id
          : 0) + 1;
      action.payload.id = max;
      state.student.push(action.payload);
    },
    decrement: (state) => state.student - 1,
  },
});

export const { increment, decrement, add } = studentSlice.actions;
export default studentSlice.reducer;
