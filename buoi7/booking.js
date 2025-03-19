const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/booking_controller");

router.get("/", bookingController.listBookings);
router.post("/new", bookingController.addBooking);
router.post("/edit", bookingController.updateBooking);
router.post("/cancel/:id", bookingController.cancelBooking);

module.exports = router;
