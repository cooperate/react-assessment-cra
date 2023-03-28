import React, { useContext } from 'react';
import { BrandsDispatchContext } from '../../../contexts';
import { REMOVE_ORDER } from '../../../reducer/actionTypes';

interface RemoveOrderButtonProps {
    orderId: number;
}

const RemoveOrderButton: React.FC<RemoveOrderButtonProps> = ({ orderId }) => {
  const dispatch = useContext(BrandsDispatchContext);

  const handleClick = () => {
    if (dispatch) {
      dispatch({ type: REMOVE_ORDER, payload: { id: orderId } });
    }
  };

  return <button onClick={handleClick}>Remove Order</button>;
};

export default RemoveOrderButton;
