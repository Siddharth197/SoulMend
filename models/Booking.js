import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
    bookingNumber: {
        type: String,
        required: true,
        unique: true,
    },
    service: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    customerName: {
        type: String,
        required: true,
    },
    customerPhone: {
        type: String,
        required: true,
    },
    customerEmail: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['confirmed', 'completed', 'cancelled'],
        default: 'confirmed',
    },
}, {
    timestamps: true,
});

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
