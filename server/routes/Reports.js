const router = require('express').Router();
let Reports = require('../models/Reports.model');

router.route('/').get((req, res) => {
  Reports.find()
    .then(Reports => res.json(Reports))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/report/register').post((req, res) => {
  console.log("Here ");
  const Complain1 = req.body.Complain1;
  const Complain2 = req.body.Complain2;
  const Complain3 = req.body.Complain3;
  const Complain4 = req.body.Complain4;
  

  const newReports = new Reports({
    Complain1,
    Complain2,
    Complain3,
    Complain4
  });

  newReports.save()
  .then(() => res.json('Booking added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;