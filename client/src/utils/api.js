import { config } from "./constants";

const checkResponse = (response) => {
  return response.ok
    ? response.json()
    : response.json().then((err) => Promise.reject(err));
};

// create product: /product/create
// get all product: /product/get-all
// create product: /product/create
// create product: /product/create

// registe user (POST): /user/reg
// {
//   "login": "NameLogin",
//   "password": "pass"
// }

// login user (POST): /user/aut
// {
//   "login": "NameLogin",
//   "password": "pass"
// }

// :id user (GET): /user/:id

// ballance (POST): /user/ballance/
// {
//   "id": 6,
//   "sum": 100
// }

export const getDataProducts = async () => {
  return await fetch(`${config.baseUrl}/ingredients`, {
    headers: config.headers,
  }).then(checkResponse);
};
