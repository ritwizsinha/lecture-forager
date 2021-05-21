import { NextFunction, Request, Response } from "express";

export const addVideoToDb = (req: Request, res: Response, next: NextFunction) => {
    console.log(req);
    next();
}