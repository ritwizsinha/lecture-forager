import { Router, Request, Response } from 'express';
import { handleUploadMiddleware } from '../middleware/upload';
export const router = Router();

router.get('/video', (req, res) => {
    const { id } = req.params;
    // Return Video name thumbnail and other properties
});

router.get('/video/multiple', (req, res) => {
    // Return Video Metadata for the list of videos specified
});


router.post('/video', handleUploadMiddleware.single('file'), (req, res) => {
    return res.status(200);
});
