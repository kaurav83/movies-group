import { useQuery } from 'react-query';
import { api } from '../api';

export const useFetchMovieDetails = (movieId: number) =>
  useQuery(['fetchMovieDetails', movieId], () => api.fetchMovieDetails(movieId));
