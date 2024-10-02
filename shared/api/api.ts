import ky from 'ky';

const getAccessToken = () => localStorage.getItem('accessToken');
const getRefreshToken = () => localStorage.getItem('refreshToken');
const setAccessToken = (token: string) =>
  localStorage.setItem('accessToken', token);
const PASSPORT_BASE_URL = `http://localhost:9090`;

const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();

  if (!refreshToken) {
    throw new Error('No refresh token available');
  }

  const response = await ky.post(`${PASSPORT_BASE_URL}/auth/refresh`, {
    json: { refreshToken },
  });
  const jsonRes = await response.json<{ accessToken: string }>();

  if (jsonRes?.accessToken) {
    setAccessToken(jsonRes.accessToken);
    return jsonRes.accessToken;
  }

  throw new Error('Failed to refresh access token');
};
const { BASE_URL } = process.env;

export const apiWithAuth = ky.extend({
  prefixUrl: BASE_URL,
  hooks: {
    beforeRequest: [
      (request) => {
        const accessToken = getAccessToken();
        if (accessToken) {
          request.headers.set('Authorization', `Bearer ${accessToken}`);
        }
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        if (response.status === 401) {
          try {
            const newAccessToken = await refreshAccessToken();
            const retryResponse = await ky(request.url, {
              ...options,
              headers: {
                ...options.headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });

            return retryResponse;
          } catch (error) {
            console.error('Failed to refresh token', error);
            throw error;
          }
        }
      },
    ],
  },
});
