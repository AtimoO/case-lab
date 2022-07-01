import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import styleOrder from "./order.module.css";

const Order = observer(() => {
  const { basket } = useContext(Context);
  // const count = basket.basketAll.reduce((acc, pr) => acc + pr.price, 0);

  return (
    <div className={styleOrder.container}>
      <div>
        <h3 className={styleOrder.title}>Ваш заказ</h3>
        <hr />
        <div>
          <span className={`${styleOrder.text} ${styleOrder.text_bold}`}>
            Сумма заказа
          </span>
          <span className={styleOrder.text}>{basket.sumCount} руб.</span>
        </div>
      </div>
      <hr />
      <button className={styleOrder.button}>Оформить заказ</button>
    </div>
  );
});
export default Order;
