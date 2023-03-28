import { render, screen, fireEvent } from '@testing-library/react';
import AddBrandButton from './AddBrandButton';
import { BrandsDispatchContext } from '../../../contexts';
import { ADD_BRAND } from '../../../reducer/actionTypes';

describe('AddBrandButton', () => {
  const brandName = 'Apple';

  it('renders correctly', () => {
    render(
      <BrandsDispatchContext.Provider value={() => {}}>
        <AddBrandButton brandName={brandName} />
      </BrandsDispatchContext.Provider>
    );
    expect(screen.getByText('Add Brand')).toBeInTheDocument();
  });

  it('dispatches ADD_BRAND action with new brand on click', () => {
    const dispatch = jest.fn();
    render(
      <BrandsDispatchContext.Provider value={dispatch}>
        <AddBrandButton brandName={brandName} />
      </BrandsDispatchContext.Provider>
    );

    fireEvent.click(screen.getByText('Add Brand'));
    expect(dispatch).toHaveBeenCalledWith({ type: ADD_BRAND, payload: brandName });
  });
});
