// import { Link } from 'react-router-dom';
import { Button, Input } from '../../../../components';

type TransferFundsFormProps = Readonly<{
  formState: {
    receiverAccountNumber: string;
    amount: any;
    pin: string;
  };
  handleChange: (...args: any) => void;
  onSubmit: (...args: any) => void;
  isLoading: boolean;
}>;
export function TransferFundsForm({
  formState,
  handleChange,
  onSubmit,
  isLoading,
}: TransferFundsFormProps) {
  // const userData = JSON.parse(localStorage.getItem('userData') || 'null');
  // console.log(userData);
  // const accountNumber = userData?.accountNumber;
  // console.log('accNum', accountNumber);
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white py-10 px-8 max-w-[528px] w-full flex flex-col gap-6"
    >
      <Input
        label="Account Number"
        id="receiverAccountNumber"
        type="receiverAccountNumber"
        name="receiverAccountNumber"
        value={formState.receiverAccountNumber}
        onChange={handleChange}
      />
      <Input
        label="Amount"
        id="amount"
        type="number"
        name="amount"
        value={formState.amount}
        onChange={handleChange}
      />
      <Input
        label="Pin"
        id="pin"
        type="password"
        name="pin"
        value={formState.pin}
        onChange={handleChange}
      />
      <Button isLoading={isLoading}>Transfer</Button>
    </form>
  );
}
