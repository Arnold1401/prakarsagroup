import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    course: [],
  },
  reducers: {
    add: (state, action) => {
      let max =
        (state.course.length > 0
          ? state.course[state.course.length - 1].id
          : 0) + 1;
      action.payload.id = max;
      state.course.push(action.payload);
    },
    edit: (state, action) => {
      const { id, name } = action.payload;
      for (let i = 0; i < state.course.length; i++) {
        if (state.course[i].id == id) {
          state.course[i].name = name;
        }
      }
    },
  },
});

export const { add, edit } = courseSlice.actions;
export default courseSlice.reducer;
