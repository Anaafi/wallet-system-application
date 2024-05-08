import axios from 'axios';

import { ENV_VARS } from '.';

const instance = axios.create({
  baseURL: `${ENV_VARS.BASE_URL}/api/v1`,
});

instance.interceptors.request.use((request: any) => {
  const headers = request.headers;
  const token = localStorage.getItem('loginToken');

  return {
    ...request,
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  };
});

export { instance as httpClient };
