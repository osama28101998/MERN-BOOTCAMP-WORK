import { createSlice } from "@reduxjs/toolkit";

var initialState = {
  student: [],
};

export const StudentSlice = createSlice({
  name: "Studentdata",
  initialState,
  reducers: {
    Addstudentrecord: (state, action) => {
      //console.log(action.payload);
      let arr = [...state.student];
      arr.push(action.payload);
      state.student = arr;
      return state;
    },
  },
});

export default StudentSlice.reducer;
