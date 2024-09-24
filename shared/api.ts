
const fetchWithAuth = async <R>(url: string, options?: RequestInit): Promise<R> => {
    const token = localStorage.getItem('accessToken');
  
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options?.headers,
    };
  
    const response = await fetch(url, {
      ...options,
      headers,
    });
  
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
  
    return response.json() as Promise<R>;
  };
  
  export default fetchWithAuth;


import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, 
      refetchOnWindowFocus: false, 
    },
  },
});

  