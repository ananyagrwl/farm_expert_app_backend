var express = require('express');
var router = express.Router();
const expressAsyncHandler = require('express-async-handler');
const generateToken = require('../config/generateToken');
const User = require('../modals/userModel');
const Recent =require('../modals/recentModel');
const protect = require('../middleware/authmiddleware');

router.get('/:token', protect, expressAsyncHandler(async (req, res, next)=>{
    const token = req.params.token
    const user = await User.findById(req.id);
    res.send({data: user})
}))

module.exports = router;
