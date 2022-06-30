import {
  AdminPage,
  AuthPage,
  BalancePage,
  BasketPage,
  CreateProductPage,
  ProductPage,
  ProductsPage,
} from "../pages";
import {
  ADMIN_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  BASKET_PAGE_ROUTE,
  PRODUCTS_PAGE_ROUTE,
  PRODUCT_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
  CREATE_PRODUCT_PAGE_ROUTE,
  ADD_BALANCE_PAGE_ROUTE,
} from "./constants";

export const authRoutes = [
  {
    path: ADMIN_PAGE_ROUTE,
    Copmonent: AdminPage,
  },
  {
    path: CREATE_PRODUCT_PAGE_ROUTE,
    Copmonent: CreateProductPage,
  },
  {
    path: BASKET_PAGE_ROUTE,
    Copmonent: BasketPage,
  },
  {
    path: ADD_BALANCE_PAGE_ROUTE,
    Copmonent: BalancePage,
  },
];

export const publicRoutes = [
  {
    path: PRODUCTS_PAGE_ROUTE,
    Copmonent: ProductsPage,
  },
  {
    path: LOGIN_PAGE_ROUTE,
    Copmonent: AuthPage,
  },
  {
    path: REGISTER_PAGE_ROUTE,
    Copmonent: AuthPage,
  },
  {
    path: PRODUCT_PAGE_ROUTE + "/:id",
    Copmonent: ProductPage,
  },
];
