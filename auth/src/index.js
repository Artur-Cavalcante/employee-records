const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
require("dotenv").config();

mongoose.connect(`${process.env.DB_CONNECTION}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
});

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const PORT = process.env.PORT
app.listen(PORT, () =>{console.log('Server running at port: ' + PORT)});