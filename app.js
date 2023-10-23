const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()
require('./config/db')
const baseRoute = require('./routes/base/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use(express.static(`${__dirname}/uploads`));


//routes
app.use('/', baseRoute)


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is ready to listen on ${port}`);
})



