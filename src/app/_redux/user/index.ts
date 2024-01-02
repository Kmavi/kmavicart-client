import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserState {
  user: any;
  token: null;
  status: "idle" | "success" | "error";
  error: null | Error | any;
}

const initialState: UserState = {
  user: null,
  token: null,
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state = initialState;
    },
  },
  extraReducers(builder) {},
});

const userState = userSlice.reducer;
export const { clearUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.userState.user;
export const selectToken = (state: RootState) => state.userState.token;
export const selectUserStatus = (state: RootState) => state.userState.status;
export const selectUserError = (state: RootState) => state.userState.error;

export default userState;
