import express from 'express';
// import dotenv from 'dotenv';
// dotenv.config();

import 'dotenv/config';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json())
//get, post, put, delete, patch
app.use('/users', userRoutes);

app.listen(4000, () => {
	console.log('Servidor corriendo en el puerto 4000');
});


