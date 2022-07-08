import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { routes as appRotes } from './routes/routes';
import { IRoute } from './types';
import { LayoutComponent } from './components';
import 'antd/dist/antd.min.css';

export const App: FC = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          {appRotes.map((route: IRoute) => (
            <Route
              key={route.key}
              path={route.index ? '' : route.path}
              index={route.index ?? false}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
};
