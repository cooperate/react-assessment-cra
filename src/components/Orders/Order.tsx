import { useContext } from "react";
import { FlatCard, DescriptorText } from "../../App";
import { OrderContext } from "../../contexts";
import { Order as OrderType } from "../../types";
import RemoveOrderButton from "./RemoveOrderButton/RemoveOrderButton";

type OrderProps = {
  order: OrderType;
  children: React.ReactNode;
};

const Order = ({ order, children }: OrderProps) => (
  <OrderContext.Provider value={order}>
    <FlatCard>
      <h4>Order ID {order.id}</h4>
      {children}
      <RemoveOrderButton orderId={order.id} />
    </FlatCard>
  </OrderContext.Provider>
);

const OrderPrice = () => {
  const order = useContext(OrderContext);
  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };
  return <div><DescriptorText>Price</DescriptorText>{formatPrice(order.price)}</div>;
};

const OrderDate = () => {
  const { date } = useContext(OrderContext);
  //render date in a more readable format
  const renderHumanReadableDate = (date: Date) => {
    return date.toLocaleDateString();
  };
  return <div><DescriptorText>Date</DescriptorText>{renderHumanReadableDate(date)}</div>;
};

export { Order, OrderPrice, OrderDate };
