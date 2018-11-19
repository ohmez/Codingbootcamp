var express = require('express');
var PORT = process.env.PORT || 3000;
var app = express();

app.get('/:operator/:first/:second', (req,res) => {
    var operator = req.params.operator;
    var first = parseInt(req.params.first);
    var second = parseInt(req.params.second);
    switch(operator) {
        case 'a':
        result = first+second;
        break;
        case 's':
        result = first-second;
        break;
        case 'm':
        result = first*second;
        break;
        case 'd':
        result = first/second;
        break;
        default:
        result = 'sorry paths available are /a for add, /s for subtract, /m for multiply, /d for divide';
        break;
    }
    res.send(result.toString());
});

app.listen(PORT,(err) => {
    if(err) throw err;
    console.log('listening on ' +PORT);
});