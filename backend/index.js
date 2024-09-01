import express from 'express';
import dotenv from 'dotenv';
//routes
import authRoutes from './routes/auth.js';
import connectToMongodb from './db/connectToMongodb.js';

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());

app.use('/api', authRoutes);

app.listen(PORT, () => {
    connectToMongodb();
    console.log(`Server running on port ${PORT}`);
})