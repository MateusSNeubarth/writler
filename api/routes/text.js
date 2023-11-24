import express from 'express';
import { createText, updateText, deleteText, getText } from '../controllers/text.js';

const router = express.Router();

//CREATE
router.post("/", createText);
//UPDATE
router.put("/:id", updateText);
//DELETE
router.delete("/:id", deleteText);
//GET
router.get("/:id", getText);

export default router;