import Order from '../models/Order.js';
import Text from '../models/Text.js';
import User from '../models/User.js';

export const createText = async (req, res, next) => {
    const userid = req.params.userid;
    const { title, body, answered_to } = req.body;
    const newText = new Text({ title: title, body: body, from: userid, answered_to: answered_to });

    try {
        const savedText = await newText.save();
        try {
            await User.findByIdAndUpdate(userid, {
                $push : { texts: savedText._id },
            });
        } catch (err) {
            next(err);
        }
        try {
            await Order.findByIdAndUpdate(answered_to, {
                $push : { answers: savedText._id},
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedText);
    } catch (err) {
        next(err);
    }
};

export const updateText = async (req, res, next) => {
    try {
        const updatedText = await Text.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new:true }
        );
        res.status(200).json(updatedText);
    } catch (err) {
        next(err);
    }
};

export const deleteText = async (req, res, next) => {
    const userid = req.params.userid;
    const orderid = req.params.orderid;    
    try {
        await Text.findByIdAndDelete(req.params.id);
        try {
            await User.findByIdAndUpdate(userid, {
                $pull : { texts: req.params.id },
            });
        } catch (err) {
            next(err);
        }
        try {
            await Order.findByIdAndUpdate(orderid, {
              $pull : { answers: req.params.id }  ,
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json("Text has been deleted");
    } catch (err) {
        next(err);
    }
};

export const getText = async (req, res, next) => {
    try {
        const text = await Text.findById(req.params.id);
        res.status(200).json(text);
    } catch (err) {
        next(err);
    }
};

export const getTexts = async (req, res, next) => {
    try {
        const texts = await Text.find();
        res.status(200).json(texts);
    } catch (err) {
        next(err);
    }
};