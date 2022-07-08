import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
import { useFetchSimilarMovies } from '../../hooks';

interface SimilarMoviesProps {
  movieId: string;
}

export const SimilarMovies: FC<SimilarMoviesProps> = ({ movieId }) => {
  const { data, isLoading } = useFetchSimilarMovies(movieId);
  const similarMovies = !isLoading ? data?.slice(0, 5) : [];
  const { Meta } = Card;

  const similarMoviesJSX = similarMovies?.map((similarMovie) => (
    <Col className="gutter-row" style={{ width: '20%' }} key={similarMovie.id}>
      <Link to={`/films/${similarMovie.id}`} title={similarMovie.title}>
        <Card
          hoverable
          title={similarMovie.title}
          cover={<img alt="example" src={similarMovie.poster_path} />}
        >
          <Meta title={similarMovie.release_date} description={similarMovie.overview} />
        </Card>
      </Link>
    </Col>
  ));

  return (
    <section style={{ marginTop: 25 }}>
      <h2 className="ant-typography">Похожие фильмы</h2>
      <Row gutter={[20, 20]}>{similarMoviesJSX}</Row>
    </section>
  );
};
