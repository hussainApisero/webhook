var express =require('express');
var app = express();
var bodyParser = require('body-parser');

var DESTINATION_VERIFICATION_TOKEN = 'abcd01234';

app.use(bodyParser.json());

app.listen(80 , function() {
console.log('Server started . Listening to port 80');
});


app.get('/' , function(req,res){
res.send('Hello world!!!!');
});


app.get('/destination' , function(req,res){
if( req.headers['verification-token'] === DESTINATION_VERIFICATION_TOKEN){
console.log('verification-token matched!');
return res.send(req.query.challange);
}

console.log('verification-token did not match!');
res.sendStatus(400);
});

app.post('/destination',function(req,res){
if( req.headers['verification-token'] === DESTINATION_VERIFICATION_TOKEN){
console.log('verification-token matched!');
return res.send(req.query.challange);
}
});
