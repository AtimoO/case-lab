import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = {};

    this._isAddBalance = false;

    // Следит за изменениями, аналог deps useEffect
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setIsAddBalance(bool) {
    this._isAddBalance = bool;
  }
  setUser(user) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth;
  }
  get isAddBalance() {
    return this._isAddBalance;
  }
  get user() {
    return this._user;
  }
}
