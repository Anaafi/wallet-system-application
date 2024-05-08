import { Outlet } from 'react-router-dom';

import { Navbar, SideNav } from '../features/dashboard/components';
export function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden relative">
      <SideNav />

      <div className="w-full overflow-y-hidden">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
