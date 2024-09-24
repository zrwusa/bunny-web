'use client';

import { useQuery } from '@tanstack/react-query';

interface User {
  id: number;
  name: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('http://localhost:8080/api/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
};

export const ReactQueryExample = () => {
  const { data, error, isLoading } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error loading data: {error.message}</p>;

  return <ul>{data?.map((user) => <li key={user.id}>{user.name}</li>)}</ul>;
};
