const apiUrl = "https://api.themoviedb.org/3";

const fetchMovieApi = async (pathName, query = "") => {
  try {
    const response = await fetch(
      `${apiUrl}${pathName}?api_key=${process.env.TMDB_API_KEY}${query}`
    );
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

const getSingleCategory = async (genreId) => {
  return fetchMovieApi(
    `/discover/movie`,
    `&with_genres=${genreId}&language=en-US&page=1`
  );
};
const getCategories = async () => {
  return fetchMovieApi(`/genre/movie/list`, `&language=en-US`);
};
const getTopRatedMovies = async () => {
  return fetchMovieApi(`/movie/top_rated`, `&language=en-US&page=1`);
};
const getPopularMovies = async () => {
  return fetchMovieApi(`/movie/popular`, `&language=en-US&page=1`);
};

const getMovie = async (movieId) => {
  return fetchMovieApi(`/movie/${movieId}`, `&language=en-US&page=1`);
};

export {
  fetchMovieApi,
  getSingleCategory,
  getCategories,
  getTopRatedMovies,
  getPopularMovies,
  getMovie,
};
