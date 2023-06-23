const connect = require("./db");
const express = require('express')
require('dotenv').config();
connect();
const app = express();
const cors = require('cors')

app.use(cors())
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/userdetails", require('./router'))

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})