//workers.model.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  Address: { type: String, required: true },
  Phone: { type: String, required: true },
  Email: { type: String, required: true }
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
