import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { httpClient } from '../../../config';
import { useToastify } from '../../../hooks';
import { ROUTES } from '../../../utils';

export function useResetPassword() {
  const { successToast, errorToast } = useToastify();
  const navigate = useNavigate();
  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: (data: {
      newPassword: string;
      confirmPassword: string;
      token: string;
    }) => httpClient.post('/wallet/reset-password', data),
    onSuccess: (data: any) => {
      successToast(data.data.message);
      navigate(ROUTES.LOGIN);
      console.log({ data });
    },
    onError: () => {
      //   console.log({ data });
      errorToast('Failed');
    },
  });

  return {
    onNewPassword: mutate,
    isLoading,
  };
}
