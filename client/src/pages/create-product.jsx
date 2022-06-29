import React from "react";
import { useHistory } from "react-router-dom";
import styleCreateProduct from "./create-product.module.css";

const CreateProductPage = () => {
  const history = useHistory();
  return (
    <div>
      <button
        className={`${styleCreateProduct.button} ${styleCreateProduct.button__back}`}
        onClick={() => {
          history.goBack();
        }}
      >
        Назад
      </button>
      <h2 className={styleCreateProduct.title}>Добавление продукта</h2>
      <input
        className={styleCreateProduct.input}
        type="text"
        placeholder="Введите название товара"
      />
      <input
        className={styleCreateProduct.input}
        type="text"
        placeholder="Введите название товара"
      />
      <input
        className={styleCreateProduct.input}
        type="text"
        placeholder="Введите название товара"
      />
      <button
        className={styleCreateProduct.button}
        onClick={(e) => {
          console.log("add");
        }}
      >
        Добавить продукт
      </button>
    </div>
  );
};
export default CreateProductPage;
