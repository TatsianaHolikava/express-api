const express = require('express')
const bodyParser = require('body-parser')
const Routes =require('./Routes')
const dbConnection = require("./dbConnection");

const app = express()
const PORT = process.env.PORT || 5000;



app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

dbConnection(app);
Routes(app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
//mongodb+srv://TatsiH:106T62T13Tanya@kanban.hf4dyxn.mongodb.net/Kanban?retryWrites=true&w=majority