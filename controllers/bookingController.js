import Booking from '../models/bookingModel.js';


export const createBooking = async (req, res) => {
  try {
    const { name, email, eventDate, eventTime, eventName } = req.body;

    if (!name || !email || !eventDate || !eventTime || !eventName) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newBooking = new Booking({
     
      name,
      email,
      eventDate,
      eventTime,
      eventName,
    });

    await newBooking.save();

    res.status(201).json({
      message: 'Booking created successfully!',
      booking: newBooking,
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
export const deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    await Booking.findByIdAndDelete(id);
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete booking' });
  }
};

