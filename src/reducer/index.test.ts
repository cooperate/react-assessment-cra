import { ADD_ORDER, REMOVE_ORDER, ADD_BRAND, REMOVE_BRAND } from './actionTypes';
import { brandReducer } from './';
import { Brand, Order } from '../types';
import { BrandActionTypes } from './actions';

const initialState: Brand[] = [];

describe('brandReducer', () => {
  it('should return the initial state', () => {
    expect(brandReducer(undefined, {} as BrandActionTypes)).toEqual(initialState);
  });

  it('should handle ADD_ORDER', () => {
    const brandName = 'Apple';
    const orderDate = new Date('2023-03-28')
    const orderPrice= 500;
    const state: Brand[] = [{ name: brandName, orders: [] }];
    const order = {
        id: 0,
        date: orderDate,
        price: orderPrice,
    }
    const newState = brandReducer(state, {
      type: ADD_ORDER,
      payload: { brandName, orderDate, orderPrice },
    });

    expect(newState).toEqual([{ name: brandName, orders: [order] }]);
  });

  it('should handle REMOVE_ORDER and ensure correct order was removed and remaining orders count is correct', () => {
    const brandName = 'Apple';
    const orderDate1 = new Date('2023-03-28');
    const orderDate2 = new Date('2023-03-29');
    const state: Brand[] = [
      {
        name: brandName,
        orders: [
          { id: 0, date: orderDate1, price: 500 },
          { id: 1, date: orderDate2, price: 600 },
        ],
      },
    ];
  
    const newState = brandReducer(state, {
      type: REMOVE_ORDER,
      payload: { id: state[0].orders[0].id },
    });
  
    expect(newState).toEqual([
      {
        name: brandName,
        orders: [{ id: 1, date: orderDate2, price: 600 }],
      },
    ]);
    expect(newState[0].orders.length).toBe(1);
    expect(newState[0].orders[0].id).toBe(1);
  });

  it('should handle ADD_BRAND', () => {
    const brandName = 'Apple';

    const newState = brandReducer(initialState, {
      type: ADD_BRAND,
      payload: brandName,
    });

    expect(newState).toEqual([{
        name: brandName,
        orders: [],
    }]);
  });

  it('should handle REMOVE_BRAND', () => {
    const brandToRemove = 'Apple';
    const state: Brand[] = [{ name: brandToRemove, orders: [] }];

    const newState = brandReducer(state, {
      type: REMOVE_BRAND,
      payload: brandToRemove,
    });

    expect(newState).toEqual([]);
  });
});
