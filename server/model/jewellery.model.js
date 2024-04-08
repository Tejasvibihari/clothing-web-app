import mongoose from 'mongoose';

const jewellerySchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    }

});

const Jewellery = mongoose.model('Jewellery', jewellerySchema);
export default Jewellery;