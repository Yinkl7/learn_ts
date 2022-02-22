// 函数定义有两种方式
// 函数声明
function foo(name: string, age: number) {
    return `${name}今年${age}岁`
}

// 函数表达式
type TypeBarFn = (name: string, friend: string) => string;
const bar: TypeBarFn = function (name: string, friend: string) {
    return `${name}和${friend}是朋友`
}

// 剩余参数
function baz(name: string, age: number, ...rest: string[]) {
    console.log(`${name}今年${age}岁,${rest[0]}`)
    return `${name}今年${age}岁,${rest[0]}`
}

baz('lisi', 18, '热爱学习')

export {}
