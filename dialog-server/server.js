const express = require('express');
const port =  3001;
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(express.json())
require('./routes/df-routes.js')(app)

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())


app.get('/df/server', (req, res) => {
    res.send("Hi, from server")
})





app.listen(port,() => {
    console.log("Server is running");
})