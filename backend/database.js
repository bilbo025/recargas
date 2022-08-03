const mongoose = require('mongoose');

const uri = "mongodb+srv://bilbo1:elbolson@cluster0.6x3au.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  function (err, res) {
    if (err) {
      console.log(err, 'Unable to connect to the server. check database.js');
    } else {
      console.log('DB is connected');
    }
  }
);

module.exports = mongoose;
