import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import { config } from './config/config.js';
import routes from './routes/index.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

// Load environment variables
dotenv.config();

const app: Application = express();

// Connect to database
connectDB();

// Middleware
app.use(helmet()); // Security headers
app.use(cors({
  origin: config.frontendUrl,
  credentials: true
}));
app.use(morgan('dev')); // Logging
app.use(express.json()); // Body parser
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Root route
app.get('/', (_req, res) => {
  res.json({
    message: 'Task Management API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      auth: '/api/auth',
      tasks: '/api/tasks'
    }
  });
});

// Error handling
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${config.nodeEnv} mode`);
});

export default app;
