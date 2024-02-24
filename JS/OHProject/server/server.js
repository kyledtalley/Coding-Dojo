import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from './routes/swiftProduct.routes.js'
const app = express();
app.use(express.json(), cors());
dotenv.config();
app.use('/api', router);
dbConnect();
app.listen(process.env.PORT, () =>{
    console.log('Server is running on port ' + process.env.PORT);
});
