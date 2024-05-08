import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { httpClient } from '../../../config';
import { useToastify } from '../../../hooks';
import { ROUTES } from '../../../utils';

export function useTransferFunds() {
  const { successToast, errorToast } = useToastify();
  const navigate = useNavigate();
  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: (data: {
      wallet: string;
      receiverAccountNumber: string;
      amount: any;
      pin: string;
    }) =>
      httpClient.patch('/wallet/transfer-funds', data) as unknown as Promise<{
        data: {
          message: string;
          data: any;
        };
      }>,
    onSuccess: (data) => {
      successToast(data.data.message);
      navigate(ROUTES.HOME);
    },
    onError: (data: any) => {
      console.log({ data });
      errorToast(data?.response.data.message);
    },
  });

  return {
    onTransferFunds: mutate,
    isLoading,
  };
}
