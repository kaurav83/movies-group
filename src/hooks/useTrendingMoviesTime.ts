import { useQuery } from 'react-query';
import { api } from '../api';

export const useTrendingMoviesTime = (period: string) => {
  const { data, isFetched } = useQuery(['trendingMoviesTime', period], async () => {
    const moviesByTime = await api.fetchTrendingMoviesTime(period);

    return moviesByTime;
  });

  return {
    movies: data && Array.isArray(data) ? data : [],
    isFetched,
  };
};
