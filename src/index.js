const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
require('dotenv').config()

const app = express()

mongoose.connect(`${process.env.DB_CONNECTION}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
}).catch((error) => {
  console.log(error);
});


app.use(express.json())
app.use(cors())
app.use(routes)

const PORT = `${process.env.PORT}` || 3333;

app.listen(PORT, () => console.log(`Application Employee Register Running at port ${PORT}`))
