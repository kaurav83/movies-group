// Core
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

// Instruments
import { api } from '../api';

export const usePopularMovies = (page: string) => {
  const { data, isFetching } = useQuery(
    ['popularMovies', page],
    () => api.fetchPopularMovies(page),
    {
      keepPreviousData: true,
      retry: false,
      onError: () => {
        toast.error('Произошла ошибка, попробуйте позже');
      },
    },
  );

  return {
    data: Array.isArray(data) ? data : [],
    isFetching,
  };
};
