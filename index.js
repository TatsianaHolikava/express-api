const express = require('express')
const bodyParser = require('body-parser')
const Routes =require('./Routes')

const app = express()
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


Routes(app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
//7NtmNejsLvey1ivR
//mongodb+srv://<username>:<password>@cluster0.ka5z1.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://<username>:<D7Sl62Vz67eWro2S>@cluster0.ka5z1.mongodb.net/Kanban?retryWrites=true&w=majority
//mongodb+srv://TatsiH:<106T62T13Tanya>@cluster0.ka5z1.mongodb.net/Kanban?retryWrites=true&w=majority