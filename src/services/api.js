import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN = import.meta.env.MOVIE_APP_TMDB_TOKEN;
const headers = {
  Authorization: 'Bearer' + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
