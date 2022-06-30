import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from "../..";
import { getProducts } from "../../utils/api";
import AppHeader from "../app-header/app-header";
import AppRouter from "../app-router/app-router";

const App = observer(() => {
  const { products } = useContext(Context);

  useEffect(async () => {
    const data = await getProducts();
    products.setProducts(data.products);
  }, [products]);

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
