import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { REMOVE_ORDER } from '../../../reducer/actionTypes';
import RemoveOrderButton from './RemoveOrderButton';
import { BrandsDispatchContext } from '../../../contexts';

describe('RemoveOrderButton', () => {
  const orderId = 1;

  it('renders correctly', () => {
    render(
      <BrandsDispatchContext.Provider value={() => {}}>
        <RemoveOrderButton orderId={orderId} />
      </BrandsDispatchContext.Provider>
    );
    expect(screen.getByText('Remove Order')).toBeInTheDocument();
  });

  it('dispatches REMOVE_ORDER action with orderId on click', () => {
    const dispatch = jest.fn();
    render(
      <BrandsDispatchContext.Provider value={dispatch}>
        <RemoveOrderButton orderId={orderId} />
      </BrandsDispatchContext.Provider>
    );

    fireEvent.click(screen.getByText('Remove Order'));
    expect(dispatch).toHaveBeenCalledWith({ type: REMOVE_ORDER, payload: { id: orderId } });
  });
});
