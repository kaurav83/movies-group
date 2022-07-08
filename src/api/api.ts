// Core
import axios, { AxiosResponse } from 'axios';

// Instruments
import { MOVIES_API_URL } from './config';
import { IGalleryModel, IMoviesModel, IReview, ISimilarMovie } from '../types';

export const api = Object.freeze({
  async fetchMovieDetails(movieId: number) {
    const { data } = await axios.get(`${MOVIES_API_URL}/movies/movie-details/${movieId}`);

    return data.data;
  },

  async fetchTopRated(page = 'page=1') {
    const { data } = await axios.get(`${MOVIES_API_URL}/movies/top-rated?${page}`);

    return data.data;
  },
  async fetchRecommendedMovies(movieId: number) {
    const { data } = await axios.get(`${MOVIES_API_URL}/movies/${movieId}/recommendations`);

    return data.data;
  },
  async fetchPopularMovies(page: string): Promise<IMoviesModel[]> {
    const url = `${MOVIES_API_URL}/movies/popular-movies`;
    const params = {
      page,
    };
    const { data } = await axios.request<AxiosResponse<IMoviesModel[]>>({
      method: 'get',
      url,
      params,
    });

    return data.data;
  },
  async getLatestFilms() {
    const { data } = await axios.get(`${MOVIES_API_URL}/movies/latest-movie`);

    return data.data;
  },
  async getReviews(movieId: number): Promise<IReview[]> {
    const { data } = await axios.get<AxiosResponse<IReview[]>>(
      `${MOVIES_API_URL}/movies/${movieId}/reviews`,
    );

    return data.data;
  },
  async fetchMovieImages(movieId: string): Promise<IGalleryModel> {
    const url = `${MOVIES_API_URL}/movies/${movieId}/images`;
    const { data } = await axios.get<IGalleryModel>(url);

    return data;
  },

  async fetchTrendingMoviesTime(period: string) {
    const { data } = await axios.get(`${MOVIES_API_URL}/movies/trending/movie/${period}`);

    return data.data;
  },
  async fetchSimilarMovie(movieId: string): Promise<ISimilarMovie[]> {
    const { data } = await axios.get<AxiosResponse<ISimilarMovie[]>>(
      `${MOVIES_API_URL}/movies/${movieId}/similar`,
    );

    return data.data;
  },
});
