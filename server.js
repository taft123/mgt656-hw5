var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656! I am taft from MAM 2017');
});

app.get('/nickname', function(request, response){
    response.send("I am 'poised-stingray' from MAM 2017");
});

app.listen(process.env.PORT || 4000);