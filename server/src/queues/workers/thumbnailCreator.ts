
import { extractThumbnail } from '../../usecases';

export default async (job)  => {
    const { fileName } = job.data;
    try {
        const response = extractThumbnail(fileName);
        return Promise.resolve({
            response,
        })
    } catch(err) {
        console.log(err);
        return Promise.reject();
    }
}