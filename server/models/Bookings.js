const router = require('express').Router();
let Bookings = require('../models/Bookings.model');

router.route('/').get((req, res) => {
  Bookings.find()
    .then(Bookings => res.json(Bookings))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/booking/register').post((req, res) => {
  console.log("Here ");
  const ID = req.body.ID;
  const Type = req.body.Type;
  const date = Date.parse(req.body.Date);
  const Location = req.body.Location;
  const Fare = req.body.Fare;
  const Status = Number(req.body.Status);
  const Email = req.body.Email;

  const newBookings = new Bookings({
    ID,
    Type,
    date,
    Location,
    Fare,
    Status,
    Email
  });

  newBookings.save()
  .then(() => res.json('Booking added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getBooking/:id').get((req, res) => {
  Bookings.findById(req.params.id)
    .then(Bookings => res.json(Bookings))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Bookings.findByIdAndDelete(req.params.id)
    .then(() => res.json('Booking deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Bookings.findById(req.params.id)
    .then(Bookings => {
      Bookings.ID = req.body.ID;
      Bookings.Type = req.body.Type;
      Bookings.date = Date.parse(req.body.date);
      Bookings.Location = req.body.Location;
      Bookings.Fare = req.body.Fare;
      Bookings.Status = Number(req.body.Status);
      Bookings.Email = req.body.Email;

      Bookings.save()
        .then(() => res.json('Booking updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;