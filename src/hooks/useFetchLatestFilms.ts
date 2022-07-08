import { useQuery } from 'react-query';
import { api } from '../api';

export const useFetchLatestFilms = () => {
  const { data, isFetching } = useQuery('latest-movie', () => api.getLatestFilms());

  return {
    data: Array.isArray(data) ? data : [],
    isFetching,
  };
};
