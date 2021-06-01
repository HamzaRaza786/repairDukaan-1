//workers.model.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingsSchema = new Schema({
  ID: { type: String, required: true },
  Type: { type: String, required: true },
  date: { type: Date, required: true },
  Location: { type: String, required: true },
  Fare: { type: String, required: true },
  Status: { type: Number, required: true }
});

const Bookings = mongoose.model('Bookings', bookingsSchema);

module.exports = Bookings;