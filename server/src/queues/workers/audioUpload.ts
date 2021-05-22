
import * as path from 'path';
import { uploadVideoToS3 } from '../../usecases';

export default async (job)  => {
    const { id, fileName } = job.data;
    try {
        const audioFileName = `${fileName.slice(0, fileName.lastIndexOf('.'))}.mp3`;
        const absPath = path.join(__dirname, `../../../audios/${audioFileName}`);
        const key = `audios/${id + audioFileName}`;
        const response = await uploadVideoToS3(absPath, key);
        console.log(response);
        return Promise.resolve({
            response
        });
    } catch(err) {
        console.log(err);
        Promise.reject();
    }
}