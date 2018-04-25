const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

let config = require('./.env');
const environment = process.env.NODE_ENV;
config = config[environment];
if (!config)
    return console.error(`Invalid ${environment} environment`);

// Usamos middlewares
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

const usersRouter = require('./back');
app.use('/back', usersRouter);

app.listen(config.port, (err) => {
    console.log('Servidor listo en el puerto ' + config.port);
})