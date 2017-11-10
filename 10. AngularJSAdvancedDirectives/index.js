var express = require('express');

var app = express();

app.use('/', express.static('./'));


app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'));

console.log('Listening on port: '+app.get('port'));
  console.log('env = '+app.get('env')+
              '\n __dirname = '+ __dirname+
              '\n __process.cwd = '+ process.cwd());

module.exports = app;              
