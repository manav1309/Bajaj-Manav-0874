const express = require('express'); 
const router = express.Router(); 
const bfhlController = require('../controllers/bfhlController'); 
router.post('/bfhl', bfhlController.handleBfhlRequest); 
router.get('/health', bfhlController.getHealth); 
module.exports = router;