import React from "react";
import styleAppHeader from "./app-header.module.css";

const AppHeader = () => {
  return (
    <header className={styleAppHeader.header}>
      <div className={styleAppHeader.container}>
        <ul className={styleAppHeader.links}>
          <li>
            <a className={styleAppHeader.link} href="./">LOGO</a>
          </li>
          <li>
            <a className={styleAppHeader.link} href="/profile">Личный кабинет</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default AppHeader;
