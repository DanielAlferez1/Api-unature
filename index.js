import express from 'express';
import cors from 'cors';
// import dotenv from 'dotenv';
// dotenv.config();

import 'dotenv/config';
import userRoutes from './routes/userRoutes.js';

const app = express();

//Config cors
const whiteList = [process.env.FRONTED_URL];

//cors dinamic
const corsOptions = {
	origin: function (origin, callback) {
		if (whiteList.includes(origin)) {
			//origin is domain from client
			//can request APi
			callback(null, true);
		} else {
			//cannot request
			callback(new Error('Error Cors'));
		}
	},
};
app.use(cors(corsOptions));

app.use(express.json());
//get, post, put, delete, patch
app.use('/api/users', userRoutes);

app.listen(4000, () => {
	console.log('Servidor corriendo en el puerto 4000');
});
