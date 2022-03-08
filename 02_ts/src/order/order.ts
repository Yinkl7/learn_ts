import { OrderDetail } from "./orderDetail"

class Order {
    id: number;
    time: Date;
    address: string;
    orderDetailList: Array<OrderDetail>;

    constructor(id: number, time: Date, address: string, orderDetailList: Array<OrderDetail>) {
        this.id = id;
        this.time = time;
        this.address = address;
        this.orderDetailList = orderDetailList;
    }
} 

const orderDetail1 = new OrderDetail(11, "Mac", 2, 13000)
const orderDetail2 = new OrderDetail(12, "Mac", 2, 13000)



export { Order }
