import { Uploader } from '../interfaces/uploader/contract';

export function uploadVideoToSource (uploader: Uploader) {
    return  async (path, key) => {
        return uploader.upload(path, key);
    }
}