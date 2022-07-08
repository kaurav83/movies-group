import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { api } from '../api';

export const useFetchReviews = (movieId: number) => {
  const { data, isFetching } = useQuery('reviews', () => api.getReviews(movieId), {
    keepPreviousData: true,
    retry: false,
    onError: () => {
      toast.error('Произошла ошибка, попробуйте позже');
    },
  });

  return {
    data: Array.isArray(data) ? data : [],
    isFetching,
  };
};
