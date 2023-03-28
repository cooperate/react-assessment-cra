// reducer.ts
import { ADD_ORDER, REMOVE_ORDER, ADD_BRAND, REMOVE_BRAND } from './actionTypes';
import { BrandActionTypes } from './actions';
import { Brand } from '../types';

const initialState: Brand[] = [];

export const brandReducer = (state = initialState, action: BrandActionTypes): Brand[] => {
  switch (action.type) {
    case ADD_ORDER: {
      const { brandName, orderPrice, orderDate } = action.payload;

      const maxOrderId = state.reduce((maxId, brand) => {
        const brandMaxOrderId = brand.orders.reduce((max, order) => Math.max(max, order.id), -1);
        return Math.max(maxId, brandMaxOrderId);
      }, -1);
    
      const newOrderId = maxOrderId + 1;
    
      return state.map((brand) => {
        if (brand.name === brandName) {
          const newOrder = {
            id: newOrderId,
            date: orderDate,
            price: orderPrice,
          };
          return {
            ...brand,
            orders: [...brand.orders, newOrder],
          };
        }
        return brand;
      });
    }

    case REMOVE_ORDER: {
      const { id } = action.payload;
      console.log('order id being removed', id)
      return state.map(brand => ({
        ...brand,
        orders: brand.orders.filter(order => order.id !== id),
      }));
    }

    case ADD_BRAND: {
      const brandName = action.payload;
      const brandExists = state.some(brand => brand.name === brandName);
      if (brandExists) {
        return state;
      } else {
        return [...state, {
          name: brandName,
          orders: [],
        }];
      }
    }

    case REMOVE_BRAND: {
      return state.filter(brand => brand.name !== action.payload);
    }

    default:
      return state;
  }
};
