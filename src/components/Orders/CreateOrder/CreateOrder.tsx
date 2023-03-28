import React, { useState, useContext, useEffect } from "react";
import { BrandsContext } from "../../../contexts";
import { Order } from "../../../types";
import AddOrderButton from "../AddOrderButton/AddOrderButton";

const CreateOrder: React.FC = () => {
  const brands = useContext(BrandsContext);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [price, setPrice] = useState<number>(0);
  const [order, setOrder] = useState<Partial<Order> | null>(null);

  useEffect(() => {
    if (selectedBrand && price) {
      setOrder({ date: new Date(), price });
    }
  }, [selectedBrand, price]);

  return (
    <div>
      <h3>Create Order</h3>
      <form onSubmit={(e) => e.preventDefault()}>
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
          type="number"
          id="price"
          step="0.01"
          min="0"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        {selectedBrand && order && (
          <AddOrderButton brandName={selectedBrand} newOrder={order} />
        )}
      </form>
    </div>
  );
};

export default CreateOrder;
