
import * as path from 'path';
import { uploadVideoToS3, updateStorageId } from '../../usecases';

export default async (job)  => {
    const { id, fileName } = job.data;
    try {
        const absPath = path.join(__dirname, `../../../uploads/${fileName}`);
        const key = `videos/${id + fileName}`;
        // const response = await uploadVideoToS3(absPath, key);
        // console.log(response);
        await updateStorageId(id, key);
        Promise.resolve();
    } catch(err) {
        console.log(err);
        Promise.reject();
    }
}