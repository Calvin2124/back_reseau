const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.post('/create', messageController.createMessage);
router.delete('/delete/:messageId', messageController.deleteMessage);

module.exports = router;