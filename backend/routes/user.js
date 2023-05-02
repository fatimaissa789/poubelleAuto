const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/getAllUser', userCtrl.getAllUser);

router.get('/getOneThing/:id', userCtrl.getOneThing);


module.exports = router;