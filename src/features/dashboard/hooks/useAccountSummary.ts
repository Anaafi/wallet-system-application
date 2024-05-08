import { useQuery } from '@tanstack/react-query';

import { httpClient } from '../../../config';

export function useAccountSummary() {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ['accountSummary'],
    queryFn: async () => {
      return httpClient.get(`/wallet/account-summary`);
    },
  });
  console.log('account', data);

  return {
    data: data?.data ?? {},
    isLoading,
  };
}
