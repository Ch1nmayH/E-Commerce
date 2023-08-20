const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./routes/api')

app.use(express.json())


app.get('/', (req, res) => {

    res.send('Index');
})

let apiUrl = process.env.APIURL

app.use(`${apiUrl}`, routes)

let port = process.env.PORT || 3000;
app.listen(`${port}`, () => {

    console.log(`Server started at port ${port}`);
})
