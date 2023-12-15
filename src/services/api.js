import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNThiNzAxYTAyZDFlNGE0OGMxNTZlZGVjNDBlZDM0MyIsInN1YiI6IjY1MzY3YjVjYzE0ZmVlMDEzYTRkZDUxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LI5RJBLQnxZmC1ny9dmM7DrcfVGp0VVsepIeC4DKtyk";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
