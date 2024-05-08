import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { httpClient } from '../../../config';
// import { useToastify } from '../../../hooks';
import { ROUTES } from '../../../utils';

export function useForgotPassword() {
  // const { successToast, errorToast } = useToastify();
  const navigate = useNavigate();
  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: (data: { email: string }) =>
      httpClient.post('/wallet/forgot-password', data),
    onSuccess: (data: any) => {
      console.log({ data });

      localStorage.setItem('forgotPasswordToken', data.data.data.resetToken);
      // const storedData = JSON.parse(
      //   localStorage.getItem('forgotPasswordToken') || 'null',
      // );

      // console.log('TOKEN', { storedData });

      // successToast(data.data.message);
      //navigate(ROUTES.HOME);
      navigate(ROUTES.RESETPASSWORD);
    },
  });

  return {
    onForgotPassword: mutate,
    isLoading,
  };
}
