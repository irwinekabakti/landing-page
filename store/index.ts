import { configureStore } from "@reduxjs/toolkit";

import dataSlice from "./action/user-slice";

export const store = configureStore({
  reducer: {
    dataStore: dataSlice.reducer,
  },
});
