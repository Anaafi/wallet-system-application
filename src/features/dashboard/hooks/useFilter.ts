import React from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { httpClient } from '../../../config';
import { FilterType } from '../../../interfaces';

export function useFilter() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = React.useState<FilterType>({
    transactionStatus: '',
    transactionType: '',
    startDate: '',
    endDate: '',
  });

  function handleFilterChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setFilter((prev) => {
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function handleDropdownFilterChange(value: string) {
    setFilter((prev) => {
      return {
        ...prev,
        transactionType: value,
      };
    });
  }

  const transactionType = searchParams.get('transactionType');
  const transactionStatus = searchParams.get('transactionStatus');
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');

  const {
    data,
    refetch,
    isPending: isLoading,
  } = useQuery({
    queryKey: ['getFilter', filter],
    queryFn: async () => {
      return httpClient.get(
        `/wallet/filter${applyQueryParams({ transactionStatus, transactionType, startDate, endDate })}`,
      );
    },
  });

  function applyFilter() {
    navigate(`${pathname}${applyQueryParams(filter)}`);
  }

  return {
    data: data?.data.data ?? {},
    isLoading,
    refetch,
    filter,
    handleFilterChange,
    applyFilter,
    handleDropdownFilterChange,
  };
}

function applyQueryParams(data: any): string {
  let queryStr = '';
  Object.entries(data).map(([key, value]) => {
    if (value) {
      if (queryStr.length == 0) {
        queryStr = `${queryStr}?${key}=${value}`;
      } else {
        queryStr = `${queryStr}&${key}=${value}`;
      }
    }
  });

  return queryStr;
}
