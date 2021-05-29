import { NextFunction, Request, Response } from "express";

export const cleanTranscription = async (req: Request, res: Response, next: NextFunction) => {
    if (!req['video-data']) next();
    const transcription = req['video-data'];
    const text = transcription?.transcripts[0]?.transcript;
    const unparsedTimestamps = transcription.items ?? [];
    const list = unparsedTimestamps.map(timestamp => {
        const startTime = timestamp['start_time'];
        const word = timestamp['alternatives'][0]?.content;
        return {
            startTime,
            word,
        }
    })
    req['video-data'] = {
        text,
        timestamps: list
    }
    next();
}