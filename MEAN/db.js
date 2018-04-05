var mongoose = require('mongoose');
var uri = 'mongodb://14_pytel:epiepi123@127.0.0.1:27017/14_pytel?authSource=14_pytel';
mongoose.connect(uri, function () {
	console.log('Nawiązano połączenie z mongodb.')
});
module.exports = mongoose