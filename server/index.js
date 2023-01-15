import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors'
import userRoutes from './routes/user.routes.js'

dotenv.config();

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_CONN_URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "zadatak" })
    .then(() => app.listen(PORT, () => {
        console.log("STARTED", PORT)
    }))
    .catch(e => console.log(e))