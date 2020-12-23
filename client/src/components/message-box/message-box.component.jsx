import React from 'react'
import { MessageBoxContainer, MessageBoxMessage } from './message-box.styles'

const MessageBox = ({ message }) => (
    <MessageBoxContainer>
        <MessageBoxMessage>
            {message}
        </MessageBoxMessage>
    </MessageBoxContainer>
)

export default MessageBox