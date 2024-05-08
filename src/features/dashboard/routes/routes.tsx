import { Home, Transactions } from '../pages';

export const routes = [
  { path: '', element: <Home /> },
  { path: '/history', element: <Transactions /> },
  { path: '/profile', element: <div>Profile</div> },
];
