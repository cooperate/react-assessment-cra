import { createContext } from 'react';
import { Brand, Order } from '../types';

export const BrandContext = createContext<Brand[]>([]);
export const OrderContext = createContext<Order>({
    date: '',
    price: 0,
});