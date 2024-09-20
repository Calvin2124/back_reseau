const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const authMiddleware = require('../middleweare/auth');

router.post('/create', authMiddleware, messageController.createMessage);
router.delete('/delete/:messageId', messageController.deleteMessage);
router.get('/', authMiddleware, messageController.getAllMessages);

module.exports = router;