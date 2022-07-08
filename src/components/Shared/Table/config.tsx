import { Tag, Space, Image } from 'antd';
import { Link } from 'react-router-dom';
import { ColumnsType } from 'antd/lib/table';

export interface DataType {
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  genres: string[];
  length?: number;
}

export type PropsTableTopRated = {
  tableProps: DataType[];
  columns: ColumnsType<DataType>;
  titlePage: string;
};

export const columnsTopRatedTable: ColumnsType<DataType> = [
  {
    title: 'Постер',
    dataIndex: 'poster',
    key: 'poster',
    align: 'center',
    width: '15%',
    render: (_, { poster_path }) => <Image className="poster-td" src={poster_path} />,
  },
  {
    title: 'Название',
    dataIndex: 'title',
    key: 'title',
    align: 'center',
    render: (text) => <div className="cell-center name-film-td">{text}</div>,
  },
  {
    title: 'Дата релиза',
    dataIndex: 'release_date',
    key: 'release_date',
    align: 'center',
    width: '11%',
    render: (text) => <div className="cell-center">{text}</div>,
  },
  {
    title: 'Количество голосов',
    dataIndex: 'vote_count',
    key: 'vote_count',
    align: 'center',
    render: (text) => <div className="cell-center">{text}</div>,
  },
  {
    title: 'Средняя оценка',
    dataIndex: 'vote_average',
    key: 'vote_average',
    align: 'center',
    render: (text) => <div className="cell-center">{text}</div>,
  },
  {
    title: 'Жанры',
    key: 'genres',
    dataIndex: 'genres',
    render: (_, { genres }) => (
      <div className="genres-td">
        <Space align="center" size={[5, 10]} wrap>
          {genres.map((genre) => {
            const getGenre = (key: string) => {
              const colors: { [key: string]: string } = {
                drama: 'volcano',
                crime: 'green',
                romance: 'pink',
                animation: 'violet',
                family: 'blue',
                fantasy: 'yellow',
                war: 'darkred',
                history: 'darkblue',
                comedy: 'darkgreen',
                mystery: '#00fff6',
                action: '#a0db90',
                adventure: '#b75858',
                thriller: '#ff0000',
                horror: '#000000',
                western: '#5da09b',
                music: '#096d89',
                'science fiction': '#606016',
              };

              return colors[key];
            };

            return (
              <Tag key={genre} color={getGenre(genre.toLocaleLowerCase())}>
                {genre}
              </Tag>
            );
          })}
        </Space>
      </div>
    ),
  },
  {
    title: 'Краткое описание',
    dataIndex: 'overview',
    key: 'overview',
    width: '25%',
    render: (text) => <div className="brief-description">{text}</div>,
  },
  {
    title: 'Детали',
    dataIndex: 'readmore',
    key: 'readmore',
    align: 'center',
    width: 150,
    render: (_, { id }) => <Link to={`/films/${id}`}>Подробнее...</Link>,
  },
];
