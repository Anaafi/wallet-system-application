import { Link } from 'react-router-dom';

import { Button, Input } from '../../../../components';

type SignUpFormProps = Readonly<{
  formState: {
    firstname: string;
    surname: string;
    email: string;
    phonenumber: string;
    password: string;
  };
  handleChange: (...args: any) => void;
  onSubmit: (...args: any) => void;
  isLoading: boolean;
}>;
export function SignUpForm({
  formState,
  handleChange,
  onSubmit,
  isLoading,
}: SignUpFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white py-10 px-8 border rounded-lg max-w-[528px] w-full flex flex-col gap-6"
    >
      <div className="flex gap-4">
        <Input
          label="First Name"
          id="firstName"
          name="firstname"
          value={formState.firstname}
          onChange={handleChange}
        />
        <Input
          label="Last Name"
          id="lastName"
          name="surname"
          value={formState.surname}
          onChange={handleChange}
        />
      </div>
      <Input
        label="Email Address"
        id="email"
        type="email"
        name="email"
        value={formState.email}
        onChange={handleChange}
      />
      <Input
        label="Phone Number"
        id="phoneNumber"
        name="phonenumber"
        value={formState.phonenumber}
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
      <Button children="Create Account" isLoading={isLoading} />
      <p className="text-gray-g200 text-w-[14px]">
        Already have an account?{' '}
        <Link to="/auth/login" className="text-primary">
          sign in
        </Link>
      </p>
    </form>
  );
}
