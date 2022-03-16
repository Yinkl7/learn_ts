// type OrderDetail = {
//   address: string
//   price: number
//   product: string
// }

export default class OrderDetail {
  address: string
  price: number
  product: string

  constructor(address: string, price: number, product: string) {
    this.address = address
    this.price = price
    this.product = product
  }
}
