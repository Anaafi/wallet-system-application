import { useQuery } from '@tanstack/react-query';

import { httpClient } from '../../../config';

export function useTransactionHistory() {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ['transactionHistory'],
    queryFn: async () => {
      // console.log('transactins', data);
      return httpClient.get(`/wallet/transactions-history`);
    },
  });

  return {
    data: data?.data ?? {},
    isLoading,
  };
}
