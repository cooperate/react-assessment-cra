import React, { useContext } from 'react';
import { BrandsDispatchContext } from '../../../contexts';
import { REMOVE_BRAND } from '../../../reducer/actionTypes';

interface RemoveBrandButtonProps {
  brandName: string;
}

const RemoveBrandButton: React.FC<RemoveBrandButtonProps> = ({ brandName }) => {
  const dispatch = useContext(BrandsDispatchContext);

  const handleClick = () => {
    if (dispatch) {
      dispatch({ type: REMOVE_BRAND, payload: brandName });
    }
  };

  return <button onClick={handleClick}>Remove Brand</button>;
};

export default RemoveBrandButton;
