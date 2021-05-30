import { NextFunction, Request, Response } from "express";
import { S3VideoUploadQueue, videoToAudioConversionQueue, VideoThumbnailQueue, PullTranscriptionsQueue } from "../queues/init";

export const addToJobQueue = async (req: Request, res: Response, next: NextFunction) => {
    const data = req['response'];
    S3VideoUploadQueue.add(data);
    videoToAudioConversionQueue.add(data);
    VideoThumbnailQueue.add(data);
    // 10min -> 600 sec -> 600000
    PullTranscriptionsQueue.add(data, {
        delay:600000,
        attempts: 5,
    })
    next();
}