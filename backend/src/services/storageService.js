import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, '../../data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');
const SUBSCRIBERS_FILE = path.join(DATA_DIR, 'subscribers.json');

// Ensure data folder and files exist
async function ensureFiles() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(INQUIRIES_FILE);
    } catch {
      await fs.writeFile(INQUIRIES_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
    try {
      await fs.access(SUBSCRIBERS_FILE);
    } catch {
      await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (err) {
    console.error('Failed to initialize data files:', err);
  }
}

// Inquiries Storage
export async function getInquiries() {
  await ensureFiles();
  try {
    const data = await fs.readFile(INQUIRIES_FILE, 'utf-8');
    const list = JSON.parse(data || '[]');
    return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } catch (err) {
    console.error('Error reading inquiries:', err);
    return [];
  }
}

export async function getInquiryById(id) {
  const inquiries = await getInquiries();
  return inquiries.find(i => i.id === id) || null;
}

export async function saveInquiry(inquiryData) {
  await ensureFiles();
  const inquiries = await getInquiries();
  
  const newInquiry = {
    id: `INQ-${Date.now().toString(36).toUpperCase()}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`,
    name: inquiryData.name ? inquiryData.name.trim() : '',
    email: inquiryData.email ? inquiryData.email.trim().toLowerCase() : '',
    phone: inquiryData.phone ? inquiryData.phone.trim() : '',
    company: inquiryData.company ? inquiryData.company.trim() : 'N/A',
    product: inquiryData.product ? inquiryData.product.trim() : 'General Inquiry',
    location: inquiryData.location ? inquiryData.location.trim() : '',
    message: inquiryData.message ? inquiryData.message.trim() : '',
    source: inquiryData.source || 'website-form',
    status: 'new', // new, contacted, quoted, completed
    createdAt: new Date().toISOString()
  };

  inquiries.unshift(newInquiry);
  await fs.writeFile(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), 'utf-8');
  return newInquiry;
}

export async function updateInquiryStatus(id, status) {
  await ensureFiles();
  const inquiries = await getInquiries();
  const index = inquiries.findIndex(i => i.id === id);
  if (index === -1) return null;
  
  inquiries[index].status = status;
  inquiries[index].updatedAt = new Date().toISOString();
  await fs.writeFile(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), 'utf-8');
  return inquiries[index];
}

// Subscribers Storage
export async function getSubscribers() {
  await ensureFiles();
  try {
    const data = await fs.readFile(SUBSCRIBERS_FILE, 'utf-8');
    return JSON.parse(data || '[]');
  } catch {
    return [];
  }
}

export async function saveSubscriber(email) {
  await ensureFiles();
  const subscribers = await getSubscribers();
  const cleanEmail = email.trim().toLowerCase();

  const existing = subscribers.find(s => s.email === cleanEmail);
  if (existing) {
    return { subscriber: existing, alreadySubscribed: true };
  }

  const newSubscriber = {
    id: `SUB-${Date.now().toString(36).toUpperCase()}`,
    email: cleanEmail,
    subscribedAt: new Date().toISOString()
  };

  subscribers.push(newSubscriber);
  await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2), 'utf-8');
  return { subscriber: newSubscriber, alreadySubscribed: false };
}
