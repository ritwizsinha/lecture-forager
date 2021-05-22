import { NextFunction, Request, Response } from "express";
import { S3VideoUploadQueue } from "../queues/init";

export const addS3UploadJob = async (req: Request, res: Response, next: NextFunction) => {
    const data = req['response'];
    S3VideoUploadQueue.add({
        data: {
            ...data
        }
    });
    next();
}