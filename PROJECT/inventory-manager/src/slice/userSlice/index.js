import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },

    removeUser: (state, action) => {
      let arr = [];
      state.user = arr;
    },
  },
});
export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
