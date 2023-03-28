import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { REMOVE_BRAND } from '../../../reducer/actionTypes';
import RemoveBrandButton from './RemoveBrandButton';
import { BrandsDispatchContext } from '../../../contexts';

describe('RemoveBrandButton', () => {
  const brandName = 'Apple';

  it('renders correctly', () => {
    render(
      <BrandsDispatchContext.Provider value={() => {}}>
        <RemoveBrandButton brandName={brandName} />
      </BrandsDispatchContext.Provider>
    );
    expect(screen.getByText('Remove Brand')).toBeInTheDocument();
  });

  it('dispatches REMOVE_BRAND action with brand name on click', () => {
    const dispatch = jest.fn();
    render(
      <BrandsDispatchContext.Provider value={dispatch}>
        <RemoveBrandButton brandName={brandName} />
      </BrandsDispatchContext.Provider>
    );

    fireEvent.click(screen.getByText('Remove Brand'));
    expect(dispatch).toHaveBeenCalledWith({ type: REMOVE_BRAND, payload: brandName });
  });
});
