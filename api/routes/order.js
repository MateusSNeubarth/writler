import express from "express";
import { createOrder, deleteOrder, getOrder, getOrderTexts, getOrders, updateOrder } from "../controllers/order.js";

const router = express.Router();

//CREATE
router.post("/:userid", createOrder);
//UPDATE
router.put("/:id", updateOrder);
//DELETE
router.delete("/:id/:userid", deleteOrder);
//GET
router.get("/:id", getOrder);
//GET ALL
router.get("/", getOrders);
//GET ORDER ANSWERS
router.get("/:id/texts", getOrderTexts);

export default router;