import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants';

const renderRoutes = routes => {
  return routes.map(route => (
    <Route key={route.id} path={route.path} element={<route.element />}>
      {route.children &&
        route.children.map(child => (
          <Route key={child.id} path={child.path} element={<child.element />} />
        ))}
    </Route>
  ));
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>{renderRoutes(ROUTES)}</Routes>
    </BrowserRouter>
  );
};

export default App;
