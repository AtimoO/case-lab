import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "..";
import styleCreateProduct from "./create-product.module.css";

const CreateProductPage = observer(() => {
  const { products } = useContext(Context);
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
      <form action="" className={styleCreateProduct.container}>
        <h2 className={styleCreateProduct.title}>Добавление продукта</h2>
        <input
          className={styleCreateProduct.input}
          type="text"
          placeholder="Введите название товара"
        />
        <select
          className={styleCreateProduct.input}
          name="type-product"
          id="type-product"
        >
          {products?.types?.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
        <input
          className={styleCreateProduct.input}
          type="text"
          placeholder="Ссылка на картинку"
        />
        <input
          className={styleCreateProduct.input}
          type="text"
          placeholder="Стоимость товара"
        />

        <button
          className={styleCreateProduct.button}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Добавить продукт
        </button>
      </form>
    </div>
  );
});
export default CreateProductPage;
