import { useQuery } from 'react-query';
import { api } from '../api';

export const useFetchTopRated = (id: any) => {
  const { data, isFetched } = useQuery(['topRated', id], async () => {
    const pageById = await api.fetchTopRated(`page=${id}`);

    return pageById;
  });

  return {
    movies: data && Array.isArray(data) ? data : [],
    isFetched,
  };
};
