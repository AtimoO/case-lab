import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "..";
import {
  ADD_BALANCE_PAGE_ROUTE,
  CREATE_PRODUCT_PAGE_ROUTE,
} from "../utils/constants";
import styleAdmin from "./admin.module.css";

const AdminPage = () => {
  const { user } = useContext(Context);

  console.log();
  const history = useHistory();
  return (
    user.user.user_info && (
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
        <p className={styleAdmin.text}>Логин: {user.user.user_info.login}</p>
        <p className={styleAdmin.text}>Ваш баланс: {user.user.user_info.balance} руб.</p>
        <button
          className={`${styleAdmin.button} ${styleAdmin.mr}`}
          onClick={(e) => {
            history.push(CREATE_PRODUCT_PAGE_ROUTE);
          }}
        >
          Добавить продукт
        </button>
        <button
          className={styleAdmin.button}
          onClick={(e) => {
            history.push(ADD_BALANCE_PAGE_ROUTE);
          }}
        >
          Пополнить баланс
        </button>
      </div>
    )
  );
};
export default AdminPage;
