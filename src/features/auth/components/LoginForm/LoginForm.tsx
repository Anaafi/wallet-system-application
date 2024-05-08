import { Link } from 'react-router-dom';

import { Button, Input } from '../../../../components';

type LoginFormProps = Readonly<{
  formState: {
    email: string;
    password: string;
  };
  handleChange: (...args: any) => void;
  onSubmit: (...args: any) => void;
  isLoading: boolean;
}>;
export function LoginForm({
  formState,
  handleChange,
  onSubmit,
  isLoading,
}: LoginFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white py-10 px-8 border rounded-lg max-w-[528px] w-full flex flex-col gap-6"
    >
      <Input
        label="Email Address"
        id="email"
        type="email"
        name="email"
        value={formState.email}
        onChange={handleChange}
      />
      <Input
        label="Password"
        id="password"
        type="password"
        name="password"
        value={formState.password}
        onChange={handleChange}
      />
      <p className="text-gray-500 text-w-[14px]">
        <Link to="/auth/forgot-password" className="text-primary">
          Forgot Password?
        </Link>
      </p>
      <Button isLoading={isLoading}>Login</Button>
      <p className="text-gray-500 text-w-[14px]">
        Don't have an account?{' '}
        <Link to="/auth/sign-up" className="text-primary">
          Register now
        </Link>
      </p>
    </form>
  );
}
