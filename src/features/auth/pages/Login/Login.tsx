import React from 'react';

import { FormDescription, LoginForm } from '../../components';
import { useLoginUser } from '../../hooks';
export function Login() {
  const [formState, setFormState] = React.useState({
    email: '',
    password: '',
  });
  const { onLogin, isLoading } = useLoginUser();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    onLogin(formState);
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
        <FormDescription title="Log In" value="Great to have you back" />
      </div>
      <div className="w-full flex justify-end">
        <LoginForm
          formState={formState}
          handleChange={handleChange}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
