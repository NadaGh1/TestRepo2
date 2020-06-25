const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//connect to database
mongoose.connect('mongodb://localhost/ninjago')
mongoose.Promise = global.Promise;
//importer les routes de api.js
//const routes = require('./routes/api.js');

//create and set up express app
const app = express();

//ki bich torbet b partie static ya3ni html elli mawjoud fil folder public
app.use(express.static('public'));

app.use(bodyParser.json())

app.use(function(err, req, res, next){
  //console.log(err);
  res.status(422).send({Error: err.message});
});

//t9oul lel express bch yestaamel el routes
//app.use(routes);
//app.use('/api',routes);

//initialize routes
app.use('/api',require('./routes/api'));

//listen for requests
//if you deploy this app to hosting service like heroku yebda andou port mte3ou donc t7ot el process.env.port SINON 4000
app.listen(process.env.port || 4000, function(){
console.log('Now listening to requests!!!');
}); //node index TO RUN
