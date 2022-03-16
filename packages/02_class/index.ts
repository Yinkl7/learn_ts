import Order from './src/Order'
import OrderDetail from './src/OrderDetail'

const orderDetail = new OrderDetail('shanghai', 7999, 'iphone')

const order = new Order(1, new Date(), orderDetail)

console.log(order.getDetail())
