import React from "react";
import styleCard from "./card.module.css";

const Card = ({ props }) => {
  return (
    <div className={styleCard.card}>
      <img src={props.image} alt={`Изоображение ${props.name}`} />
      <h2 className={styleCard.title}>{props.name}</h2>
      <span className={styleCard.price}>{props.price} руб.</span>
      <button className={styleCard.button}>Заказать</button>
    </div>
  );
};
export default Card;
