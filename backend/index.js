import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
//routes
import authRoutes from './routes/auth.js';
import messageRoutes from './routes/message.js';
import userRoutes from './routes/user.js';

import connectToMongodb from './db/connectToMongodb.js';

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    connectToMongodb();
    console.log(`Server running on port ${PORT}`);
})