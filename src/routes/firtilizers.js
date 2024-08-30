const express = require("express");
const router = express.Router();
const {dataFirtilizer, getImage} = require('../controllers/firtilizers')
router.post("/firtilizer",dataFirtilizer);
router.post("/getImage",getImage); 
module.exports = router; 