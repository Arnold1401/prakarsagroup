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
    edit: (state, action) => {
      const { id, name, date } = action.payload;
      for (let i = 0; i < state.student.length; i++) {
        if (state.student[i].id == id) {
          state.student[i].name = name;
          state.student[i].date = date;
        }
      }
    },
    decrement: (state) => state.student - 1,
  },
});

export const { increment, decrement, add, edit } = studentSlice.actions;
export default studentSlice.reducer;
