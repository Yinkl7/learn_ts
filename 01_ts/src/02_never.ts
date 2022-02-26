type DataType = string | number;

function fn(data: DataType) {
    if (typeof data === 'string') {
        console.log('String data')
    } else if (typeof data === 'number') {
        console.log('Number data')
    } else {
        // 此时DataType 的值为 never
        // 当 DataType 的类型进行扩展时，d的类型就是扩展的类型
        let d = data
    }
}

export {}
