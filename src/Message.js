import React from 'react'

function Message(props) {
    return (
        <div>
            <p>{props.message.username} : {props.message.text}</p>
        </div>
    )
}

export default Message
