import mongoose from 'mongoose';

const clothSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    subtitle: {
        type: String
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

const Cloth = mongoose.model('Cloth', clothSchema);
export default Cloth;