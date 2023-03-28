import { useContext } from "react";
import { OrderContext } from "../../contexts";
import { Brand, Order as OrderType } from "../../types";
import RemoveOrderButton from "./RemoveOrderButton/RemoveOrderButton";

type OrderProps = {
  order: OrderType;
  children: React.ReactNode;
};

const Order = ({ order, children }: OrderProps) => (
  <OrderContext.Provider value={order}>
    <div className="order-card">
      {children}
      <RemoveOrderButton orderId={order.id} />
    </div>
  </OrderContext.Provider>
);

const OrderPrice = () => {
  const order = useContext(OrderContext);
  return <p>{order.price}</p>;
};

const OrderDate = () => {
  const { date } = useContext(OrderContext);
  //render date in a more readable format
  const renderHumanReadableDate = (date: Date) => {
    return date.toLocaleDateString();
  };
  return <p>{renderHumanReadableDate(date)}</p>;
};

export { Order, OrderPrice, OrderDate };
