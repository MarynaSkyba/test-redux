import { configureStore } from "@reduxjs/toolkit";
import vacanciesReducer from "./vacancies/vacancies-reducer";

export const store = configureStore({
  reducer: {
    vacancies: vacanciesReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
