var express =require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(80 , function() {
console.log('Server started . Listening to port 80');
});


app.get('/' , function(req,res){
res.send('Hello world!!!!');
});