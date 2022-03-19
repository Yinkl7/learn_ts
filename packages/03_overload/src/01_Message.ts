type MessageType = 'Audio' | 'image' | string

interface Message {
  id: number
  type: MessageType
  info: string
}

const Messages: Message[] = [
  { id: 1, type: 'Audio', info: '你好啊，李银河' },
  { id: 2, type: 'image', info: '你好啊，李银河' },
  { id: 2, type: 'string', info: '你好啊，李银河' },
]

export {
  MessageType,
  Message,
  Messages,
}
