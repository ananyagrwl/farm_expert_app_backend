var express = require('express');
var router = express.Router();
const expressAsyncHandler = require('express-async-handler');
const generateToken = require('../config/generateToken');
const User = require('../modals/userModel');
const Recent =require('../modals/recentModel');
const protect = require('../middleware/authmiddleware');

router.get('/recent_crop', protect, expressAsyncHandler(async (req, res, next)=>{
    const id = await User.findbyID(id);
    
}))

module.exports = router;
