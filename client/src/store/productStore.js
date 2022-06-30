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
    this._products = [];
    this._createProduct = false;
    this._selectedType = {};

    makeAutoObservable(this);
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setTypes(types) {
    this._types = types;
  }
  setCreateProduct(bool) {
    this._createProduct = bool;
  }
  setProducts(products) {
    this._products = products;
  }

  get types() {
    return this._types;
  }
  get createProduct() {
    return this._createProduct;
  }
  get products() {
    return this._products;
  }
  get selectedType() {
    return this._selectedType;
  }
}
