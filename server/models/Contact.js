const router = require('express').Router();
let Contact = require('../models/Contact.model');


router.route('/').get((req, res) => {
    Contact.find()
      .then(Contact => res.json(Contact))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/Contact/register').post((req, res) => {
    //console.log("Here ");
    const Phone = req.body.Phone;
    const Address = req.body.Address;
    const Email = req.body.Email;
  
    const newContact = new Contact({
      Phone,
      Address,
      Email
    });
  
    newContact.save()
    .then(() => res.json('Booking added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  

router.route('/getContact/:id').get((req, res) => {
  Contact.findById(req.params.id)
    .then(Contact => res.json(Contact))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;