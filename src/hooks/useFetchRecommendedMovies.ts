import { useQuery } from 'react-query';
import { api } from '../api';

export const useFetchRecommendedMovies = (movieId: number) =>
  useQuery(['fetchRecommendedMovies', movieId], () => api.fetchRecommendedMovies(movieId));
