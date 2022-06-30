import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "..";
import {
  ADD_BALANCE_PAGE_ROUTE,
  CREATE_PRODUCT_PAGE_ROUTE,
} from "../utils/constants";
import styleAdmin from "./admin.module.css";

const AdminPage = observer(() => {
  const { user } = useContext(Context);

  const userData = user.user.user_info ? user.user.user_info : user.user;
  const history = useHistory();
  return (
    userData && (
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
        <p className={styleAdmin.text}>Логин: {userData.login}</p>
        <p className={styleAdmin.text}>Ваш баланс: {userData.balance} руб.</p>
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
});
export default AdminPage;
