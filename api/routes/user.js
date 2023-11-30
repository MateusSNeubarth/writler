import express from 'express';
import { deleteUser, getUser, getUserOrders, getUserTexts, getUsers, updateUser } from '../controllers/user.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//UPDATE
router.put('/:id', updateUser);
//DELETE
router.delete('/:id', verifyUser, deleteUser);
//GET
router.get('/:id', getUser);
//GET ALL
router.get('/', getUsers);
//GET USER ORDERS
router.get('/orders/:id', getUserOrders);
//GET USER TEXTS
router.get('/texts/:id', getUserTexts);

export default router;