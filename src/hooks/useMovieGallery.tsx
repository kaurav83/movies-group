import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { api } from '../api';

export const useMovieGallery = (movieId: string) => {
  const { data, isFetching } = useQuery('images', () => api.fetchMovieImages(movieId), {
    retry: false,
    onError: () => {
      toast.error('Произошла ошибка, попробуйте позже');
    },
  });

  return {
    data,
    isFetching,
  };
};
