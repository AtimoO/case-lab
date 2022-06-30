import axios from "axios";

export const config = {
  baseUrl: "http://127.0.0.1:3000/",
  headers: {
    "Content-Type": "application/json",
  },
};

const $host = axios.create({
  baseURL: config.baseUrl,
});

const $authHost = axios.create({
  baseURL: config.baseUrl,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };

export const ADMIN_PAGE_ROUTE = "/admin";
export const PRODUCTS_PAGE_ROUTE = "/";
export const PRODUCT_PAGE_ROUTE = "/product";
export const BASKET_PAGE_ROUTE = "/basket";
export const LOGIN_PAGE_ROUTE = "/login";
export const REGISTER_PAGE_ROUTE = "/register";
export const CREATE_PRODUCT_PAGE_ROUTE = `${ADMIN_PAGE_ROUTE}/create-product`;
export const ADD_BALANCE_PAGE_ROUTE = `${ADMIN_PAGE_ROUTE}/balance`;
