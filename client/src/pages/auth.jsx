import React from "react";
import { AUTH_PAGE_ROUTE } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
import styleAuth from "./auth.module.css";

const AuthPage = () => {
  const asd = useLocation();
  console.log(asd)
  // const loginSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <form className={styleAuth.container} >
      <h2 className={`${styleAuth.title} text_main`}>Вход</h2>

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
        Войти
      </button>
      <p className={`text_default`}>
        Вы — новый пользователь?{" "}
        <Link className={`${styleAuth.link} text_default`} to={AUTH_PAGE_ROUTE}>
          Зарегистрироваться
        </Link>
      </p>
    </form>
  );
};
export default AuthPage;
