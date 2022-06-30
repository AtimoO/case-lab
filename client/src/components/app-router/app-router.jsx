import React, { useContext } from "react";
import { Context } from "../..";
import { Switch, Route, Redirect } from "react-router-dom";
import { PRODUCTS_PAGE_ROUTE } from "../../utils/constants";
import { authRoutes, publicRoutes } from "../../utils/routes";

const AppRouter = () => {
  const { user } = useContext(Context);
  const isLogin = localStorage.getItem("login");
  if (isLogin) {
    // const getUser = async () => {
    //   await
    // }
    user.setIsAuth(true);
  } else {
    user.setIsAuth(false);
  }
  return (
    <Switch>
      {user.isAuth &&
        authRoutes.map(({ path, Copmonent }) => (
          <Route key={path} path={path} component={Copmonent} exact />
        ))}
      {publicRoutes.map(({ path, Copmonent }) => (
        <Route key={path} path={path} component={Copmonent} exact />
      ))}
      <Redirect to={PRODUCTS_PAGE_ROUTE} />
    </Switch>
  );
};
export default AppRouter;
