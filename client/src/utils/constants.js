export const config = {
  baseUrl: "http://127.0.0.1:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
};

export const ADMIN_PAGE_ROUTE = "/admin";
export const PRODUCTS_PAGE_ROUTE = "/";
export const PRODUCT_PAGE_ROUTE = "/product";
export const BASKET_PAGE_ROUTE = "/basket";
export const LOGIN_PAGE_ROUTE = "/login";
export const REGISTER_PAGE_ROUTE = "/register";
export const CREATE_PRODUCT_PAGE_ROUTE = `${ADMIN_PAGE_ROUTE}/create-product`;
