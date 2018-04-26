const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

// Usamos middlewares
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

const usersRouter = require('./back');
app.use('/', usersRouter);

app.listen(3000, (err) => {
    console.log('Servidor listo en el puerto ');
})