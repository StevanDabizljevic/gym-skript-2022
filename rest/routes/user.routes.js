const express = require('express');
const { getAll, getOne, deleteOne, updateOne, createOne } = require('../controllers/user.controller');
const { authenticate} = require('../middleware/auth.middleware');

const router = express.Router();

//authenticateAdmin
router.get('/get-all', authenticate, getAll);
router.get('/get-one', getOne);
router.patch('/update-one', updateOne);
router.delete('/delete-one', deleteOne);
router.post('/create-one', createOne);

//router.delete('/delete', deleteFunkcija);
//router.post('/create', createFunkcija);
//router.patch('/update', updateFunkcija);

exports.userRoutes = router;
