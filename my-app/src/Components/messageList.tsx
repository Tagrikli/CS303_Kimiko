import React from "react";

export const DUMMY_DATA = [

    {
      senderId: "Tuğrul",
      text: "How is the project going?"
    },
    {
      senderId: "Can",
      text: "Great!"
    }

  ]

  

  type msgListProps = {

    messages: any[]

  }

  export default class MessageList extends React.Component<msgListProps,{}> {

    render() {
      return (
        <ul className="message-list">
          {this.props.messages.map(message => {
            return (
              <li key={message.id}>
                <div>
                  {message.senderId}
                </div>
                <div>
                  {message.text}
                </div>
              </li>
            )
          })}
        </ul>
      )
    }

  }