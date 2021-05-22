import * as Bull from 'bull';
import { REDIS_HOST, REDIS_PORT, MAX_PARALLEL_PROCESS } from '../../src/constants/config';
import * as path from 'path';
import videoConverter from './workers/videoConverter';
import videoUploader from './workers/videoUpload';
import audioUploader from './workers/audioUpload';

const connectionOpts = {
    host: REDIS_HOST,
    port: Number(REDIS_PORT)
}

const videoToAudioConversionQueue = new Bull('videoToAudioConversionQueue', {
    redis: {
        ...connectionOpts
    }
});

videoToAudioConversionQueue.process(MAX_PARALLEL_PROCESS, videoConverter);

const S3VideoUploadQueue = new Bull('S3VideoUploadQueue', {
    redis: {
        ...connectionOpts
    }
});
S3VideoUploadQueue.process(MAX_PARALLEL_PROCESS, videoUploader);

const S3AudioUploadQueue = new Bull('S3AudioUploadQueue', {
    redis: {
        ...connectionOpts
    }
});

S3AudioUploadQueue.process(MAX_PARALLEL_PROCESS, audioUploader);


export {
    S3VideoUploadQueue,
    S3AudioUploadQueue,
    videoToAudioConversionQueue
}