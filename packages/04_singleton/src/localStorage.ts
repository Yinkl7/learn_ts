export default class MyLocalStorage {
  static myLocalStorage: MyLocalStorage

  private constructor() { }

  static getInstance() {
    if (this.myLocalStorage)
      this.myLocalStorage = new MyLocalStorage()

    return this.myLocalStorage
  }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  getItem(key: string) {
    return localStorage.getItem(key)
  }
}
