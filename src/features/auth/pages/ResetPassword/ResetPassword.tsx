import React from 'react';

import { FormDescription, ResetPasswordForm } from '../../components';
import { useResetPassword } from '../../hooks';
export function ResetPassword() {
  const [formState, setFormState] = React.useState({
    newPassword: '',
    confirmPassword: '',
    token: '',
  });

  const storedToken = localStorage.getItem('forgotPasswordToken') as string;

  console.log('stoken', storedToken);

  const { onNewPassword, isLoading } = useResetPassword();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    localStorage.setItem('forgotPasswordToken', formState.token);
    onNewPassword({ ...formState, token: storedToken });
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <div className="flex flex-col gap-9 md:flex-row justify-between lg:gap-12 ">
      <div className="md:pt-12 w-full">
        <FormDescription
          title="Reset Password"
          value="Create a unique password to keep your account protected"
        />
      </div>
      <div className="w-full flex justify-end">
        <ResetPasswordForm
          formState={formState}
          handleChange={handleChange}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
