import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import { config } from "../../utils/constants";
import styleCardBasket from "./card-basket.module.css";

const CardBasket = observer(({ product }) => {
  const { basket } = useContext(Context);
  const [counter, setCounter] = useState(1);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum(sum + product.price * counter);
  }, []);

  const increment = () => {
    setCounter(counter + 1);
    setSum(sum + product.price);
  };

  const decrement = () => {
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
      setSum(sum - product.price);
    }
  };

  return (
    <div className={styleCardBasket.container}>
      <img
        className={styleCardBasket.image}
        src={`${config.baseUrl}/${product.image}`}
        alt={`Изоображение ${product.image}`}
      />
      <div className={styleCardBasket.container_description}>
        <div className={styleCardBasket.wrapper}>
          <h2 className={styleCardBasket.title}>{product.title}</h2>
          <p className={styleCardBasket.description}>{product.description}</p>
        </div>
        <div className={styleCardBasket.container__price}>
          <span className={styleCardBasket.price}>
            Цена {product.price} руб.
          </span>
          <button className={styleCardBasket.button} onClick={decrement}>
            -
          </button>
          <span className={styleCardBasket.price}>{counter}</span>шт.
          <button className={styleCardBasket.button} onClick={increment}>
            +
          </button>
          <span className={styleCardBasket.price}>Сумма: {sum} руб.</span>
        </div>
      </div>
    </div>
  );
});
export default CardBasket;
