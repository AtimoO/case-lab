import { $authHost, $host } from "./constants";

export const registation = async (login, password) => {
  const { data } = await $host.post("api/user/reg", { login, password });
  return data;
};

export const login = async (login, password) => {
  const { data } = await $host.post("api/user/aut", { login, password });
  return data;
};

export const getProducts = async () => {
  const { data } = await $host.get("api/product/get-all");
  return data;
};

export const upBalance = async (id, sum) => {
  const { data } = await $host.post("api/user/balance", { id, sum });
  return data;
};

export const createProduct = async (title, description, price, img) => {
  const { data } = await $host.post("api/user/balance", {
    title,
    description,
    price,
    img,
  });
  return data;
};

export const getProduct = async (id) => {
  const { data } = await $host.get(`api/product/${id}`);
  return data;
};
