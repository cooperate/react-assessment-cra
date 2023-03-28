// actions.ts
import { ADD_ORDER, REMOVE_ORDER, ADD_BRAND, REMOVE_BRAND } from './actionTypes';
import { Brand } from '../types';

interface AddOrderAction {
  type: typeof ADD_ORDER;
  payload: { brandName: string; orderPrice: number, orderDate: Date };
}

interface RemoveOrderAction {
  type: typeof REMOVE_ORDER;
  payload: { id: number };
}

interface AddBrandAction {
  type: typeof ADD_BRAND;
  payload: string;
}

interface RemoveBrandAction {
  type: typeof REMOVE_BRAND;
  payload: string;
}

export type BrandActionTypes =
  | AddOrderAction
  | RemoveOrderAction
  | AddBrandAction
  | RemoveBrandAction;
