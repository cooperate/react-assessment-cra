import React, { useContext } from "react";
import { BrandsDispatchContext } from "../../../contexts";
import { ADD_BRAND } from "../../../reducer/actionTypes";

interface AddBrandButtonProps {
  brandName: string;
}

const AddBrandButton: React.FC<AddBrandButtonProps> = ({ brandName }) => {
  const dispatch = useContext(BrandsDispatchContext);

  const handleClick = () => {
    if (dispatch) {
      dispatch({ type: ADD_BRAND, payload: brandName });
    }
  };

  return <button onClick={handleClick}>Add Brand</button>;
};

export default AddBrandButton;
