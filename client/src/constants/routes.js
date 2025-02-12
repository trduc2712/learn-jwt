import { Signup } from '@/pages';
import { MainLayout } from '@/layouts';

export const ROUTES = [
  {
    id: 'main-layout',
    path: '/',
    element: MainLayout,
    children: [
      { id: 'signup', path: 'signup', element: Signup },
      { id: 'login', path: 'login', element: Signup },
    ],
  },
];
