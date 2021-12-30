import { useEffect, useState } from 'react'

import socket from '../../utils/socket'
import { TextAreaInput } from '../inputs/TextAreaInput'
import ChatMessage from './ChatMessage'
import { StyledChat } from './Chat.styled'
import { ChatButton } from './ChatMessage/Chatmessage.styled'

export type IMessages = {
  msg: string
  timestamp: number
  username: string
  id: string
}

const Chat = () => {
  const [chatMsg, setChatMsg] = useState('')
  const [messages, setMessages] = useState<IMessages[]>([])

  useEffect(() => {
    let a: any
    // eslint-disable-next-line prefer-const
    a = 'watch'

    socket.emit('join', a)
    socket.on('chat', (data) => {
      console.log(data)
      setMessages((old) => [...old, data])
    })
  }, [])

  const onClickHandler = () => {
    const obj = {
      room: 'watch',
      msg: chatMsg
    }
    socket.emit('chat', obj)
  }
  return (
    <StyledChat>
      <ChatMessage messages={messages} />
      <TextAreaInput
        name={'chat'}
        placeholder="Enter message..."
        value={chatMsg}
        onChange={(e) => {
          setChatMsg(e.target.value)
        }}
      />
      <ChatButton onClick={onClickHandler}>Send</ChatButton>
    </StyledChat>
  )
}

export default Chat
