
import * as path from 'path';
import { uploadVideoToS3 } from '../../usecases';

export default async (job)  => {
    const { id, fileName } = job.data.data;
    try {
        const absPath = path.join(__dirname, `../../../uploads/${fileName}`);
        const key = `videos/${id + fileName}`;
        const response = await uploadVideoToS3(absPath, key);
        console.log(response);
    } catch(err) {
        console.log(err);
        Promise.reject();
    }
}