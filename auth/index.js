const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {authRoutes} = require('./routes/auth.routes');


dotenv.config();

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/auth', authRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))