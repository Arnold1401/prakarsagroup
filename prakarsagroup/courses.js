import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
  },
  reducers: {
    add: (state, action) => {
      let max =
        (state.student.length > 0
          ? state.courses[state.courses.length - 1].id
          : 0) + 1;
      action.payload.id = max;
      state.courses.push(action.payload);
    },
  },
});

export const {} = courseSlice.actions;
export default courseSlice.reducer;
