import { Link } from 'react-router-dom';

import { Button, Input } from '../../../../components';

type ForgotPasswordProps = Readonly<{
  formState: {
    email: string;
  };
  handleChange: (...args: any) => void;
  onSubmit: (...args: any) => void;
  isLoading: boolean;
}>;
export function ForgotPasswordForm({
  formState,
  handleChange,
  onSubmit,
  isLoading,
}: ForgotPasswordProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white py-10 px-8 border rounded-lg max-w-[528px] w-full flex flex-col gap-6"
    >
      <Input
        label="Email Address"
        id="email"
        type="emai"
        name="email"
        value={formState.email}
        onChange={handleChange}
      />
      <Button isLoading={isLoading}>Recover Password</Button>
      <p className="text-gray-500 text-w-[14px] text-center">
        <Link to="/auth/login" className="text-primary">
          Return to Log In
        </Link>
      </p>
    </form>
  );
}
