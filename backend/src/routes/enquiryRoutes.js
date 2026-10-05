import { Router } from 'express';
import { createEnquiry, getAllEnquiries, getSingleEnquiry, changeInquiryStatus } from '../controllers/inquiryController.js';

const router = Router();

router.post('/', createEnquiry);
router.get('/', getAllEnquiries);
router.get('/:id', getSingleEnquiry);
router.patch('/:id/status', changeInquiryStatus);

export default router;
