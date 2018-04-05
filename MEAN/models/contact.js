var db = require('../db')

var contactSchema = db.Schema( {
	name:  { type: 'string', required: true },
	surname:  { type: 'string', required: true },
	phone: {  },
	email: {  }
})
module.exports = db.model('Contact', contactSchema);