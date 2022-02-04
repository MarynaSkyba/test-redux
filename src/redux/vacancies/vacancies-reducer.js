import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchVacanciesAction,
  getFilteredVacancies,
} from "./vacancies-operation";

const entities = createReducer([], {
  [fetchVacanciesAction.fulfilled]: (_state, { payload }) => payload.results,
  [getFilteredVacancies.fulfilled]: (_state, { payload }) => payload,
});

export default combineReducers({ entities });
