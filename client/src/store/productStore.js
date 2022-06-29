import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._types = [
      { id: 1, name: "Type1" },
      { id: 2, name: "Type2" },
      { id: 3, name: "Type3" },
      { id: 4, name: "Type3" },
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
      {
        id: 125,
        name: "Название 3",
        description: "Описание товара",
        price: 300,
        image: "https://dummyimage.com/200x200",
      },
    ];
    this._selectedType = {};
    // Следит за изменениями, аналог deps useEffect
    makeAutoObservable(this);
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setTypes(types) {
    this._types = types;
  }
  setProducts(products) {
    this._products = products;
  }

  get types() {
    return this._types;
  }
  get products() {
    return this._products;
  }
  get selectedType() {
    return this._selectedType;
  }
}
