class OrderDetail {
    id: number;
    product: string; 
    count: number;
    price: number;

    constructor(id: number, product: string, count: number, price: number) {
        this.id = id;
        this.product = product;
        this.count = count;
        this.price = price;
    }
}

// 定义的属性不在构造函数的使用
/**
 * 1 undefined，在方法中使用时会出现 undefined 的问题
 * 2 !: ts4之后的方法
 */
class OrderDetail1 {
    id: number;
    product: string; 
    count: number;
    // price: number | undefined;
    price!: number;

    constructor(id: number, product: string, count: number) {
        this.id = id;
        this.product = product;
        this.count = count;
    }
}

export { OrderDetail }