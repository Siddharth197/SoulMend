import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a product name'],
        maxlength: [100, 'Name cannot be more than 100 characters'],
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price'],
    },
    image: {
        type: String,
        required: [true, 'Please provide an image'],
    },
    description: {
        type: String,
        maxlength: [500, 'Description cannot be more than 500 characters'],
    },
    longDescription: {
        type: String,
    },
    ingredients: [{
        type: String,
    }],
    benefits: [{
        type: String,
    }],
    category: {
        type: String,
        default: 'balm',
    },
    stock: {
        type: Number,
        required: [true, 'Please provide stock quantity'],
        default: 0,
    },
}, {
    timestamps: true,
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
