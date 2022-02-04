import { createAsyncThunk } from "@reduxjs/toolkit";

import * as API from "../../service/serviceApi";

export const fetchVacanciesAction = createAsyncThunk(
  "vacancies/fetchVacancies",
  async () => {
    const data = await API.fetchVacancies();
    return data;
  }
);

export const getFilteredVacancies = createAsyncThunk(
  "vacancies/getFilteredVacancies",
  async (state) => {
    const data = await API.filteredPhoto(state);
    return data;
  }
);
