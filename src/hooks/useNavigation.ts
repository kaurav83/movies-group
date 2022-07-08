import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../routes/routes';
import { MenuKey } from '../types';

export const useNavigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const goToHome = () => navigate(routes[0]?.path);

  const [keyPage, setKeyPage] = useState(MenuKey.main);

  useEffect(() => {
    if (pathname === '/' && keyPage !== MenuKey.main) {
      setKeyPage(MenuKey.main);
    } else if (pathname.includes('/films') && keyPage !== MenuKey.films) {
      if (pathname === '/films') {
        navigate('/top-rated-films/1');
      }
      setKeyPage(MenuKey.films);
    } else if (pathname.includes('/popular-films') && keyPage !== MenuKey.popular) {
      setKeyPage(MenuKey.popular);
    } else if (pathname.includes('/top-rated-films') && keyPage !== MenuKey.top) {
      if (pathname === '/top-rated-films') {
        navigate('/top-rated-films/1');
      }
      setKeyPage(MenuKey.top);
    } else if (pathname.includes('/latest-films') && keyPage !== MenuKey.latest) {
      setKeyPage(MenuKey.latest);
    }
  }, [pathname]);

  return {
    keyPage,
    goToHome,
  };
};
