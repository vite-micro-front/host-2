import { configureStore, combineSlices } from "@reduxjs/toolkit";

export const rootReducer = combineSlices();
export const store = configureStore({
  reducer: rootReducer,
});
