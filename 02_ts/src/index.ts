import { Order } from "./order/order"
import { OrderDetail } from "./order/orderDetail"

let num: number = 3

console.log('num', num)

class Person {
    public name: string;
    public age: number


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    eat(name: string, address: string) {
        console.log(`${this.name} 和 ${name} 在 ${address}吃饭`)
    }
}

const lisi = new Person('lisi', 18)

lisi.eat('wangwu', '饭店')

const orderDetail1 = new OrderDetail(11, "MacBook pro", 2, 13000)
const orderDetail2 = new OrderDetail(12, "MacBook Air", 1, 11000)

const order = new Order(1, new Date(), '上海', [orderDetail1, orderDetail2])
console.log(order)

export {}
