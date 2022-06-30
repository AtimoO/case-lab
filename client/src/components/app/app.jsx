import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from "../..";
import { getProducts } from "../../utils/api";
import AppHeader from "../app-header/app-header";
import AppRouter from "../app-router/app-router";

const App = observer(() => {
  const { products } = useContext(Context);

  useEffect(() => {
    getProducts().then((res) => {
      products.setProducts(res.products);
    });
  }, [products.createProduct]);

  return (
    <>
      <AppHeader />
      <main className="container">
        {products.products.length > 0 && <AppRouter />}
      </main>
    </>
  );
});

export default App;
