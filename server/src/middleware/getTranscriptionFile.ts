import { NextFunction, Request, Response } from "express";
import { getTranscriptAndTimestamps } from '../usecases';

export const getTranscriptionWithTimestamps = async (req: Request, res: Response, next: NextFunction) => {
    const { id, filename } = (req.query as any);
    const fileNameWithoutExt = filename.slice(0, filename.lastIndexOf('.'));
    const key = `transcriptions/${id + fileNameWithoutExt}.json`;

    try {
        const results = await getTranscriptAndTimestamps(key);
        req['video-data'] = results;
        next();
    } catch (err) {
        return res.status(404).json({
            message: err.message ? err.message : err
        })
    }
}