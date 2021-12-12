import React, { useState } from 'react';
import './scss/App.scss';
import Header from './Components/header';
import MessageList, { DUMMY_DATA } from './Components/messageList';
import SendMessageForm from './Components/sendMessageForm';

export default function App() {


  const [messages, setMessages] = useState(DUMMY_DATA);


  const sendMessage = (message: string) => {

    alert(message);

  }


  return (

    <div className="App">
      <Header />
      <MessageList messages={messages} />
      <SendMessageForm sendMessage={sendMessage} />
    </div>

  )

}
