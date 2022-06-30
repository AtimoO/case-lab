import React, { useContext, useEffect } from "react";
import { Context } from "../..";
import { Switch, Route, Redirect } from "react-router-dom";
import { PRODUCTS_PAGE_ROUTE } from "../../utils/constants";
import { authRoutes, publicRoutes } from "../../utils/routes";
import { getUser } from "../../utils/api";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
  const { user } = useContext(Context);
  const isLogin = localStorage.getItem("login");
  useEffect(() => {
    if (isLogin) {
      getUser(isLogin)
        .then(({ message }) => {
          user.setUser(message);
        })
        .catch((e) => {
          console.log(e);
        });
      user.setIsAuth(true);
    } else {
      localStorage.removeItem("login");
      user.setIsAuth(false);
    }
  }, [user.isAddBalance, isLogin, user.isAuth]);

  return (
    <Switch>
      {isLogin &&
        authRoutes.map(({ path, Copmonent }) => (
          <Route key={path} path={path} component={Copmonent} exact />
        ))}
      {publicRoutes.map(({ path, Copmonent }) => (
        <Route key={path} path={path} component={Copmonent} exact />
      ))}
      <Redirect to={PRODUCTS_PAGE_ROUTE} />
    </Switch>
  );
});
export default AppRouter;
