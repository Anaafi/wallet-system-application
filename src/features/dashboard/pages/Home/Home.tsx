import { useState } from 'react';

import { PlusIcon } from '../../../../assets';
import { Button, TransactionStatus } from '../../../../components';
import { useAccountSummary } from '../..';
import {
  EmptyState,
  Fundwallet,
  TableComponent2,
  TransferFunds,
} from '../../components';
import { Modal } from '../../modal';

// const DataElement = [
//   {
//     transaction_type: 'Wallet Deposit',
//     date_created: 'May 27, 2020 | 12:38 PM',
//     status: 'successful',
//     amount: 'NGN 3,567.00',
//   },
//   {
//     transaction_type: 'Wallet Transfer',
//     date_created: 'May 27, 2020 | 12:38 PM',
//     status: 'successful',
//     amount: 'NGN 200.00',
//   },
//   {
//     transaction_type: 'Wallet Deposit',
//     date_created: 'May 27, 2020 | 12:38 PM',
//     status: 'failed',
//     amount: 'NGN 100.00',
//   },
//   {
//     transaction_type: 'Wallet Deposit',
//     date_created: 'May 27, 2020 | 12:38 PM',
//     status: 'failed',
//     amount: 'NGN 900.00',
//   },
//   {
//     transaction_type: 'Wallet Transfer',
//     date_created: 'May 27, 2020 | 12:38 PM',
//     status: 'successful',
//     amount: 'NGN 200.00',
//   },
//   {
//     transaction_type: 'Wallet Deposit',
//     date_created: 'May 27, 2020 | 12:38 PM',
//     status: 'failed',
//     amount: 'NGN 900.00',
//   },
// ];

const columnObjects = [
  {
    accessorKey: 'transactionType',
    header: 'Transaction Type',
  },
  {
    accessorKey: 'dateTime',
    header: 'Date',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: DisplayStatus,
  },
  {
    accessorKey: 'currencyAmount',
    header: 'Amount',
  },
];
export function Home() {
  const { data } = useAccountSummary();
  const [isShowing, setIsShowing] = useState(false);
  const [isFundWallet, setIsFundWallet] = useState(false);
  function toggle() {
    setIsShowing(!isShowing);
  }
  function fundWalletToggle() {
    setIsFundWallet(!isFundWallet);
  }

  const transactions = data?.transactions;

  console.log({ data });
  return (
    <div className="w-full px-8">
      <div className="flex items-center justify-between pb-6 pt-4">
        <div className="text-2xl text-gray-800 font-bold">
          Hello {data?.firstname} 👋🏿{' '}
        </div>
        <div className="flex items-center gap-5">
          <Button
            onClick={toggle}
            className="w-[167px] font-bold"
            variant="secondary"
            children="Transfer Funds"
          />
          <Button
            onClick={fundWalletToggle}
            className="w-[163px]"
            children="Fund Wallet"
            leftIcon={<PlusIcon />}
          />
        </div>
      </div>
      <div className="flex justify-between gap-6">
        <div className="flex flex-col  text-gray-800 border rounded-lg p-6 w-full gap-2">
          <p className="text-2xl font-bold">₦{data?.NairaWallet}</p>
          <p>Naira Balance</p>
        </div>
        <div className="flex flex-col text-gray-800 border rounded-lg p-6 w-full gap-2">
          <p className="text-2xl font-bold">${data?.DollarWallet}</p>
          <p>Dollar Balance</p>
        </div>
      </div>
      <p className="pt-10 text-gray-800 text-[20px] font-bold">
        Recent History
      </p>
      <div>
        {transactions?.length === 0 ? (
          <EmptyState />
        ) : (
          <TableComponent2 data={transactions ?? []} columns={columnObjects} />
        )}
      </div>

      <Modal show={isShowing}>
        <TransferFunds onClose={toggle} />
      </Modal>
      <Modal show={isFundWallet}>
        <Fundwallet onClose={fundWalletToggle} />
      </Modal>
    </div>
  );
}

function DisplayStatus({ getValue }: { getValue: () => any }) {
  const statusValue = getValue();

  const statusVariant = statusValue === 'Successful' ? 'primary' : 'secondary';

  return <TransactionStatus status={statusValue} variant={statusVariant} />;
}
