const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;

// Usamos middlewares
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const usersRouter = require('./back');

app.use('/', usersRouter);

app.listen(port, () => {
  console.log(`Servidor listo en el puerto ${port}`);
});
