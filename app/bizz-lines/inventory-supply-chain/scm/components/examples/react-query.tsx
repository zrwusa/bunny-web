'use client';

import { useQuery } from '@tanstack/react-query';
import { apiWithAuth } from 'shared/api/api';
import { Product } from 'shared/grpc/generated/product';

const fetchProducts = async () => {
  const response = await apiWithAuth<{data: Product[]}>(
    '/bizz-lines/inventory-supply-chain/scm/api/products',
  );
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return (await response.json()).data;
};

export const ReactQueryExample = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error loading data: {error.message}</p>;

  return (
    <ul>
      {data?.map(({ id, name, price, description }) => (
        <li key={id}>
          <span>{name}</span>
          <span>{price}</span>
          <span>{description}</span>
        </li>
      ))}
    </ul>
  );
};
