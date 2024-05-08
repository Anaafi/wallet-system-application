import React from 'react';

import { ForgotPasswordForm, FormDescription } from '../../components';
import { useForgotPassword } from '../../hooks';
export function ForgotPassword() {
  const [formState, setFormState] = React.useState({
    email: '',
  });
  const { onForgotPassword, isLoading } = useForgotPassword();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    onForgotPassword(formState);
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
          title="Forgot Password"
          value="Kindly enter your registered email to reset your password"
        />
      </div>
      <div className="w-full flex justify-end">
        <ForgotPasswordForm
          formState={formState}
          handleChange={handleChange}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
