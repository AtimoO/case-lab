import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import styleCard from "./card.module.css";
import { config } from "../../utils/constants";
import { Context } from "../..";

const Card = observer(({ product, onClick }) => {
  const { basket } = useContext(Context);
  const order = (e) => {
    e.stopPropagation();
    if (product) {
      basket.setBasket(product);
    }
  };
  return (
    <div className={styleCard.card} onClick={onClick}>
      <img
        className={styleCard.image}
        src={`${config.baseUrl}/${product.image}`}
        alt={`Изоображение ${product.name}`}
      />
      <h2 className={styleCard.title}>{product.title}</h2>
      <span className={styleCard.price}>{product.price} руб.</span>
      <button className={styleCard.button} onClick={order}>
        Добавить в корзину
      </button>
    </div>
  );
});
export default Card;
