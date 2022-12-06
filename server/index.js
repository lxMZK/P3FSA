import cookieParser from 'cookie-parser';
import express from 'express';
import authRoutes from './routes/auth.js';

const app = express();

app.use(express.json());
app.use(cookieParser);
app.use('/auth', authRoutes);

app.listen(3001, () => {
  console.log('server on port 3001');
});
