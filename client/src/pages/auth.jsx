import React, { useEffect } from "react";
import { LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
import styleAuth from "./auth.module.css";

const AuthPage = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === LOGIN_PAGE_ROUTE;
  // const loginSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <form className={styleAuth.container}>
      <h2 className={`${styleAuth.title} text_main`}>
        {isLogin ? "Вход" : "Регистрация"}
      </h2>

      <input
        className={`${styleAuth.input} input_text`}
        type="text"
        placeholder={"Логин"}
        name="email"
      />
      <input
        className={`${styleAuth.input} input_text`}
        type="password"
        placeholder={"Пароль"}
        name="password"
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
};
export default AuthPage;
