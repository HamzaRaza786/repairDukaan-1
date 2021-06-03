//workers.model.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReportsSchema = new Schema({
  Complain1: { type: String, required: true },
  Complain2: { type: String, required: true },
  Complain3: { type: String, required: true },
  Complain4: { type: String, required: true },
});

const Reports = mongoose.model('Reports', ReportsSchema);

module.exports = Reports;