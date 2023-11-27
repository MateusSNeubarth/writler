import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import usersRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import textRoute from "./routes/text.js";
import orderRoute from "./routes/order.js";
import cookieParser from 'cookie-parser';
const app = express();
dotenv.config();


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
    } catch (error) {
        throw error
    }
};

mongoose.connection.on("diconnected", () => {
    console.log("MongoDB disconnected");
});

//middlewares
app.use(cookieParser());
app.use(cors());
app.use(express.json());

//routes
app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/texts", textRoute);
app.use("/api/orders", orderRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(500).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(8800, () => {
    connect();
    console.log('Node API app is running on port 3000');
});
