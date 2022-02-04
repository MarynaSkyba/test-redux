import axios from "axios";

export const fetchVacancies = async () => {
  const response = await axios.get(
    "http://135.181.30.244:27007/api/summaries/"
  );
  return response.data;
};

export const filteredPhoto = async (state) => {
  const { data } = await axios.get(
    `http://135.181.30.244:27007/api/summaries/?photo=${state}`
  );
  return data.results;
};
