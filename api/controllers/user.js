import Order from '../models/Order.js';
import Text from '../models/Text.js';
import User from '../models/User.js';

export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new:true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        next(err);
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    } catch (err) {
        next(err);
    }
};

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};

export const getUserOrders = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        const list = await Promise.all(
            user.orders.map((order) => {
                return Order.findById(order);
            })
        );
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
};

export const getUserTexts = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        const list = await Promise.all(
            user.texts.map((text) => {
                return Text.findById(text);
            })
        );
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
};