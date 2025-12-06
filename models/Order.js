import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        required: true,
        unique: true,
    },
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
        name: String,
        price: Number,
        quantity: Number,
        image: String,
    }],
    shippingAddress: {
        name: String,
        phone: String,
        email: String,
        address: String,
        city: String,
        state: String,
        pincode: String,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending',
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending',
    },
    paymentId: String,
}, {
    timestamps: true,
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
