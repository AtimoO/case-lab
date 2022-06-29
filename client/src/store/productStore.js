import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._types = [
      { id: 1, name: "Type1" },
      { id: 2, name: "Type2" },
    ];
    this._brands = [
      { id: 1, name: "Brand1" },
      { id: 2, name: "Brand1" },
    ];
    this._products = [
      {
        id: 123,
        name: "Название 1",
        description: "Описание товара",
        price: 700,
        image: "https://dummyimage.com/200x200",
      },
      {
        id: 124,
        name: "Название 2",
        description: "Описание товара",
        price: 600,
        image: "https://dummyimage.com/200x200",
      },
    ];
    // Следит за изменениями, аналог deps useEffect
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setProducts(products) {
    this._products = products;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get products() {
    return this._products;
  }
}
