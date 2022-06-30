import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "..";
import CardBasket from "../components/card-basket/card-basket";
import Order from "../components/order/order";

import styleBasket from "./basket.module.css";

const BasketPage = observer(() => {
  const { user } = useContext(Context);
  const { basket } = useContext(Context);
  const history = useHistory();

  const userData = user.user.user_info ? user.user.user_info : user.user;
  return (
    userData && (
      <div className={styleBasket.container}>
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
        {basket.uniqProductBasket.length > 0 ? (
          <div className={styleBasket.container__order}>
            <div>
              {basket?.uniqProductBasket.map((product) => (
                <CardBasket key={product.id} product={product} />
                ))}
            </div>
            <Order />
          </div>
        ) : (
          <div>
            Корзина пуста
          </div>
        )}
      </div>
    )
  );
});
export default BasketPage;
