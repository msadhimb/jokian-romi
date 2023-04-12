import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getMovieList = async () => {
  const movie = await axios.get(
    `${baseUrl}/movie/popular?page=1&api_key=${apiKey}`
  );
  console.log({ movieList: movie });
  return movie.data.results;
};

export const getMovieDetail = async (id) => {
  const detail = await axios.get(
    `${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`
  );
  return detail.data;
};

export const getMovieGenre = async () => {
  const genre = await axios.get(
    `${baseUrl}/genre/movie/list?page=1&api_key=${apiKey}`
  );
  console.log(genre.data.genres);
  return genre.data.genres;
};

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`
  );
  return search.data;
};
