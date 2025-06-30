import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/UserSclice";

export const store = configureStore({
  auth: authReducer,
});
