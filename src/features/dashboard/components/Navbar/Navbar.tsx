import { NotificationIcon } from '../../../../assets';
import { NavDropDown } from '../../../../components';
import { useAccountSummary } from '../../hooks';

export function Navbar() {
  const { data } = useAccountSummary();
  return (
    <div className="flex justify-end gap-[44px] py-4 px-8 items-center">
      <NotificationIcon
        {...({
          className: 'w-6 h-6',
        } as React.SVGProps<SVGSVGElement>)}
      />
      <div className="flex gap-3 items-center">
        <p>
          {data?.firstname} {data?.surname}
        </p>
        <div className="flex items-center">
          <p className="rounded-full text-xs bg-gray-300 p-1">
            {data?.firstname?.charAt(0).toUpperCase()}
            {data?.surname?.charAt(0).toUpperCase()}
          </p>
          {/* <DropIcon /> */}
          <NavDropDown />
        </div>
      </div>
    </div>
  );
}
