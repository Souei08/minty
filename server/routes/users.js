import express from 'express';
import { getUsers, registerUser } from '../controller/users.controller.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/create', registerUser);

export default router;
