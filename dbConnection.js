const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://TatsiH:106T62T13Tanya@kanban.hf4dyxn.mongodb.net/Kanban?retryWrites=true&w=majority';


function dbConnection(){
mongoose.connect(connectionString)
       .then(() => console.log('Mongo connection OK'))
       .catch(err => console.log(err))
}

module.exports = dbConnection;