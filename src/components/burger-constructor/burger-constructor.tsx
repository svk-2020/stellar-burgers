import { FC, useMemo } from 'react';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { useDispatch, useSelector } from '../../services/store';
import {
  clearIngredients,
  selectConstructorBurgers
} from '../../services/slices/constructorSlice';
import { useNavigate } from 'react-router-dom';
import { selectAuthenticated } from '../../services/slices/userSlice';
import {
  clearOrderData,
  newOrder,
  selectOrderData,
  selectOrderRequest
} from '../../services/slices/orderSlice';

export const BurgerConstructor: FC = () => {
  /** TODO_DONE: взять переменные constructorItems, orderRequest и orderModalData из стора */
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(selectAuthenticated);

  const constructorItems = useSelector(selectConstructorBurgers);
  const orderRequest = useSelector(selectOrderRequest);
  const orderModalData = useSelector((state) => state.order.orderData);

  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) return;
    if (!isAuth) {
      return navigate('/login');
    }
    const newBurgerItems = [
      constructorItems.bun._id,
      ...constructorItems.ingredients.map((item) => item._id),
      constructorItems.bun._id
    ];
    dispatch(newOrder(newBurgerItems));
    dispatch(clearIngredients());
  };

  const closeOrderModal = () => {
    dispatch(clearOrderData());
  };

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
