// 定义数字枚举
enum WeekNum {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

// 使用
// 数字枚举 支持 key 和 value 两种取值方式
// 底层的实现： WeekNum[ WeekNum['Monday'] = 1] = 'Monday'
console.log(WeekNum.Monday)
console.log(WeekNum[0])

// 字符串枚举
enum WeekStr {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday",
}

// 使用
// 底层的实现就是 对象
console.log(WeekStr.Friday)


export {}
