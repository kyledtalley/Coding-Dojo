import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import { createBook, getAllBooks, getOneBook, updateOneBook, deleteOneBook } from './controllers/book.controller.js';
const app = express();
app.use(express.json(), cors());
dotenv.config();
const PORT = process.env.PORT;
dbConnect();

app.get('/books', getAllBooks);
app.get('/books/:id', getOneBook);
app.post('/books', createBook);
app.put('/books/:id', updateOneBook);
app.delete('/books/:id', deleteOneBook);



app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);
