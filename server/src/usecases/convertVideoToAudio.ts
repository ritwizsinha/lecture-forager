import { Converter } from "../interfaces/converter/contract";
import * as path from 'path';

export const convertVideoToAudio = (converter: Converter) => {
    return async (filename: string) => {
        const audioFileName = filename.slice(0, filename.lastIndexOf('.'));
        const inPath = path.join(__dirname, `../../uploads/${filename}`);
        const outPath = path.join(__dirname, `../../audios/${audioFileName}.mp3`);
        return await converter.convert(inPath, outPath);
    }
}