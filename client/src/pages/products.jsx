import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "..";
import Card from "../components/card/card";
import { PRODUCT_PAGE_ROUTE } from "../utils/constants";

import styleProducts from "./products.module.css";

const ProductsPage = observer(() => {
  const { products } = useContext(Context);
  const history = useHistory();
  return (
    <section className={styleProducts.products}>
      <h1 className={styleProducts.title}>Список товаров</h1>
      <div className={styleProducts.container}>
        <div>
          <h2 className={styleProducts.subtitle}>Категории товаров</h2>
          <ul className={styleProducts.categories}>
            {products.types.map((type) => (
              <li
                key={type.id}
                className={`${styleProducts.category} ${
                  type.id === products.selectedType.id
                    ? styleProducts.category_active
                    : ""
                }`}
                onClick={() => {
                  products.setSelectedType(type);
                }}
              >
                {type.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={styleProducts.container__cards}>
          {products.products.map((product) => (
            <Card
              key={product.id}
              product={product}
              onClick={(e) => {
                history.push(`${PRODUCT_PAGE_ROUTE}/${product.id}`);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
});
export default ProductsPage;
