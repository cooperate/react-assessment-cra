import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ADD_ORDER } from "../../../reducer/actionTypes";
import AddOrderButton from "./AddOrderButton";
import { BrandsDispatchContext } from "../../../contexts";
import { Order } from "../../../types";

describe("AddOrderButton", () => {
  const brandName = "Apple";
  const orderDate = new Date("2023-03-28");
  const orderPrice = 500;
  const newOrder: Partial<Order> = {
    date: orderDate,
    price: orderPrice,
  };

  it("renders correctly", () => {
    render(
      <BrandsDispatchContext.Provider value={() => {}}>
        <AddOrderButton brandName={brandName} newOrder={newOrder} />
      </BrandsDispatchContext.Provider>
    );
    expect(screen.getByText("Add Order")).toBeInTheDocument();
  });

  it("dispatches ADD_ORDER action with brandName and newOrder on click", () => {
    const dispatch = jest.fn();
    render(
      <BrandsDispatchContext.Provider value={dispatch}>
        <AddOrderButton brandName={brandName} newOrder={newOrder} />
      </BrandsDispatchContext.Provider>
    );

    fireEvent.click(screen.getByText("Add Order"));
    expect(dispatch).toHaveBeenCalledWith({
      type: ADD_ORDER,
      payload: { brandName, orderPrice: newOrder.price, orderDate: newOrder.date },
    });
  });
});
