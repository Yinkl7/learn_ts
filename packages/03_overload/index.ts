import type { Message } from './src/01_Message'

import { getMessage as getUnitMessage } from './src/02_uniteFunc'

import { getMessage as getOverloadMessage } from './src/03_overload'

// 联合类型执行后无法，无法确认返回值类型
const msg1 = getUnitMessage(1)
console.log((<Message>msg1).info)

// 函数重载执行后，可以确认返回值类型
const msg2 = getOverloadMessage(1)
console.log(msg2.info)
