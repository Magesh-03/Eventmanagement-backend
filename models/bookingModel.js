import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    eventDate: { type: Date, required: true },
    eventTime: { type: String, required: true },
    eventName: {
      type: String,
      required: true,
      enum: [
        'Birthday', 'Wedding', 'Anniversary', 'Conference',
        'Party', 'Graduation', 'Meeting', 'Exhibition',
        'Seminar', 'Workshop'
      ]
    },
  },
  { timestamps: true }
);

// Custom toJSON method
bookingSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
