import React, { useContext } from 'react';
import { BrandContext } from '../../contexts';
import { Order, OrderDate, OrderPrice } from '../Orders/Order';
import { Brand as BrandType, Order as OrderType } from '../../types';

interface BrandProps {
  brand: BrandType;
}

const Brand: React.FC<BrandProps> = ({ brand }) => {
  return (
    <div>
      <h3>{brand.name}</h3>
      <div>
        {brand.orders.map((order: OrderType, index) => (
          <Order order={order} key={index}>
            <OrderPrice />
            <OrderDate />
          </Order>
        ))}
      </div>
    </div>
  );
};

export const Brands: React.FC = () => {
  const brands: BrandType[] = useContext(BrandContext);

  return (
    <div>
      {brands.map((brand, index) => (
        <Brand key={index} brand={brand} />
      ))}
    </div>
  );
};