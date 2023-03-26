import { useContext } from "react";
import { OrderContext } from "../../contexts";

type OrderProps = {
  order: {
    price: number;
    date: string;
  };
  children: React.ReactNode;
};

const Order = ({ order, children }: OrderProps) => (
  <OrderContext.Provider value={order}>
    <div className="order-card">{children}</div>
  </OrderContext.Provider>
);

const OrderPrice = () => {
  const order = useContext(OrderContext);
  return <p>{order.price}</p>;
};

const OrderDate = () => {
  const { date } = useContext(OrderContext);
  //render date in a more readable format
  const renderHumanReadableDate = (date: string) => {
    const dateObject = new Date(date);
    return dateObject.toLocaleDateString();
  };
  return <p>{renderHumanReadableDate(date)}</p>;
};

export { Order, OrderPrice, OrderDate };
