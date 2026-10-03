import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from backend root
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const config = {
  port: parseInt(process.env.PORT, 10) || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  company: {
    name: 'Ariselux Equipments Private Limited',
    email: process.env.COMPANY_EMAIL || 'sales@ariselux.com',
    phone: process.env.COMPANY_PHONE || '+918126732502',
    address: 'Plot No. 25, Sector 8A, IIE SIDCUL, Haridwar - 249403, Uttarakhand, India',
    whatsapp: '918126732502'
  },
  smtp: {
    host: process.env.SMTP_HOST || '',
    port: parseInt(process.env.SMTP_PORT, 10) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
    fromEmail: process.env.FROM_EMAIL || 'sales@ariselux.com'
  }
};
