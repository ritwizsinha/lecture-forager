
import { videoToAudioConverter } from '../../usecases';
import { S3AudioUploadQueue } from '../init';

export default async (job)  => {
    const { fileName } = job.data;
    try {
        const storePath = await videoToAudioConverter(fileName);
        await S3AudioUploadQueue.add(job.data);
        return Promise.resolve({
            path: storePath
        });
    } catch(err) {
        console.log(err);
        return Promise.reject();
    }
}