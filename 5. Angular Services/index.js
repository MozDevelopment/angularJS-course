var express = require('express');

var app = express();

app.use('/', express.static('./'));
// app.use('/lib', express.static(__dirname + '/lib'));


app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'));

console.log('Listening on port: '+app.get('port'));
  console.log('env = '+app.get('env')+
            '\n __dirname = '+ __dirname+
            '\n process.cwd = '+process.cwd());

module.exports = app;
