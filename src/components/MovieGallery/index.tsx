// Core
import { useParams } from 'react-router-dom';
import { Tabs, Card, Image, Spin, Col, Row, Rate, Space } from 'antd';

// Hooks
import { useMovieGallery } from '../../hooks';

// Instruments
import { GalleryPropName, GalleryPropType, IImageModel } from '../../types';

export const MovieGallery = () => {
  const { movieId } = useParams();
  const { data, isFetching } = useMovieGallery(movieId || '');
  const { TabPane } = Tabs;
  const { Meta } = Card;

  const tabsJSX =
    data &&
    Object.keys(data).map((tab: string) => {
      const tabDataJSX = data?.[tab as GalleryPropType]?.map((item: IImageModel) => {
        const voteFivePointScale = item.vote_average / 2;

        return (
          <Col className="gutter-row" lg={6} md={8} xs={24} key={item.id}>
            <Card hoverable cover={<Image src={item.file_path} />}>
              <Meta
                title={
                  <Space>
                    {item.vote_average ? voteFivePointScale.toFixed(1) : ''}
                    <Rate value={voteFivePointScale} allowHalf />
                  </Space>
                }
                description={`${item.vote_count} голосов`}
              />
            </Card>
          </Col>
        );
      });

      return (
        <TabPane className={`tab-${tab}`} tab={GalleryPropName[tab as GalleryPropType]} key={tab}>
          <Row gutter={[40, 40]}>{tabDataJSX}</Row>
        </TabPane>
      );
    });

  return isFetching ? (
    <Spin className="spinner-centered" size="large" />
  ) : (
    <Tabs centered defaultActiveKey={GalleryPropName.backdrops}>
      {tabsJSX}
    </Tabs>
  );
};
