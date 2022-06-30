import { $authHost, $host } from "./constants";

export const registation = async (login, password) => {
  const { data } = await $host.post("api/user/reg", { login, password });
  return data;
};

export const login = async (login, password) => {
  const { data } = await $host.post("api/user/aut", { login, password });
  return data;
};

export const getUser = async (id) => {
  const { data } = await $host.get(`api/user/${id}`);
  return data;
};

export const getProducts = async () => {
  const { data } = await $host.get("api/product/get-all");
  return data;
};

export const getProduct = async (id) => {
  const { data } = await $host.get(`api/product/${id}`);
  return data;
};

export const removeProduct = async (id) => {
  const { data } = await $host.get(`api/product/remove/${id}`);
  return data;
};

export const createProduct = async (product) => {
  const { data } = await $authHost.post("api/product/create", product);
  return data;
};

export const upBalance = async (id, sum) => {
  const { data } = await $host.post("api/user/balance", { id, sum });
  return data;
};

export const createOrder = async (products, totalPrice, userId) => {
  const { data } = await $host.post("api/order/create", {
    products,
    totalPrice,
    userId,
  });
  return data;
};
