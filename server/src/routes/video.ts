import { Router, Request, Response } from 'express';
import { handleUploadMiddleware } from '../middleware/upload';
const router = Router();

router.get('video', (req, res) => {
    const { id } = req.params;
     
})