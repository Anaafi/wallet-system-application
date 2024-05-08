// import { Link } from 'react-router-dom';
import { Button, Input } from '../../../../components';

type FundWalletFormProps = Readonly<{
  formState: {
    amount: any;
  };
  handleChange: (...args: any) => void;
  onSubmit: (...args: any) => void;
  isLoading: boolean;
}>;
export function FundWalletForm({
  formState,
  handleChange,
  onSubmit,
  isLoading,
}: FundWalletFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white py-10 px-8 max-w-[528px] w-full flex flex-col gap-6"
    >
      <Input
        label="Amount"
        id="amount"
        type="number"
        name="amount"
        value={formState.amount}
        onChange={handleChange}
      />

      <Button isLoading={isLoading}>Fund Wallet</Button>
    </form>
  );
}
