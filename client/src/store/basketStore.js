import { makeAutoObservable } from "mobx";

export default class BasketStore {
  constructor() {
    this._basket = [];
    this._uniqProductBasket = null;
    this._sumCount = 0;
    // Следит за изменениями, аналог deps useEffect
    makeAutoObservable(this);
  }

  setBasket(product) {
    this._basket = [...this._basket, product];
  }
  setUniqProductBasket(array) {
    this._uniqProductBasket = array;
  }

  get basket() {
    return this._basket;
  }
  get sumCount() {
    return this._sumCount;
  }
  get uniqProductBasket() {
    return this._uniqProductBasket;
  }
}
