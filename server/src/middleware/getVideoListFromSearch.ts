import { NextFunction, Request, Response } from "express";
import { searchVideos } from "../usecases";

export const getVideoListFromSearch = async (req: Request, res: Response, next: NextFunction) => {
    const { search } = req.body;
    console.log(req.params, req.body);
    if (!search) {
        return res.status(400).json({
            error: 'Search term not provided'
        })
    }
    const response = await searchVideos(search);
    console.log(response);
    if (response.error) {
        return res.status(400).json(response.error);
    }
    req['response'] = response.data;
    next();
}