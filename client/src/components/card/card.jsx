import React from "react";
import { observer } from "mobx-react-lite";
import styleCard from "./card.module.css";
import { useHistory } from "react-router-dom";
import { BASKET_PAGE_ROUTE } from "../../utils/constants";

const Card = observer(({ product, onClick }) => {
  const history = useHistory();
  const order = (e) => {
    e.stopPropagation();
    history.push(BASKET_PAGE_ROUTE);
  };
  return (
    <div className={styleCard.card} onClick={onClick}>
      <img
        className={styleCard.image}
        src={product.image}
        alt={`Изоображение ${product.name}`}
      />
      <h2 className={styleCard.title}>{product.name}</h2>
      <span className={styleCard.price}>{product.price} руб.</span>
      <button className={styleCard.button} onClick={order}>
        Заказать
      </button>
    </div>
  );
});
export default Card;
