import { Router } from 'express';
import { createQuotation, getAllQuotations, getSingleQuotation, changeInquiryStatus } from '../controllers/inquiryController.js';

const router = Router();

router.post('/', createQuotation);
router.get('/', getAllQuotations);
router.get('/:id', getSingleQuotation);
router.patch('/:id/status', changeInquiryStatus);

export default router;
