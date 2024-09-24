'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from 'shared/redux/store';
import { useEffect } from 'react';
import { fetchData } from 'shared/redux/reducers/example-reducer';

export const ReduxSagaExample = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.example);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
};

export default ReduxSagaExample;
