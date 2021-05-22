import * as Bull from 'bull';
import { REDIS_HOST, REDIS_PORT, MAX_PARALLEL_PROCESS } from '../../src/constants/config';
import * as path from 'path';

const connectionOpts = {
    host: REDIS_HOST,
    port: Number(REDIS_PORT)
}
// const videoToAudioConversionQueue = new Bull('videoToAudioConversionQueue', {
//     redis: {
//         ...connectionOpts
//     }
// });

// videoToAudioConversionQueue.process(MAX_PARALLEL_PROCESS, './workers/videoUpload.js');

const S3VideoUploadQueue = new Bull('S3VideoUploadQueue', {
    redis: {
        ...connectionOpts
    }
});

S3VideoUploadQueue.process(MAX_PARALLEL_PROCESS, path.join(__dirname, '../../dist/src/queues/workers/videoUpload.js'));

// const S3AudioUploadQueue = new Bull('S3AudioUploadQueue', {
//     redis: {
//         ...connectionOpts
//     }
// });



export {
    S3VideoUploadQueue,
}