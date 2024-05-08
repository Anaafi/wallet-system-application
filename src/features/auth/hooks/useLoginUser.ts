import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { httpClient } from '../../../config';
import { useToastify } from '../../../hooks';
import { ROUTES } from '../../../utils';

export function useLoginUser() {
  const { successToast, errorToast } = useToastify();
  const navigate = useNavigate();
  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      httpClient.post('/wallet/login', data) as unknown as Promise<{
        data: {
          message: string;
          data: any;
        };
      }>,
    onSuccess: (data) => {
      successToast(data.data.message);
      navigate(ROUTES.HOME);
      localStorage.setItem('loginToken', data.data.data.token);
      localStorage.setItem('userData', JSON.stringify(data.data.data));
      // const storedData = JSON.parse(
      //   localStorage.getItem('loginToken') || 'null',
      // );
      // console.log('LoginTOKEN', { storedData });
    },
    onError: (data: any) => {
      console.log({ data });
      errorToast(data?.response.data.message);
    },
  });

  return {
    onLogin: mutate,
    isLoading,
  };
}
