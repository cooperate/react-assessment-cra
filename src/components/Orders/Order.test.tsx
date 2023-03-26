import React from 'react';
import { render, screen } from '@testing-library/react';
import { Order, OrderPrice, OrderDate } from './Order';

describe('Order', () => {
  const myOrder = {
    price: 10.99,
    date: '2023-03-25',
  };

  it('renders the order price', () => {
    const { getByText } = render(
      <Order order={myOrder}>
        <OrderPrice />
      </Order>
    );
    expect(screen.getByText(myOrder.price)).toBeInTheDocument();
  });

  it('renders the order date', () => {
    const { getByText } = render(
      <Order order={myOrder}>
        <OrderDate />
      </Order>
    );
    expect(screen.getByText(myOrder.date)).toBeInTheDocument();
  });
});
