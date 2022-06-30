import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "..";
import { upBalance } from "../utils/api";
import styleBalance from "./balance.module.css";

const BalancePage = observer(() => {
  const { user } = useContext(Context);
  const [balance, setBalance] = useState("");
  const history = useHistory();

  const userData = user.user.user_info ? user.user.user_info : user.user;

  const submitPage = (e) => {
    e.preventDefault();
    upBalance(userData.id, Number(balance)).then((res) => {
      setBalance("");
      userData.balance = res.balance; // найти лучшее решение
    });
  };
  return (
    userData && (
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
        <p className={styleBalance.text}>
          Текущий баланс: {userData.balance} руб
        </p>
        <form action="" onSubmit={submitPage}>
          <input
            className={styleBalance.input}
            type="number"
            placeholder="Введите сумму"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            required
          />
          <button className={styleBalance.button}>Пополнить</button>
        </form>
      </div>
    )
  );
});
export default BalancePage;
