import { Messages } from './01_Message'
import type { Message, MessageType } from './01_Message'

// 重载签名
function getMessage(id: number): Message

function getMessage(type: MessageType): Message[]

// 实现签名
function getMessage(info: any) {
  if (typeof info === 'number')
    return Messages.find(msg => msg.id === info)
  else
    return Messages.filter(msg => msg.type === info)
}

export {
  getMessage,
}
