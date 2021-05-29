import { ThumbnailGenerator } from "../interfaces/thumnailGenerator/contract";
import * as path from 'path';

export const extractThumbnailFromVideo = (converter: ThumbnailGenerator) => {
    return async (filename: string) => {
        const videoFileName = filename.slice(0, filename.lastIndexOf('.'));
        const inPath = path.join(__dirname, `../../uploads/${filename}`);
        const outPath = path.join(__dirname, `../../thumbnails/${videoFileName}/`);
        return await converter.extract(inPath, outPath);
    }
}