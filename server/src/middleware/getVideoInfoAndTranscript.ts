import { NextFunction, Request, Response } from "express";

export const getVideoInfoAndTransript = async (req: Request, res: Response, next: NextFunction) => {
    const { id, filename } = req.query;
    if (!id || !filename) return res.status(400).json({
        error: 'Invalid parameters'
    });
    next();
}