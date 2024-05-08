import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  HistoryIcon,
  HomeIcon,
  LogoWhiteIcon,
  ProfileIcon,
} from '../../../../assets';
import { cn } from '../../../../libs';
//import LogoWhite from '../../../../assets/logo-white.svg';

export function SideNav() {
  return (
    <div
      className={cn(
        'bg-gray-800 w-full max-w-[248px] h-screen overflow-y-hidden px-4',
      )}
    >
      <div className="flex items-center pt-[20px] pb-8 pl-4 gap-[6px] ">
        <LogoWhiteIcon
          {...({
            className: 'w-6 h-[27px]',
          } as React.SVGProps<SVGSVGElement>)}
        />
        {/* <img src={LogoWhite} /> */}
        <h4 className="text-white text-lg">Wallet</h4>
      </div>
      <div className="flex flex-col gap-2 pb-[210px]">
        {/* <HomeIcon
          {...({
            className: 'w-6 h-6 text-white',
          } as React.SVGProps<SVGSVGElement>)}
        /> */}

        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? 'bg-gray-1000 text-white py-3 px-4 rounded'
                : 'px-4 py-3 text-gray-100'
            }
          >
            <div className="flex items-center gap-3">
              {item.iconName}
              <p className="text-[14px]">{item.name}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

const menuItems = [
  {
    name: 'Home',
    iconName: (
      <HomeIcon
        {...({
          className: 'w-4 h-4',
        } as React.SVGProps<SVGSVGElement>)}
      />
    ),
    path: '/',
  },
  {
    name: 'History',
    iconName: (
      <HistoryIcon
        {...({
          className: 'w-4 h-4',
        } as React.SVGProps<SVGSVGElement>)}
      />
    ),
    path: '/history',
  },
  {
    name: 'Profile',
    iconName: (
      <ProfileIcon
        {...({
          className: 'w-4 h-4',
        } as React.SVGProps<SVGSVGElement>)}
      />
    ),
    path: '/profile',
  },
];
