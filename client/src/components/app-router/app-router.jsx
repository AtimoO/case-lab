import React, { useContext } from "react";
import { Context } from "../..";
import { Switch, Route, Redirect } from "react-router-dom";
import { PRODUCTS_PAGE_ROUTE } from "../../utils/constants";
import { authRoutes, publicRoutes } from "../../utils/routes";

const AppRouter = () => {
  const { user } = useContext(Context);
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
