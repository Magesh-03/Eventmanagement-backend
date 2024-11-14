import express from 'express';

import { createBooking, getAllBookings ,deleteBooking} from '../controllers/bookingController.js';
const router = express.Router();


router.post('/book', createBooking);


router.get('/bookings', getAllBookings);

router.delete('/bookings/:id', deleteBooking);

export default router;
