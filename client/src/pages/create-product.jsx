import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "..";
import { createProduct } from "../utils/api";

import styleCreateProduct from "./create-product.module.css";

const CreateProductPage = observer(() => {
  const { products } = useContext(Context);
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    quantity: "",
    img: "",
    type: "",
  });
  const history = useHistory();

  const addProduct = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("price", `${form.price}`);
    formData.append("quantity", `${form.quantity}`);
    formData.append("img", form.img);
    createProduct(formData)
      .then((res) => {
        products.setCreateProduct(!products.createProduct);
        setForm({
          title: "",
          description: "",
          price: "",
          quantity: "",
          img: "",
          type: "",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
      <form
        encType="multipart/form-data"
        className={styleCreateProduct.container}
        onSubmit={addProduct}
      >
        <h2 className={styleCreateProduct.title}>Добавление продукта</h2>
        <input
          className={styleCreateProduct.input}
          type="text"
          placeholder="Введите название продукта"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          value={form.title}
          required
        />
        <select
          className={styleCreateProduct.input}
          name="type-product"
          id="type-product"
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          {products?.types?.map((type) => (
            <option key={type.id} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
        <input
          className={styleCreateProduct.input}
          type="text"
          placeholder="Введите описание продукта"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          value={form.description}
          required
        />
        <input
          className={styleCreateProduct.input}
          type="number"
          placeholder="Введите стоимость товара"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          value={form.price}
          required
        />
        <input
          className={styleCreateProduct.input}
          type="number"
          placeholder="Введите количество товара"
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          value={form.quantity}
          required
        />
        <input
          className={styleCreateProduct.input}
          type="file"
          placeholder="Выберите картинку"
          onChange={(e) => setForm({ ...form, img: e.target.files[0] })}
          required
        />

        <button type="submit" className={styleCreateProduct.button}>
          Добавить продукт
        </button>
      </form>
    </div>
  );
});
export default CreateProductPage;
