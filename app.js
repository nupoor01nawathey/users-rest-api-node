// include lib
const express    = require('express'),
      bodyParser = require('body-parser'),
      mongoose   = require('mongoose');

// setup express app
const app     = express();

// setup bodyParser
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/users'));

// db setup
mongoose.connect('mongodb://localhost:27017/usersAPI', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// setup port
const port = process.env.PORT || 4000 ;
app.listen(port, () => {
    console.log('Server started at port ' + port);
});