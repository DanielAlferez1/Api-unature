import express from 'express';
import {sendRoles,setUser,deleteUser,findUser} from '../controllers/userController.js';

const router = express.Router();

router.get("/get",sendRoles)
router.post("/setUser",setUser)
router.get("/deleteUser/:id",deleteUser)
router.get("/getUser/:id",findUser)


// http://localhost:4000/users



export default router;
