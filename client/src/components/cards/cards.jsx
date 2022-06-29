import React from "react";
import Card from "./card/card";
import styleCards from "./cards.module.css";

const Cards = () => {
  return (
    <section className={styleCards.cards}>
      <h1 className={styleCards.title}>Список товаров</h1>
      <div className={styleCards.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};
export default Cards;
