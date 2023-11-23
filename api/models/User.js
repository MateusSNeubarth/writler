import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        username: { // unique name of the user
            type: String,
            required: true,
            unique: true,
        },
        email: { // unique email of the user
            type: String,
            required: true,
            unique: true,
        },
        password: { // password for login
            type: String,
            required: true,
        },
        orders: { // list of orders Id's
            type: [String]
        },
        texts: { // list of texts Id's
            type: [String]
        },
    },
    { timestamps: true }
);

export default mongoose.model('User', UserSchema);