import { useQuery } from 'react-query';
import { api } from '../api';

export const useFetchSimilarMovies = (movieId: string) =>
  useQuery(['similarMovies', movieId], () => api.fetchSimilarMovie(movieId));
