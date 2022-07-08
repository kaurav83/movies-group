import { Table, Image, PageHeader } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { Link } from 'react-router-dom';
import React, { FC } from 'react';
import { useFetchLatestFilms } from '../../hooks';
import { ILatestFilmModel } from '../../types';

export const LatestFilms: FC = () => {
  const { data, isFetching } = useFetchLatestFilms();

  const columns: ColumnsType<ILatestFilmModel> = [
    {
      title: 'Постер',
      dataIndex: 'poster_path',
      key: 'poster_path',
      align: 'center' as 'center',
      render: (path) => {
        return path ? <Image width={104} src={path} /> : <p>Отсутствует</p>;
      },
    },
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Дата выхода',
      dataIndex: 'release_date',
      key: 'release_date',
    },
    {
      title: 'Доходность',
      dataIndex: 'revenue',
      key: 'revenue',
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Популярность',
      dataIndex: 'popularity',
      key: 'popularity',
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
    },
  ];

  const title = () => (
    <PageHeader
      className="site-page-header"
      title="Последние фильмы"
      subTitle="Фильмы добавленные в каталог"
    />
  );

  return (
    <Table
      loading={isFetching}
      title={title}
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
      rowKey="id"
    />
  );
};
