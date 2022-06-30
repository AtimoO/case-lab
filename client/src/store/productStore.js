import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    // Если будут типы у продуктов
    this._types = [
      { id: 1, name: "Type1" },
      { id: 2, name: "Type2" },
      { id: 3, name: "Type3" },
      { id: 4, name: "Type4" },
    ];
    this._products = [
      {
        id: 123,
        title: "Название 1",
        description: "Описание товара",
        price: 700,
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
