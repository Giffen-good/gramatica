# Gramatica

[...] Description to come

## Installation

Project uses Node v16

To begin, install the dependencies with
```npm i``` within both the ```client``` directory and ```server``` directory.

To open up the websocket connection, from the server directory, run:
```HOST=localhost PORT=1234 YPERSISTENCE=./dbDir node ./node_modules/y-websocket/bin/server.js```

this will connect to our text document and store all changes into the dbDir directory.

From the client directory, run:
```npm run dev```

to bring up the client app.

To bring up our express server, run:
```npm run start``` from the ```server``` directory



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
