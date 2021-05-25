import { ThumbnailGenerator } from './contract';
var ffmpeg = require('fluent-ffmpeg');

export const npmExtractThumbnailFromVideo: ThumbnailGenerator = {
    extract: async function (path: string, destname: string): Promise<void> {
        try {
            const video = await new ffmpeg(path);
            const screenshoot = await video.takeScreenshots({ count: 1, size: '360x200'}, destname);
        } catch (err) {
            console.log(err);
        }   
    }
}
