import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Table, Image, PageHeader, Rate } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { toast } from 'react-toastify';
import { useFetchRecommendedMovies } from '../../hooks';
import { IRecommendedMovie, IRecommendedMovies } from '../../types';

export const RecommendedMovies: FC<IRecommendedMovies> = ({ movieId }) => {
  const { isError, data, isLoading } = useFetchRecommendedMovies(movieId);
  let recommendedMovies = [];

  if (isError) {
    toast.error('Произошла ошибка, попробуйте позже');
  }
  if (!isLoading && data && data.length) recommendedMovies = data.slice(0, 5);

  const columns: ColumnsType<IRecommendedMovie> = [
    {
      title: 'Постер',
      dataIndex: 'poster_path',
      key: 'poster_path',
      align: 'center',
      width: '15%',
      render: (path) => {
        return path ? <Image src={path} /> : <p>Отсутствует</p>;
      },
    },
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
      align: 'center',
    },
    {
      title: 'Популярность',
      dataIndex: 'vote_average',
      key: 'popularity',
      align: 'center',
      render: (vote_average) => <Rate allowHalf defaultValue={vote_average / 2} />,
    },
    {
      title: 'Дата выхода',
      dataIndex: 'release_date',
      key: 'release_date',
      width: '10%',
      align: 'center',
    },
    {
      title: 'Краткое описание',
      dataIndex: 'overview',
      key: 'overview',
    },
    {
      title: 'Детали',
      dataIndex: 'id',
      key: 'id',
      width: 150,
      render: (id) => <Link to={`/films/${id}`}>Подробнее...</Link>,
    },
  ];

  const title = () => <PageHeader className="site-page-header" title="Рекомендуемые фильмы" />;

  return (
    <Table
      loading={isLoading}
      title={title}
      columns={columns}
      dataSource={recommendedMovies}
      pagination={false}
      bordered
      rowKey="id"
    />
  );
};
