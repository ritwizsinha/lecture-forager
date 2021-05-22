import { Converter } from './contract';
import * as ffmpeg from 'ffmpeg';
export const VideoConverter: Converter = {
    convert: async function(inPath: string, outPath: string) : Promise<string>  {
        try {
            const video = await new ffmpeg(inPath);
            return await video.fnExtractSoundToMP3(outPath);
        } catch (err) {
            console.log(err);
        }
    }
}