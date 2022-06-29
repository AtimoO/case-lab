import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../..";
import {
  ADMIN_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  BASKET_PAGE_ROUTE,
  PRODUCTS_PAGE_ROUTE,
} from "../../utils/constants";

import styleAppHeader from "./app-header.module.css";

const AppHeader = observer(() => {
  const { user } = useContext(Context);
  return (
    <header className={styleAppHeader.header}>
      <div className={styleAppHeader.container}>
        <ul className={styleAppHeader.links}>
          <li>
            <NavLink
              className={`${styleAppHeader.link} ${styleAppHeader.logo}`}
              to={PRODUCTS_PAGE_ROUTE}
            >
              CaseLab
            </NavLink>
          </li>
          {/* <li>
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
          </li> */}
          {user.isAuth ? (
            <>
              <li>
                <NavLink className={styleAppHeader.link} to={LOGIN_PAGE_ROUTE}>
                  Выйти
                </NavLink>
              </li>
              <li>
                <NavLink className={styleAppHeader.link} to={ADMIN_PAGE_ROUTE}>
                  Личный кабинет
                </NavLink>
              </li>
              <li>
                <NavLink className={styleAppHeader.link} to={BASKET_PAGE_ROUTE}>
                  <img
                    className={styleAppHeader.image}
                    src="https://cdn-icons-png.flaticon.com/512/1332/1332655.png"
                    alt="Корзина"
                  />
                  <span className={styleAppHeader.price}>1111</span>Корзина
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink className={styleAppHeader.link} to={LOGIN_PAGE_ROUTE}>
                  Авторизация
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
});

export default AppHeader;
