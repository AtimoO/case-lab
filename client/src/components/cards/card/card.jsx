import React from "react";
import styleCard from "./card.module.css"

const Card = () => {
  return (
    <div className={styleCard.card}>
      <img src="https://dummyimage.com/200x200" alt="" />
      <h2 className={styleCard.title}>Title</h2>
      <p className={styleCard.description}>Description</p>
      <span className={styleCard.price}>700 руб.</span>
      <button className={styleCard.button}>Заказать</button>
    </div>
  )
}
export default Card