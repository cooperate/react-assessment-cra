import React, { useState, useContext, useEffect } from "react";
import { Card, Form } from "../../../App";
import { BrandsContext } from "../../../contexts";
import { Order } from "../../../types";
import AddOrderButton from "../AddOrderButton/AddOrderButton";

const CreateOrder: React.FC = () => {
  const brands = useContext(BrandsContext);
  const [selectedBrand, setSelectedBrand] = useState<string>(brands[0]?.name);
  const [price, setPrice] = useState<string>("0");
  const [priceValidationError, setPriceValidationError] = useState(false);
  const [order, setOrder] = useState<Partial<Order> | null>(null);
  
  useEffect(() => {
    //check if price ends with ".", then return false
    if (price.endsWith(".")) {
      setPriceValidationError(true);
      return;
    }
    //determine if price is a number
    const priceNumber = Number(price);
    if (isNaN(priceNumber)) {
      setPriceValidationError(true);
      return;
    } else {
      setPriceValidationError(false);
      setOrder({ date: new Date(), price: Number(price) });
    }
  }, [price]);
  
  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Check if the input value adheres to <SOMENUMBER>.XX, because we may sometimes have a trailing decimal, we allow it
    const isValidInput = /^$|^(0|[1-9]\d*)(\.\d{0,2})?$/.test(inputValue);
    if (isValidInput) {
      setPrice(inputValue);
    }
  };
  
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (price === "0") {
      setPrice("");
    }
  };
  

  return (
    <Card>
      <h3>Create Order</h3>
      <Form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="brand-select">Brand:</label>
        <select
          id="brand-select"
          value={selectedBrand || ""}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          {brands.map((brand) => (
            <option key={brand.name} value={brand.name}>
              {brand.name}
            </option>
          ))}
        </select>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          value={price}
          onChange={handleChangePrice}
          onFocus={handleFocus}
        />
        {priceValidationError && <p>Price must be a number</p>}
        {selectedBrand && !!order?.price && order?.price > 0 && (
          <AddOrderButton brandName={selectedBrand} newOrder={order} />
        )}
      </Form>
    </Card>
  );
};

export default CreateOrder;
