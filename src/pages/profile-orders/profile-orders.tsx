import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import { getOrders, selectOrdersList } from '../../slices/orderSlice';

export const ProfileOrders: FC = () => {
  /** TODO_DONE: взять переменную из стора */
  const dispatch = useDispatch();
  const orders = useSelector(selectOrdersList);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return <ProfileOrdersUI orders={orders} />;
};
