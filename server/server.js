require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require("./api/models");

const port = process.env.PORT || 3000;
const app = express();
const WebSocket = require('ws');
const domainUrl =`http://localhost:${port}`;

const corsOptions = {
	origin: domainUrl
}

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

//
// Convergence.connect(domainUrl, "Bruce Wayne", "1AmBatman!", {
//   webSocketFactory: (u) => new WebSocket(u, {rejectUnauthorized: false}),
//   webSocketClass: WebSocket
// });
//
//
//
// const dictionary = require('./api/routes/dictionary.js')
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);
