import {
  CheckInbox,
  ForgotPassword,
  Login,
  ResetPassword,
  SignUp,
} from '../pages';

export const routes = [
  { path: 'sign-up', element: <SignUp /> },
  { path: 'login', element: <Login /> },
  { path: 'forgot-password', element: <ForgotPassword /> },
  { path: 'check-inbox', element: <CheckInbox /> },
  { path: 'reset-password', element: <ResetPassword /> },
];
