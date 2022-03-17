require('dotenv').config()

const express = require('express');
const WebSocket = require('ws');
const Y = require('yjs');
const utils = require('y-websocket/bin/utils');
const location = process.env.MONGODB_URI;
const collection = 'collaborative-work-docs';

// Setup persistent connection to mongo DB
// const ldb = new MongodbPersistence(location, collection);

const production = process.env.PRODUCTION != null;
const port = process.env.PORT || 8081;
const host = process.env.HOST || 'localhost'
const app = express();
// const cors = require("cors");
const bodyParser = require("body-parser");
const domainUrl =`http://localhost:${port}`;

// const corsOptions = {
//     origin: domainUrl
// }

// app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//
// const server = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.end('okay');
// });


const LeveldbPersistence = require('y-leveldb').LeveldbPersistence
const ldb = new LeveldbPersistence('./dbDir')
utils.setPersistence({
    bindState: async (docName, ydoc) => {
        const persistedYdoc = await ldb.getYDoc(docName)
        const newUpdates = Y.encodeStateAsUpdate(ydoc)
        ldb.storeUpdate(docName, newUpdates)
        Y.applyUpdate(ydoc, Y.encodeStateAsUpdate(persistedYdoc))
        ydoc.on('update', update => {
            ldb.storeUpdate(docName, update)
        })
    },
    writeState: async (docName, ydoc) => {}
})

const ydoc = new Y.Doc()
ydoc.getArray('arr').insert(0, [1, 2, 3])
ydoc.getArray('arr').toArray() // => [1, 2, 3]

console.log(ldb)
ldb.storeUpdate('test-1', Y.encodeStateAsUpdate(ydoc))

// when you want to sync, or store data to a database,
// retrieve the temporary Y.Doc to consume data
ldb.getYDoc('test-1').getArray('arr') // [1, 2, 3]
// const wss = new WebSocket.Server({ server });
// const wss = new WebSocket.Server({  noServer: true,   path: "/websockets", });

// wss.on('connection', utils.setupWSConnection);
// app.on("upgrade", (request, socket, head) => {
//     wss.handleUpgrade(request, socket, head, (websocket) => {
//         wss.emit("connection", websocket, request);
//     });
// });
// app.on('upgrade', (request, socket, head) => {
//     // You may check auth of request here..
//     /**
//      * @param {any} ws
//      */
//     const handleAuth = ws => {
//         wss.emit('connection', ws, request)
//     }
//     wss.handleUpgrade(request, socket, head, handleAuth)
// });

/*
 Persistence must have the following signature:
{ bindState: function(string,WSSharedDoc):void, writeState:function(string,WSSharedDoc):Promise }
*/
// utils.setPersistence({
//     bindState: async (docName, ydoc) => {
//         // Here you listen to granular document updates and store them in the database
//         // You don't have to do this, but it ensures that you don't lose content when the server crashes
//         // See https://github.com/yjs/yjs#Document-Updates for documentation on how to encode
//         // document updates
//
//         const persistedYdoc = await ldb.getYDoc(docName);
//         const newUpdates = Y.encodeStateAsUpdate(ydoc);
//         ldb.storeUpdate(docName, newUpdates)
//         Y.applyUpdate(ydoc, Y.encodeStateAsUpdate(persistedYdoc));
//         ydoc.on('update', async update => {
//             ldb.storeUpdate(docName, update);
//         })
//     },
//     writeState: async (docName, ydoc) => {
//         // This is called when all connections to the document are closed.
//         // In the future, this method might also be called in intervals or after a certain number of updates.
//         return new Promise(resolve => {
//             // When the returned Promise resolves, the document will be destroyed.
//             // So make sure that the document really has been written to the database.
//             resolve()
//         })
//     }
// })

app.listen({host, port} );
console.log(`Listening to ${domainUrl} ${production ? '(prodction)' : ''}`)
app.get("/", function(req, res){
    res.send("HELLO");
});
app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
});

