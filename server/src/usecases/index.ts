import { makeAddVideo } from './addVideo';
import { uploadVideoToSource } from './uploadVideoToSource';

import { VideoDB } from '../db/video';
import { S3Uploader } from '../uploader/AWSUploader';

export const addVideo = makeAddVideo(VideoDB);
export const uploadVideoToS3 = uploadVideoToSource(S3Uploader);