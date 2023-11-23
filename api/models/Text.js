import mongoose from 'mongoose';

const TextSchema = new mongoose.Schema(
    {
        title: { // title of the text
            type: String,
            required: true,
        },
        body: { // the text itself
            type: String,
            required: true,
        },
        avaluation: { // 1 - 5 number based off the avaluation of the user that sent the order
            type: Number, 
        },
        answered_to: { // order Id that was answered to 
            type: String,
        }
    }
);

export default mongoose.model('Text', TextSchema);