import React, { useContext } from 'react';
import { BrandsContext } from '../../contexts';
import { Order, OrderDate, OrderPrice } from '../Orders/Order';
import { Brand as BrandType, Order as OrderType } from '../../types';
import RemoveBrandButton from './RemoveBrandButton/RemoveBrandButton';
import styled from '@emotion/styled';
import { Card } from '../../App';


const BrandsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  & > * {
    margin: 0 2rem;
  }
`;

const OrdersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

interface BrandProps {
  brand: BrandType;
}

const Brand: React.FC<BrandProps> = ({ brand }) => {
  return (
    <Card>
      <h3>{brand.name}</h3>
      <RemoveBrandButton brandName={brand.name} />
      <OrdersContainer>
        {brand.orders.map((order: OrderType, index) => (
          <Order order={order} key={index}>
            <OrderPrice />
            <OrderDate />
          </Order>
        ))}
      </OrdersContainer>
    </Card>
  );
};

export const Brands: React.FC = () => {
  const brands = useContext(BrandsContext);

  return (
    <BrandsContainer>
      {brands.map((brand, index) => (
        <Brand key={index} brand={brand} />
      ))}
    </BrandsContainer>
  );
};