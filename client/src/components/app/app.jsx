import React from "react";
import AppHeader from "../app-header/app-header";
import AppRouter from "../app-router/app-router";
import styleApp from "./app.module.css";

const App = () => {
  return (
    <>
      <AppHeader />
      <main className="container">
        <AppRouter />
      </main>

      {/*
      <main className={styleApp.container}>
        <Cards />
      </main> */}
    </>
  );
};

export default App;
