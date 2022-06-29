import { observer } from "mobx-react-lite";
import React from "react";
import { useHistory } from "react-router-dom";
import { BASKET_PAGE_ROUTE } from "../utils/constants";
import styleProduct from "./product.module.css";

const ProductPage = observer(() => {
  const history = useHistory();
  return (
    <div>
      <button
        className={`${styleProduct.button} ${styleProduct.button__back}`}
        onClick={(e) => {
          history.goBack();
        }}
      >
        Назад
      </button>
      <h2 className={styleProduct.title}>Название товара</h2>
      <div className={styleProduct.container}>
        <img
          className={styleProduct.image}
          src="https://dummyimage.com/200x200"
          alt="Изоображение"
        />
        <p className={styleProduct.description}>Lorem ipsum dolor</p>
        <div className={styleProduct.container__price}>
          <span className={styleProduct.price}>30 руб.</span>
          <button
            className={styleProduct.button}
            onClick={(e) => {
              history.push(BASKET_PAGE_ROUTE);
            }}
          >
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
});
export default ProductPage;
