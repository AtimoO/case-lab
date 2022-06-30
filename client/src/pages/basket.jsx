import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "..";

import styleBasket from "./basket.module.css";

const BasketPage = () => {
  const { user } = useContext(Context);

  const userData = user.user.user_info ? user.user.user_info : user.user;

  const history = useHistory();
  return (
    userData && (
      <div>
        <button
          className={`${styleBasket.button} ${styleBasket.button__back}`}
          onClick={() => {
            history.goBack();
          }}
        >
          Назад
        </button>
        <h2 className={styleBasket.title}>Корзина</h2>
        <p className={styleBasket.text}>Ваш баланс: {userData.balance} руб.</p>
        <div></div>
        <button className={styleBasket.button} onClick={(e) => {}}>
          Оформить заказ
        </button>
      </div>
    )
  );
};
export default BasketPage;
