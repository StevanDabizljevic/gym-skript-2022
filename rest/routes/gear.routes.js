const express = require('express');
const { getAll, getOne, deleteOne, updateOne, createOne } = require('../controllers/gear.controller');
const { authenticate} = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/get-all', authenticate, getAll);
router.get('/get-one', getOne);
router.patch('/update-one', updateOne);
router.delete('/delete-one', deleteOne);
router.post('/create-one', createOne);

exports.userRoutes = router;