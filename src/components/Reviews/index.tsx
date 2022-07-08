import { FC } from 'react';
import { Avatar, Comment } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useFetchReviews } from '../../hooks';
import { IReview } from '../../types';

interface ReviewsProps {
  movieId: number;
}

export const Reviews: FC<ReviewsProps> = ({ movieId }) => {
  const { data: reviews } = useFetchReviews(movieId);

  const reviewJSX = reviews?.map((review: IReview) => (
    <Comment
      key={review.id}
      avatar={
        <Avatar
          style={{ color: 'currentColor', backgroundColor: 'transparent' }}
          shape="square"
          size="small"
          icon={<UserOutlined />}
        />
      }
      author={review.author}
      content={<p>{review.content}</p>}
    />
  ));

  return (
    <section>
      <h2>Отзывы</h2>
      {reviewJSX.length ? reviewJSX : <div className="ant-typography">Информация отсутствует</div>}
    </section>
  );
};
