import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { httpClient } from '../../../config';
import { useToastify } from '../../../hooks';
import { ROUTES } from '../../../utils';

export function useRegisterUser() {
  const { successToast, errorToast } = useToastify();
  const navigate = useNavigate();
  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: (data: {
      firstname: string;
      surname: string;
      email: string;
      phonenumber: string;
      password: string;
    }) => httpClient.post('/wallet/signup', data),
    onSuccess: (data) => {
      successToast(data.data.message);
      navigate(ROUTES.LOGIN);
    },
    onError: (data: any) => {
      console.log({ data });
      errorToast(data?.response.data.message);
    },
  });

  return {
    onRegister: mutate,
    isLoading,
  };
}
