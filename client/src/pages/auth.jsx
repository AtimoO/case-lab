import React, { useContext, useState } from "react";
import {
  LOGIN_PAGE_ROUTE,
  PRODUCTS_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
} from "../utils/constants";
import { Link, useHistory, useLocation } from "react-router-dom";
import { login, registation } from "../utils/api";
import { observer } from "mobx-react-lite";
import { Context } from "..";

import styleAuth from "./auth.module.css";

const AuthPage = observer(() => {
  const { user } = useContext(Context);
  const { pathname } = useLocation();
  const history = useHistory();
  const isLogin = pathname === LOGIN_PAGE_ROUTE;

  const [form, setForm] = useState({ login: "", password: "" });

  const submit = async (e) => {
    try {
      e.preventDefault();
      let userData = null;
      if (isLogin) {
        userData = await login(form.login, form.password);
      } else {
        userData = await registation(form.login, form.password);
      }
      user.setUser(userData);

      if (user.user.status === 200) {
        localStorage.setItem("login", user.user.user_info.id);
        user.setIsAuth(true);
        history.push(PRODUCTS_PAGE_ROUTE);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className={styleAuth.container} onSubmit={submit}>
      <h2 className={`${styleAuth.title} text_main`}>
        {isLogin ? "Вход" : "Регистрация"}
      </h2>

      <input
        className={`${styleAuth.input} input_text`}
        type="text"
        placeholder={"Логин"}
        name="login"
        value={form.login}
        onChange={(e) => setForm({ ...form, login: e.target.value })}
        required
      />
      <input
        className={`${styleAuth.input} input_text`}
        type="password"
        placeholder={"Пароль"}
        name="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />
      <button className={`${styleAuth.button} button_main`} type="submit">
        {isLogin ? "Войти" : "Зарегистрироваться"}
      </button>
      {isLogin ? (
        <p className={`text_default`}>
          Вы — новый пользователь?{" "}
          <Link
            className={`${styleAuth.link} text_default`}
            to={REGISTER_PAGE_ROUTE}
          >
            Зарегистрироваться
          </Link>
        </p>
      ) : (
        <p className={`text_default`}>
          Есть аккаунт?{" "}
          <Link
            className={`${styleAuth.link} text_default`}
            to={LOGIN_PAGE_ROUTE}
          >
            Войти
          </Link>
        </p>
      )}
    </form>
  );
});
export default AuthPage;
