let foo: any = 'aaa'

// any在赋值时 不会进行类型检测
let boo: number = foo

let baz: unknown = 18

// 这种赋值方式会报错
// let bax: string = baz

let stuObj: any = { name: 'lisi', age: 18 }

console.log(stuObj.name) 

let tecObj: unknown = { name: 'zhangsan', age: '28' }

// 对象的这种调用方式会报错
// console.log(tecObj.name)


export {}
