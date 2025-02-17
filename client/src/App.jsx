import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthLayout, MainLayout } from './layouts';
import { Home, Login, Signup } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
