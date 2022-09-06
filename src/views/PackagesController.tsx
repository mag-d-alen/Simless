import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useGetPackagesQuery } from '../redux/api/simQuery';
import { setRatesService } from '../redux/InfoSlice';

export const PackageController = () => {
  const dispatch = useDispatch();
  const { data, isSuccess } = useGetPackagesQuery({});

  useEffect(() => {
    if (!data) return;
    dispatch(setRatesService(data));
  }, [isSuccess]);

  return (
    <></>
  )
}
