import Text from '../models/Text.js';

export const createText = async (req, res, next) => {
    const newText = new Text(req.body);

    try {
        const savedText = await newText.save();
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
    try {
        const updatedText = await Text.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");
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