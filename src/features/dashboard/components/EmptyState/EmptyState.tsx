import { EmptyStateIcon } from '../../../../assets';

export function EmptyState() {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 pt-[102px]">
        <EmptyStateIcon
          {...({
            className: 'w-[85px] h-[96px]',
          } as React.SVGProps<SVGSVGElement>)}
        />
        <p className="text-blue-200 font-semibold">No Transactions</p>
      </div>
    </div>
  );
}
