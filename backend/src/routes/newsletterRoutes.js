import { Router } from 'express';
import { subscribeNewsletter, getSubscribersList } from '../controllers/newsletterController.js';

const router = Router();

router.post('/', subscribeNewsletter);
router.get('/', getSubscribersList);

export default router;
