import React, { useContext } from 'react';
import { BrandsContext } from '../../contexts';
import { Order, OrderDate, OrderPrice } from '../Orders/Order';
import { Brand as BrandType, Order as OrderType } from '../../types';
import RemoveBrandButton from './RemoveBrandButton/RemoveBrandButton';

interface BrandProps {
  brand: BrandType;
}

const Brand: React.FC<BrandProps> = ({ brand }) => {
  return (
    <div>
      <h3>{brand.name}</h3>
      <RemoveBrandButton brandName={brand.name} />
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
  const brands = useContext(BrandsContext);

  return (
    <div>
      {brands.map((brand, index) => (
        <Brand key={index} brand={brand} />
      ))}
    </div>
  );
};