// Core
import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Spin, Typography, Col, Row, Image, Descriptions, Card, Statistic } from 'antd';
import { TrophyOutlined, DollarCircleOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';

// Hooks
import { useFetchMovieDetails } from '../../hooks';

// Components
import { RecommendedMovies, SimilarMovies, Reviews } from '..';

const { Title } = Typography;

export const MovieDetails: FC = () => {
  const { movieId } = useParams();

  const { isError, data, isLoading } = useFetchMovieDetails(+movieId!);

  if (isError) {
    toast.error('Произошла ошибка, попробуйте позже');
  }

  return isLoading ? (
    <Spin className="spinner-centered" size="large" />
  ) : (
    <div className="movie-details">
      <Title>{data.title}</Title>
      <Row align="middle" justify="start">
        <Col span={12}>
          <Image width={250} src={data.poster_path} preview={false} />
          <div className="gallery-link">
            <Link to={`/films/${movieId}/images`}>Галерея</Link>
          </div>
        </Col>
      </Row>
      <Descriptions bordered column={2}>
        <Descriptions.Item label="Статус">{data.status}</Descriptions.Item>
        <Descriptions.Item label="Дата выхода">{data.release_date}</Descriptions.Item>
        <Descriptions.Item label="Количество голосов">{data.vote_count}</Descriptions.Item>
        <Descriptions.Item label="Средняя оценка">{data.vote_average}</Descriptions.Item>
        <Descriptions.Item label="Краткое описание" span={2}>
          {data.overview}
        </Descriptions.Item>
        <Descriptions.Item label="Жанры" span={2}>
          {data?.genres && data.genres.toString()}
        </Descriptions.Item>
      </Descriptions>
      <Row className="row-statistic">
        <Col span={8}>
          <Card>
            <Statistic
              title="Popularity"
              value={data.popularity}
              prefix={<TrophyOutlined />}
              className="popularity"
              valueStyle={{ color: 'rgb(63, 124, 225)' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Budget"
              value={data.budget}
              prefix={<DollarCircleOutlined />}
              className="budget"
              valueStyle={{ color: 'rgb(40, 215, 181)' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Revenue"
              value={data.revenue}
              prefix={<DollarCircleOutlined />}
              className="revenue"
              valueStyle={{ color: 'rgb(16, 193, 188)' }}
            />
          </Card>
        </Col>
      </Row>
      <Reviews movieId={data.id} />
      <RecommendedMovies movieId={data.id} />
      <SimilarMovies movieId={data.id} />
    </div>
  );
};
