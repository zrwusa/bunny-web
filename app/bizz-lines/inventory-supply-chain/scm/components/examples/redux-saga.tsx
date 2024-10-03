'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from 'shared/redux/store';
import { useEffect } from 'react';
import { fetchData } from 'shared/redux/reducers/example-reducer';

export const ReduxSagaExample = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, data } = useSelector((state: RootState) => state.example);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (data) return <ul>
    {data?.map(({ id, name, price, description }) => (
        <li key={id}>
          <span>{name}</span>
          <span>{price}</span>
          <span>{description}</span>
        </li>
    ))}
  </ul>
};

export default ReduxSagaExample;
