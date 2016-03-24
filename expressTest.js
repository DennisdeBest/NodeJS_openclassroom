var express = require('express');


var app = express();


app.get('/:number', function(req, res) {

    res.setHeader('Content-Type', 'text/html');

    res.render('template.ejs', {numbers : req.params.number})

});


app.listen(8080);