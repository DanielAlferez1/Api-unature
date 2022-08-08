import express from 'express';
import {
	sendRoles,
	deleteUser,
	findUser,
	signUp,
	login,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/get', sendRoles);
router.post('/signUp', signUp);
router.post('/login', login);
router.get('/deleteUser/:id', deleteUser);
router.get('/getUser/:id', findUser);

// http://localhost:4000/users

export default router;
