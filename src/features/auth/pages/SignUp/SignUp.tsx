import React from 'react';

import { ENV_VARS } from '../../../../config';
import { FormDescription, SignUpForm } from '../../components';
import { useRegisterUser } from '../../hooks';

export function SignUp() {
  console.log('env', ENV_VARS.BASE_URL);
  const [formState, setFormState] = React.useState({
    firstname: '',
    surname: '',
    email: '',
    phonenumber: '',
    password: '',
  });
  const { onRegister, isLoading } = useRegisterUser();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    onRegister(formState);
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
    <div className="flex flex-col gap-9 md:flex-row justify-between lg:gap-12">
      <div className="md:pt-12">
        <FormDescription
          title="Creat Your Account"
          value="Let's get you started"
        />
      </div>
      <div>
        <SignUpForm
          formState={formState}
          handleChange={handleChange}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
