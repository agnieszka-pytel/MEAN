var Contact = require('../../models/contact');
var router = require('express').Router()

router.get('/', function (req, res, next) {
	Contact.find()
	.exec( function (err, contacts){
	if  (err) { return next(err) }
	res.json(contacts)
	})
})

router.get('/api', function (req, res, next) {
	Contact.find()
	.exec( function (err, contacts){
	if  (err) { return next(err) }
	res.json(contacts)
	})
})

router.post('/api/contacts/save', function (req, res, next) {
	console.log('Router POST')
	var contact = new Contact ({
		name:  req.body.name,
		surname:  req.body.surname,
		phone: req.body.phone,
		email: req.body.email
	})
	contact.save(function (err, contact) {
		if (err) { return next(err) }
		res.json(201, contact)
	})
})

router.put('/api/contacts/view/:id', function (req, res, next) {
		Contact.findById(req.params.id, req.body, function (err, old_contact) {
        if (err) return next(err);
        res.json(old_contact);
    })
})

router.put('/api/contacts/edit/:id', function(req, res, next) {
    Contact.findByIdAndUpdate(req.params.id, req.body, function (err, contact) {
        if (err) return next(err);
        res.json(contact);
    });
});

router.delete('/api/contacts/delete/:id', function(req, res, next) {
	console.log('router del')
    Contact.findByIdAndRemove(req.params.id, req.body, function (err, contact) {
        if (err) return next(err);
        res.json(contact);
    });
});

module.exports = router