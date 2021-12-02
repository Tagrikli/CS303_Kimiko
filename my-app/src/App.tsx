import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './Components/header';
import MessageList, { DUMMY_DATA } from './Components/messageList';

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
      </div>

    )
  }

}

export default App;