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
        from: { // id from user that sent the text
            type: String,
            required: true,
        },
        answered_to: { // order Id that was answered to 
            type: String,
        },
    }
);

export default mongoose.model('Text', TextSchema);