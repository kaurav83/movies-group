import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import { useFetchTopRated } from '../../hooks';
import { Table } from '../Shared/Table';
import { columnsTopRatedTable } from '../Shared/Table/config';

export const TopRated = () => {
  const { id } = useParams();
  const { movies, isFetched } = useFetchTopRated(id);

  return !isFetched ? (
    <Spin className="spinner-centered" size="large" />
  ) : (
    <Table tableProps={movies} columns={columnsTopRatedTable} titlePage="Трендовые фильмы" />
  );
};
