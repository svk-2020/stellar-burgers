import { ProfileOrdersUI } from '@ui-pages';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import { getOrders, selectOrdersList } from '../../services/slices/orderSlice';

export const ProfileOrders: FC = () => {
  /** TODO_DONE: взять переменную из стора */
  const dispatch = useDispatch();
  const orders = useSelector(selectOrdersList);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return <ProfileOrdersUI orders={orders} />;
};
