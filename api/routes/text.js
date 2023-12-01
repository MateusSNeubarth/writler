import express from 'express';
import { createText, updateText, deleteText, getText, getTexts } from '../controllers/text.js';

const router = express.Router();

//CREATE
router.post("/:userid/:orderid", createText);
//UPDATE
router.put("/:id", updateText);
//DELETE
router.delete("/:id/:userid/:orderid", deleteText);
//GET TEXT
router.get("/:id", getText);
//GET ALL
router.get("/", getTexts);

export default router;