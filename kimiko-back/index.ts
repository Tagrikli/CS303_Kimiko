import express, { RequestHandler, Response } from 'express';
import http from 'http';
import https from 'https';
import WebSocket from 'ws';
var cors = require('cors');
const path = require("path");


import { MsgType, WsMessage_Server, UserInfo, WsMessage_Client, Message, WexSocket } from '../kimiko-side/src/helpers/types';
import { BASE_CONF, WS_CONF } from '../kimiko-side/src/helpers/vars';
import ClientManager from './ClientManager';
const murmur = require("murmurhash-js");

const app = express();
const httpServer = http.createServer(app);
const WebSocketServer = new WebSocket.Server({ server: httpServer });

const clientManager = new ClientManager();


app.use(cors());
// app.use(express.static("/home/tagrikli/Desktop/Codes/Kimiko/kimiko-side/build"));

// app.get("/", (req: any, res: express.Response) => {
//     res.set({
//         'Last-Modified': new Date(1990, 0, 0),
//         'Content-Type': "text/html"
//     });
//     res.sendFile("/home/tagrikli/Desktop/Codes/Kimiko/kimiko-side/build/index.html");
// });

app.get("/kimiko/api/v1/profile/:absid([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})", (req: express.Request, res: express.Response) => {
    let absid = req.params.absid;
    clientManager.getFullProfile(absid).then(respond =>
        res.send(respond)
    )
});

app.get("*", (req: any, res: any) => {
    res.send(":(");
});

function wsMessageHandler(client: WexSocket, event: MessageEvent<any>): void {


    let message = JSON.parse(event.data) as WsMessage_Client;
    let msgType = message.Type;

    if (msgType == MsgType.INIT) {
        //Content => Connection Url
        if (message.Content && message.Abs && message.Rel) {
            client.kimiko_absid = message.Abs;
            client.kimiko_relid = message.Rel;
            client.kimiko_url = message.Content;
            client.kimiko_hashed = murmur.murmur2(message.Content, 0);
            clientManager.newClient(client);

        }


    } else if (msgType == MsgType.MSG) {
        //Content => User Message
        if (message.Content && message.Rel) {
            clientManager.newMessage(client, message.Content);
        }


    } else if (msgType == MsgType.PRF_UPD) {
        //Content => profile:UserInfo
        console.debug("PRF_UPD", message.Content);

        if (message.Content) {
            let newProfile: UserInfo = message.Content;
            clientManager.updateProfile(client, newProfile);
        
        }
    }
}

function wsCloseHandler(client: WexSocket, event: CloseEvent) {
    clientManager.clientLeft(client);
}


WebSocketServer.on('connection', (webSocket: WexSocket) => {
    webSocket.onmessage = (event) => { wsMessageHandler(webSocket, event) };
    webSocket.onclose = (event) => { wsCloseHandler(webSocket, event) }
});


httpServer.listen(WS_CONF.port, () => {
    console.log(`Server started on port ${WS_CONF.port} :)`);
});


