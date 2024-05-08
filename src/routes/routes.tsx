import { type RouteObject } from 'react-router-dom';

import { routes as authRoutes } from '../features/auth';
import { LinkGuard } from '../features/auth/components';
import { routes as dashRoutes } from '../features/dashboard';
import { AuthLayout, DashboardLayout } from '../layouts';
// import { Home } from '../pages';

export const routes: RouteObject[] = [
  {
    path: 'auth/',
    element: <AuthLayout />,
    children: [...authRoutes],
  },
  {
    path: '/',
    element: (
      <LinkGuard>
        <DashboardLayout />
      </LinkGuard>
    ),
    children: [...dashRoutes],
  },
  // {
  //   path: '/',
  //   element: <DashboardLayout />,
  //   children: [
  //     { path: '', element: <Home /> },
  //     { path: 'history/', element: <div>History</div> },
  //     { path: 'profile/', element: <div>Profile</div> },
  //   ],
  // },
];
