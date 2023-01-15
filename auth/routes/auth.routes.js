const express = require('express');
const { login } = require('../controllers/auth.controller');

const router = express.Router();

router.post('/login', login);
router.post('/register', (req, res) => {
    res.send('reqgister funkcija');
});

exports.authRoutes = router;
