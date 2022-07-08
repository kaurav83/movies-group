// Core
import React, { FC, useState } from 'react';
import { Table, Image, PageHeader } from 'antd';
import type { ColumnsType, TableProps } from 'antd/lib/table';
import type { PaginationProps } from 'antd';
import { Link } from 'react-router-dom';

// Hooks
import { usePopularMovies } from '../../hooks';

// Instruments
import { IMoviesModel } from '../../types';

const columns: ColumnsType<IMoviesModel> = [
  {
    title: 'Постер',
    dataIndex: 'poster_path',
    key: 'poster_path',
    render: (path) => <Image src={path} />,
    align: 'center',
    width: '15%',
  },
  {
    title: 'Название',
    dataIndex: 'title',
    key: 'title',
    align: 'center',
  },
  {
    title: 'Популярность',
    dataIndex: 'popularity',
    key: 'popularity',
    align: 'center',
  },
  {
    title: 'Количество голосов',
    dataIndex: 'vote_count',
    key: 'vote_count',
    align: 'center',
  },
  {
    title: 'Средняя оценка',
    dataIndex: 'vote_average',
    key: 'vote_average',
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
    render: (id) => <Link to={`/films/${id}`}>Подробнее...</Link>,
    align: 'center',
    width: 150,
  },
];

export const PopularMovies: FC = () => {
  const [page, setPage] = useState('1');
  const { data, isFetching } = usePopularMovies(page);

  const onChange: PaginationProps['onChange'] = (pageNumber) => {
    const pageStr = pageNumber.toString();
    setPage(pageStr);
    document.documentElement.scrollTop = 0;
  };

  const tableProps: TableProps<IMoviesModel> = {
    bordered: true,
    loading: isFetching,
    pagination: {
      defaultPageSize: 20,
      showSizeChanger: false,
      total: 2000,
      onChange,
      showQuickJumper: true,
    },
  };

  /* eslint-disable react/jsx-props-no-spreading */
  const title = () => <PageHeader className="site-page-header" title="Популярные фильмы" />;

  return <Table {...tableProps} title={title} columns={columns} dataSource={data} rowKey="id" />;
  /* eslint-enable react/jsx-props-no-spreading */
};
