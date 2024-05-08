import React, { useState } from 'react';

// import jwtDecode from 'jwt-decode';
import { CloseIcon } from '../../../../assets';
import { RadioButton } from '../../components';
import { useTransferFunds } from '../../hooks';
import { TransferFundsForm } from '..';

interface TransferFundsProps {
  onClose: () => void;
}

export function TransferFunds({ onClose }: TransferFundsProps) {
  // const [isShowing, setIsShowing] = useState(false);
  const userData = JSON.parse(localStorage.getItem('userData') || 'null');
  console.log(userData);
  const accountNumber = userData?.receiverAccountNumber;
  console.log('accNum', accountNumber);
  const [formState, setFormState] = useState({
    wallet: '',
    receiverAccountNumber: accountNumber || '',
    amount: '',
    pin: '',
  });

  // const decodeToken = jwtDecode('loginToken');
  // console.log(decodeToken);
  const { onTransferFunds, isLoading } = useTransferFunds();

  // function toggle() {
  //   setIsShowing(!isShowing);
  // }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const amountFloat = parseFloat(formState.amount);
    onTransferFunds({ ...formState, amount: amountFloat });
    // onTransferFunds(formState);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div className="w-[496px] h-screen bg-white">
      <div className="flex justify-between items-center py-6 px-8">
        <p className="text-[24px] text-gray-800 font-semibold">Transfer</p>
        <button type="button" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      <hr />
      <div className="flex flex-col gap-4 pt-10 px-8">
        <p className="text-gray-800 font-semibold">
          Select Wallet Type to Transfer From
        </p>
        <div className="flex item-center gap-[85px]">
          <RadioButton
            label="Naira"
            onChange={handleChange}
            value="naira"
            name="wallet"
          />
          <RadioButton
            label="Dollar"
            onChange={handleChange}
            value="dollar"
            name="wallet"
          />
        </div>
      </div>
      <div>
        <TransferFundsForm
          handleChange={handleChange}
          formState={formState}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
