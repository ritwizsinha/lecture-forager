import { NextFunction, Request, Response } from "express";
import { addVideo } from "../usecases";

export const addVideoToDb = async (req: Request, res: Response, next: NextFunction) => {
    const { title, description } = req.body;
    const { fileName } = req as any;
    const fileInfo = {
        title,
        description,
        fileName,
    }
    const response = await addVideo(fileInfo);
    if (response.error) {
        return res.status(400).json(response.error);
    }
    req['response'] = response.data;
    next();
}