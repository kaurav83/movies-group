/* Core */
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

// Hooks
import { useNavigation } from '../../hooks';

export const Header: FC = () => {
  const { keyPage } = useNavigation();

  const items = [
    {
      label: <NavLink to="/">Главная</NavLink>,
      key: '1',
    },
    {
      label: <NavLink to="/films">Фильмы</NavLink>,
      key: '2',
    },
    {
      label: <NavLink to="/popular-films">Популярные фильмы</NavLink>,
      key: '3',
    },
    {
      label: <NavLink to="/top-rated-films/1">Трендовые фильмы</NavLink>,
      key: '4',
    },
    {
      label: <EllipsisOutlined />,
      key: 'Submenu',
      children: [
        {
          label: <NavLink to="/latest-films">Последние вышедшие фильмы</NavLink>,
          key: '5',
        },
      ],
    },
  ];

  return (
    <Layout.Header className="header">
      <p className="logo">Movie App</p>

      <Menu className="nav" theme="dark" mode="horizontal" selectedKeys={[keyPage]} items={items} />
    </Layout.Header>
  );
};
