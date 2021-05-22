import { NextFunction, Request, Response } from "express";
import { S3VideoUploadQueue, videoToAudioConversionQueue } from "../queues/init";

export const addToJobQueue = async (req: Request, res: Response, next: NextFunction) => {
    const data = req['response'];
    S3VideoUploadQueue.add(data);
    videoToAudioConversionQueue.add(data);
    next();
}