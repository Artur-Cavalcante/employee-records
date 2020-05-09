const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

mongoose.connect("mongodb+srv://api:36756933@cluster1-g32cs.mongodb.net/employee?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
});

const app = express();

app.use(express.json());
app.use(cors())
app.use(routes);

const PORT = 3334
app.listen(PORT, () =>{console.log('Server running at port: ' + PORT)});