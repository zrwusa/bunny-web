'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AccessTokenHandler = () => {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.has('access-token') && params.has('refresh-token')) {
      const accessToken = params.get('access-token');
      const refreshToken = params.get('refresh-token');
      if (accessToken) localStorage.setItem('accessToken', accessToken);
      if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
      params.delete('access-token');
      params.delete('refresh-token');
      const newUrl = `${window.location.pathname}${params.size > 0 ? '?' + params.toString() : ''}`;
      router.push(newUrl);
    }
  }, [router]);

  return null;
};

export default AccessTokenHandler;
