import React from 'react';
import { render, screen } from '@testing-library/react';
import { Order, OrderPrice, OrderDate } from './Order';

describe('Order', () => {
  const myOrder = {
    id: 1,
    price: 10.99,
    date: new Date('2023-03-25'),
  };

  it('renders the order price', () => {
    render(
      <Order order={myOrder}>
        <OrderPrice />
      </Order>
    );
    expect(screen.getByText(myOrder.price)).toBeInTheDocument();
  });

  it('renders the order date', () => {
    render(
      <Order order={myOrder}>
        <OrderDate />
      </Order>
    );
    expect(screen.getByText(new Date(myOrder.date).toLocaleDateString())).toBeInTheDocument();
  });
});
