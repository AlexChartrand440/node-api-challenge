/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, please read the README word for word, don't worry, you got this
in every task there may be trouble, but if you worry you make it double, don't worry, you got this
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, you got this
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just hack it…
I need this code, but don't know where, perhaps should make some middleware, don't worry, just hack it

Go code!
*/
const express = require('express');
const app = express();

const actionRouter = require('./actionRouter');
const projectRouter = require('./projectRouter');

var logger = function logger(req, res, next) {

    var currentdate = new Date();
  
    console.log('Handling ' + req.method + ' request @ ' + req.url + ' [' + currentdate.getDay() + "/" + currentdate.getMonth() 
    + "/" + currentdate.getFullYear() + " " 
    + currentdate.getHours() + ":" 
    + currentdate.getMinutes() + ":" + currentdate.getSeconds() + ']');
  
    next();
  
}

app.use(express.json());
app.use(logger);

app.use('/actions/', actionRouter);
app.use('/project/', projectRouter);

app.listen(5000, '127.0.0.1', () => console.log('Server listening on port 5000.'));