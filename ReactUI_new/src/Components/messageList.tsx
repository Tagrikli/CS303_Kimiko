import React from "react";
import './scss/messageList.scss';

export const DUMMY_DATA = [

  {
    senderId: "Tuğrul",
    text: "How is the project going?"
  },
  {
    senderId: "Can",
    text: "Great!"
  },
  {
    senderId: "Bendecan",
    text: "This extension is awesome btw"
  },
  {
    senderId: "Cağdas",
    text: "I know.. Rigth??"
  },
  {
    senderId: "Tuğrul",
    text: "How can we improve our design?"
  },
  {
    senderId: "Can",
    text: "Hmm, this made me think."
  },
  {
    senderId: "Bendecan",
    text: "I think there is too much blue"
  },
  {
    senderId: "Cağdas",
    text: "Maybe we need a little bit of indigo"
  },
  {
    senderId: "Can",
    text: "Yea, some kind of purple derivatives"
  },
  {
    senderId: "Bendecan",
    text: "That would be cool!"
  },
  {
    senderId: "Cağdas",
    text: "Exactly!"
  },
  {
    senderId: "Tuğrul",
    text: "Why are you guys chatting on google?"
  }

]



type msgListProps = {
  messages: any[]
}


export default function MessageList(props: msgListProps) {


  return (
    <div className="message-list">
      {props.messages.map(message => {
        return (
          <div className="message-wrapper" key={message.id}>
            <div className="message-id">
              {message.senderId}
            </div>
            <div className="message-text">
              {message.text}
            </div>
          </div>
        )
      })}
    </div>


  )


}

