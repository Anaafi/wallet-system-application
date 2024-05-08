import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface LinkGuardProps {
  children: ReactNode;
}

export function LinkGuard({ children }: LinkGuardProps) {
  // const navigate = useNavigate();
  const token = localStorage.getItem('loginToken');

  if (!token) {
    // console.log('fgh');
    return <Navigate to="/auth/sign-up" />;
  }

  return <div>{children}</div>;
}
