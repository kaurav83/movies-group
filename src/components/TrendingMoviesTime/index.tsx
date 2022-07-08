import React, { useState } from 'react';
import { Tabs, Card, Spin, Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useTrendingMoviesTime } from '../../hooks';

type Movie = {
  id: number;
  overview: string;
  poster_path: string;
  release_year: string;
  title: string;
};

type TabsCollection = {
  tab: string;
  key: string;
};

const tabsCollection: TabsCollection[] = [
  { tab: 'За сегодня', key: 'day' },
  { tab: 'За неделю', key: 'week' },
];

export const TrendingMoviesTime = () => {
  const [period, setPeriod] = useState('day');

  const { movies, isFetched } = useTrendingMoviesTime(period);

  const { Title } = Typography;

  const onChange = (key: string) => {
    setPeriod(key);
  };

  return (
    <>
      <Title>Трендовые фильмы</Title>
      <Tabs
        defaultActiveKey={period}
        onChange={onChange}
        centered
        destroyInactiveTabPane
        className="tabset"
      >
        {tabsCollection.map((item: TabsCollection) => {
          return (
            <Tabs.TabPane tab={item.tab} key={item.key} className="tabset__pane">
              {!isFetched ? (
                <Spin className="spinner-centered" size="large" />
              ) : (
                <Row gutter={[20, 20]}>
                  {period.match(item.key) &&
                    !!movies.length &&
                    movies.map((movie: Movie) => {
                      return (
                        <Col className="gutter-row" key={movie.id}>
                          <Link to={`/films/${movie.id}`} title={movie.title}>
                            <Card
                              size="default"
                              hoverable
                              style={{ width: 240 }}
                              title={movie.title}
                              cover={<img alt="example" src={movie.poster_path} />}
                            >
                              <Card.Meta title={movie.overview} description={movie.release_year} />
                            </Card>
                          </Link>
                        </Col>
                      );
                    })}
                </Row>
              )}
            </Tabs.TabPane>
          );
        })}
      </Tabs>
    </>
  );
};
