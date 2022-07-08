import { IRoute } from '../types';
import {
  MovieDetailsPage,
  PopularMoviesPage,
  MovieGalleryPage,
  LatestFilmsPage,
  TopRatedPage,
  TrendingMoviesTimePage,
  NotFoundPage,
} from '../pages';

export const routes: Array<IRoute> = [
  {
    key: 'movies',
    title: 'Movies',
    path: '/',
    enabled: true,
    component: TrendingMoviesTimePage,
    index: false,
  },
  {
    key: 'movie-details',
    title: 'Movie Details',
    path: '/films/:movieId',
    enabled: true,
    component: MovieDetailsPage,
    index: false,
  },
  {
    key: 'top-rated-films',
    title: 'Top Rated Movies',
    path: '/top-rated-films/:id',
    enabled: true,
    component: TopRatedPage,
    index: false,
  },
  {
    key: 'popular-films',
    title: 'Popular Movies',
    path: '/popular-films',
    enabled: true,
    component: PopularMoviesPage,
    index: false,
  },
  {
    key: 'movie-gallery',
    title: 'Movie Gallery',
    path: 'films/:movieId/images',
    enabled: true,
    component: MovieGalleryPage,
    index: false,
  },
  {
    key: 'latest-films',
    title: 'Latest Movies',
    path: '/latest-films',
    enabled: true,
    component: LatestFilmsPage,
    index: false,
  },
  {
    key: 'not-found',
    title: 'Page Not Found',
    path: '*',
    enabled: true,
    component: NotFoundPage,
    index: false,
  },
];
