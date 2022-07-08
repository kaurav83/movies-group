import { FC } from 'react';

export interface IRoute {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC;
  index?: boolean;
}

export interface IReview {
  id: string;
  author: string;
  content: string;
}
export interface ILatestFilmModel {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  status: string;
  popularity: number;
  overview: string;
}
export interface IMoviesModel {
  genres: String[];
  id: number;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface IImageModel {
  id: string;
  height: number;
  width: number;
  vote_average: number;
  vote_count: number;
  file_path: string;
}

export interface IGalleryModel {
  backdrops: IImageModel[];
  posters: IImageModel[];
  logos: IImageModel[];
}

export enum GalleryPropName {
  backdrops = 'Обложки',
  posters = 'Постеры',
  logos = 'Логотипы',
}

export type GalleryPropType = 'backdrops' | 'posters' | 'logos';

export enum MenuKey {
  main = '1',
  films = '2',
  popular = '3',
  top = '4',
  latest = '5',
}

export interface IRecommendedMovies {
  movieId: number;
}

export interface IRecommendedMovie {
  id: number;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface ISimilarMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}
