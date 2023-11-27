import Order from '../models/Order.js';
import Text from '../models/Text.js';
import User from '../models/User.js';

export const createOrder = async (req, res, next) => {
    const userid = req.params.userid;
    const { title, desc, limit_date } = req.body;
    const newOrder = new Order({ title: title, desc: desc, user_id: userid, limit_date: limit_date || null});

    try {
        const savedOrder = await newOrder.save();
        try {
            await User.findByIdAndUpdate(userid, {
                $push : { orders: savedOrder._id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedOrder);
    } catch (err) {
        next(err);
    }
};

export const updateOrder = async (req, res, next) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            { $set:req.body },
            { new:true },
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        next(err);
    }
};

export const deleteOrder = async (req, res, next) => {
    const userid = req.params.userid;
    try {
        await Order.findByIdAndDelete(req.params.id);
        try {
            await User.findByIdAndUpdate(userid, {
                $pull : { orders: req.params.id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json("Order has been deleted");
    } catch (err) {
        next(err);
    }
};

export const getOrder = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id);
        res.status(200).json(order);
    } catch (err) {
        next(err);
    }
};

export const getOrders = async (req, res, next) => {
    try {
        const texts = await Order.find();
        res.status(200).json(texts);
    } catch (err) {
        next(err);
    }
};