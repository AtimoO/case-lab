import React from "react";
import { useHistory } from "react-router-dom";
import styleBalance from "./balance.module.css";

const BalancePage = () => {
  const history = useHistory();
  const submitPage = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <button
        className={`${styleBalance.button} ${styleBalance.button__back}`}
        onClick={() => {
          history.goBack();
        }}
      >
        Назад
      </button>
      <h2 className={styleBalance.title}>Пополнение счета</h2>
      <p className={styleBalance.text}>Текущий баланс: 100 руб</p>
      <form action="" onSubmit={submitPage}>
        <input
          className={styleBalance.input}
          type="text"
          placeholder="Введите сумму"
        />
        <button className={styleBalance.button} onClick={(e) => {}}>
          Пополнить
        </button>
      </form>
    </div>
  );
};
export default BalancePage;
