import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
    {
        title: { // title of the order
            type: String,
            required: true,
        },
        desc: { // description of what is wanted
            type: String,
            required: true,
        },
        limit_date: { // date limit that user can receive answers
            type: Date,
            required: true,
        },
        answers: {
            type: [String], // Texts that were sent as an answer to the order
        }
    },
    { timestamps: true }
);

export default mongoose.model('Order', OrderSchema);