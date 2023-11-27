import express from 'express';
import { deleteUser, getUser, getUserOrders, getUserTexts, getUsers, updateUser } from '../controllers/user.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//UPDATE
router.put('/:id', verifyUser, updateUser);
//DELETE
router.delete('/:id', verifyUser, deleteUser);
//GET
router.get('/:id', verifyUser, getUser);
//GET ALL
router.get('/', getUsers);
//GET USER ORDERS
router.get('/orders/:id', verifyUser, getUserOrders);
//GET USER TEXTS
router.get('/texts/:id', verifyUser, getUserTexts);

export default router;