import React from 'react';
import './App.scss';
import Header from './Components/header';
import MessageList, { DUMMY_DATA } from './Components/messageList';
import sendMessageForm from './Components/sendMessageForm';

class App extends React.Component<{},{messages: any[]}> {

  constructor(props: {}) {
    super(props);
    this.state = {
      messages: DUMMY_DATA
    }
  }

  render() {
    return(

      <div className="App">
        <Header/>
        <MessageList messages={this.state.messages}/>
        <sendMessageForm sendMessage={this.sendMessage} />
      </div>

    )
  }

}

export default App;