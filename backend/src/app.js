import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './config/index.js';
import { testSmtpConnection } from './services/emailService.js';
import inquiryRoutes from './routes/inquiryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import newsletterRoutes from './routes/newsletterRoutes.js';

const app = express();

// Middlewares
app.use(cors({
  origin: config.nodeEnv === 'production' ? config.clientOrigin : '*',
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (config.nodeEnv !== 'test') {
  app.use(morgan('dev'));
}

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Ariselux Equipments Backend API',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// SMTP Diagnostic Endpoint (POST only to prevent accidental browser triggers)
app.post('/api/test-email', async (req, res) => {
  try {
    const authKey = req.headers['x-admin-key'] || req.query.key;
    if (config.nodeEnv === 'production' && authKey !== 'ariselux-test') {
      return res.status(403).json({ success: false, message: 'Forbidden' });
    }
    const result = await testSmtpConnection();
    const statusCode = result.success ? 200 : (result.configured ? 502 : 400);
    return res.status(statusCode).json(result);
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// API Routes
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/contact', inquiryRoutes); // friendly alias for contact form
app.use('/api/products', productRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Root welcome
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Ariselux Equipments API service.',
    documentation: '/api/health'
  });
});

// 404 Not Found Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Endpoint ${req.method} ${req.originalUrl} not found.`
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

export default app;
