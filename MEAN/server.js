var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(require('./controllers/static'))

app.use('/api/contacts', require('./controllers/api/contacts'));
app.post('/api/contacts/save', require('./controllers/api/contacts'));
app.put('/api/contacts/edit/:id', require('./controllers/api/contacts'));
app.put('/api/contacts/view/:id', require('./controllers/api/contacts'));
app.del('/api/contacts/delete/:id', require('./controllers/api/contacts'));

function clientErrorHandler(err, req, res, next) {
  console.error('clientErrors ', err.toString());
  res.send(500, { error: err.toString()});
  if (req.xhr) {
    console.error(err);
    res.send(500, { error: err.toString()});
  } else {
    next(err);
  }
}

app.listen(3777, function () {
	console.log('Serwer nasłuchuje na porcie numer',3777)
})