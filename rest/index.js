const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { userRoutes } = require('./routes/user.routes');

dotenv.config();

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/users', userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))