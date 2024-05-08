import { Outlet } from 'react-router-dom';

import Logo from '../assets/logo-copy.svg';

export function AuthLayout() {
  return (
    <div className="min-h-screen h-full bg-blue-100">
      <div className="container py-10 md:py-17 grid gap-10 md:gap-[50px]">
        <img src={Logo} />

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
