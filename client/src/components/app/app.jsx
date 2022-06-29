import React from "react";
import AppHeader from "../app-header/app-header";
import AppRouter from "../app-router/app-router";
import Cards from "../cards/cards";
import styleApp from "./app.module.css";

const App = () => {
  return (
    <>
      <AppRouter />


      <AppHeader />
      <main className={styleApp.container}>
        <Cards />
      </main>
    </>
  );
};

export default App;
