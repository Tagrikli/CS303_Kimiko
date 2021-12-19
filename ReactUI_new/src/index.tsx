import React from 'react';
import ReactDOM from 'react-dom';
import Kimiko from './ExtensionPage/Kimiko';
import reportWebVitals from './reportWebVitals';
import { WinMsgType } from './helpers/types';
import Profile from "./helpers/Profile";
import { MySocket, MyWindow } from "./helpers/Messenger";
import { WS_CONF } from './helpers/vars';


let profile = new Profile();

let Socket = new MySocket(WS_CONF.full());


Socket.waitForConnection().then(() => {
  

  let WinMessenger = new MyWindow(profile);
  let kimiko =
    <Kimiko
      socket={Socket}
      profile={profile}
      winmessenger={WinMessenger}
    />
    ;
  
  window.addEventListener("message", (event) => { WinMessenger.handler(event, profile, Socket) });
  WinMessenger.sendMessage({ Type: WinMsgType.INIT, Content: "" });
  
  
  ReactDOM.render(
    <React.StrictMode>
      {kimiko}
    </React.StrictMode>,
    document.getElementById('root')
  );


})







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

