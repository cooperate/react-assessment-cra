import React from 'react';
import { render, screen } from '@testing-library/react';
import { Brands } from './Brands';
import { BrandContext } from '../../contexts';
import { Brand, Order } from '../../types';

const exampleData: Brand[] = [
  {
    name: "Matter",
    orders: [
      {
        date: "2023-01-20T22:11:43.452Z",
        price: 100
      }
    ]
  },
  {
    name: "Uncoil",
    orders: [
      {
        date: "2022-07-02T09:21:22.222Z",
        price: 95
      }
    ]
  },
];

describe('Brands', () => {
  const renderWithContext = () => {
    return render(
      <BrandContext.Provider value={exampleData}>
        <Brands />
      </BrandContext.Provider>
    );
  };

  it('renders a list of brand names', () => {
    renderWithContext();
    for (const brand of exampleData) {
      const brandElement = screen.getByText(brand.name);
      expect(brandElement).toBeInTheDocument();
    }
  });

  it('renders a list of order dates', () => {
    renderWithContext();
    for (const brand of exampleData) {
      for (const order of brand.orders) {
        const formattedDate = new Date(order.date).toLocaleDateString();
        const dateElement = screen.getByText(formattedDate);
        expect(dateElement).toBeInTheDocument();
      }
    }
  });

  it('each brand has a corresponding list of orders', () => {
    renderWithContext();
    for (const brand of exampleData) {
      const brandElement = screen.getByText(brand.name);
      // Replace direct Node access with Testing Library methods
      const orderListItems = screen.getAllByText((content, element) => {
        return brand.orders.some((order: Order) => {
          const formattedDate = new Date(order.date).toLocaleDateString();
          return content.includes(formattedDate);
        });
      });
      expect(orderListItems.length).toBe(brand.orders.length);
    }
  });
});
