import React from "react";
import styleAppHeader from "./app-header.module.css";

const AppHeader = () => {
  return (
    <header className={styleAppHeader.header}>
      <div className={styleAppHeader.container}>
        <ul className={styleAppHeader.links}>
          <li>
            <a className={styleAppHeader.link} href="./">
              LOGO
            </a>
          </li>
          <li>
            <a className={styleAppHeader.link} href="/profile">
              Личный кабинет
            </a>
          </li>
        </ul>
        <div className={styleAppHeader.header__group}>
          <div className={styleAppHeader.search}>
            <img
              className={styleAppHeader.image}
              src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
              alt="Иконка поиск"
            />
            <input
              className={styleAppHeader.input}
              type="text"
              placeholder="Введите название товара"
            />
          </div>
          <button className={styleAppHeader.button}>
            <img
              className={styleAppHeader.image}
              src="https://cdn-icons-png.flaticon.com/512/1332/1332655.png"
              alt="Корзина"
            />
            0 Корзина
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
