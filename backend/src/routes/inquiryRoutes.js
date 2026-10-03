import { Router } from 'express';
import { createInquiry, getAllInquiries, getSingleInquiry, changeInquiryStatus } from '../controllers/inquiryController.js';

const router = Router();

router.post('/', createInquiry);
router.get('/', getAllInquiries);
router.get('/:id', getSingleInquiry);
router.patch('/:id/status', changeInquiryStatus);

export default router;
