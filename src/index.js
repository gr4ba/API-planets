const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use(require('./routes/index'));

app.listen(port);
console.log('Corriendo en el puerto ' + port);
