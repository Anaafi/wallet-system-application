// import { Link } from 'react-router-dom';

import { Button, Input } from '../../../../components';

type ResetPasswordProps = Readonly<{
  formState: {
    newPassword: string;
    confirmPassword: string;
  };
  handleChange: (...args: any) => void;
  onSubmit: (...args: any) => void;
  isLoading: boolean;
}>;
export function ResetPasswordForm({
  formState,
  handleChange,
  onSubmit,
  isLoading,
}: ResetPasswordProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white py-10 px-8 border rounded-lg max-w-[528px] w-full flex flex-col gap-6"
    >
      <Input
        label="New Password"
        id="new-password"
        type="password"
        name="newPassword"
        value={formState.newPassword}
        onChange={handleChange}
      />
      <Input
        label="Confirm Password"
        id="confirm-password"
        type="password"
        name="confirmPassword"
        value={formState.confirmPassword}
        onChange={handleChange}
      />
      <Button isLoading={isLoading}>Reset Password</Button>
    </form>
  );
}
