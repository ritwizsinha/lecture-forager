import { makeAddVideo } from './addVideo';
import { uploadVideoToSource } from './uploadVideoToSource';
import { convertVideoToAudio } from './convertVideoToAudio';

import { VideoDB } from '../db/video';
import { S3Uploader } from '../uploader/AWSUploader';
import { VideoConverter } from '../converter/VideoConverter';

export const addVideo = makeAddVideo(VideoDB);
export const uploadVideoToS3 = uploadVideoToSource(S3Uploader);
export const videoToAudioConverter = convertVideoToAudio(VideoConverter);