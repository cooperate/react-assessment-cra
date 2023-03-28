import React, { useContext } from 'react';
import { BrandsDispatchContext } from '../../../contexts';
import { ADD_ORDER } from '../../../reducer/actionTypes';
import { Order } from '../../../types';

interface AddOrderButtonProps {
  brandName: string;
  newOrder: Partial<Order>;
}

const AddOrderButton: React.FC<AddOrderButtonProps> = ({ brandName, newOrder }) => {
  const dispatch = useContext(BrandsDispatchContext);

  const handleClick = () => {
    if (dispatch) {
      dispatch({ type: ADD_ORDER, payload: { brandName, orderPrice: newOrder?.price, orderDate: newOrder?.date } });
    }
  };

  return <button onClick={handleClick}>Add Order</button>;
};

export default AddOrderButton;
