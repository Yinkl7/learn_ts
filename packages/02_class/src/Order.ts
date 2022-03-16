import type OrderDetail from '../src/OrderDetail'

export default class Order {
  id: number
  time: Date
  detail: OrderDetail

  constructor(id: number, time: Date, detail: OrderDetail) {
    this.id = id
    this.time = time
    this.detail = detail
  }

  getDetail() {
    return this.detail
  }
}
