import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Context } from "..";
import { getProduct } from "../utils/api";
import { config } from "../utils/constants";
import styleProduct from "./product.module.css";

const ProductPage = observer(() => {
  const { basket } = useContext(Context);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getProduct(id).then(({ product }) => {
      setProduct(product);
    });
  }, []);

  const addBasket = () => {
    if (product) {
      basket.setBasket(product);
    }
  };

  return (
    product && (
      <div>
        <button
          className={`${styleProduct.button} ${styleProduct.button__back}`}
          onClick={(e) => {
            history.goBack();
          }}
        >
          Назад
        </button>
        <h2 className={styleProduct.title}>{product.title}</h2>
        <div className={styleProduct.container}>
          <img
            className={styleProduct.image}
            src={`${config.baseUrl}/${product.image}`}
            alt={`Изоображение ${product.image}`}
          />
          <p className={styleProduct.description}>{product.description}</p>
          <div className={styleProduct.container__price}>
            <span className={styleProduct.price}>{product.price} руб.</span>
            <button className={styleProduct.button} onClick={addBasket}>
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    )
  );
});
export default ProductPage;
