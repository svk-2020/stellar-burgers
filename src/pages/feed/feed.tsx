import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import { getFeed, selectFeed } from '../../slices/feedSlice';

export const Feed: FC = () => {
  /** TODO_DONE: взять переменную из стора */
  const dispatch = useDispatch();
  const orders: TOrder[] = useSelector(selectFeed);

  useEffect(() => {
    dispatch(getFeed());
  }, []);

  console.log('orders - ', orders);

  if (!orders.length) {
    return <Preloader />;
  }

  return <FeedUI orders={orders} handleGetFeeds={() => dispatch(getFeed())} />;
};
