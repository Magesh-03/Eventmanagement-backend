import mongoose from "mongoose";


const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  eventTime: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
    enum: ['Birthday', 'Wedding', 'Anniversary', 'Conference', 'Party', 'Graduation', 'Meeting', 'Exhibition', 'Seminar', 'Workshop'],
  },
});


const Booking = mongoose.model('Booking', bookingSchema);


export default Booking;
