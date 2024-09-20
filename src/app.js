const express = require('express');
const authRoutes = require('./routes/authRoutes.js');
const messageRoutes = require('./routes/messageRoutes.js');
const sequelize = require('./config/database');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

