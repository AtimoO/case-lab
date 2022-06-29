import React from "react";
import { useHistory } from "react-router-dom";
import { BASKET_PAGE_ROUTE, CREATE_PRODUCT_PAGE_ROUTE } from "../utils/constants";
import styleAdmin from "./admin.module.css";

const AdminPage = () => {
  const history = useHistory();
  return (
    <div>
      <button
        className={`${styleAdmin.button} ${styleAdmin.button__back}`}
        onClick={() => {
          history.goBack();
        }}
      >
        Назад
      </button>
      <h2 className={styleAdmin.title}>Личный кабинет</h2>
      <p className={styleAdmin.text}>Логин: Strobo</p>
      <button
        className={styleAdmin.button}
        onClick={(e) => {
          history.push(CREATE_PRODUCT_PAGE_ROUTE)
        }}
      >
        Добавить продукт
      </button>
    </div>
  );
};
export default AdminPage;
