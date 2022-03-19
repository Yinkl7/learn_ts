import type { MessageType } from './01_Message'
import { Messages } from './01_Message'

function getMessage(info: number | MessageType) {
  if (typeof info === 'number')
    return Messages.find(item => item.id === info)
  else
    return Messages.filter(item => item.type === info)
}

export {
  getMessage,
}
