import { makeAddVideo } from './addVideo';
import { uploadVideoToSource } from './uploadVideoToSource';
import { convertVideoToAudio } from './convertVideoToAudio';
import { downloadVideoTranscript } from './downloadVideoTranscript'; 
import { convertTranscriptToKeywords } from './convertTranscriptToKeyword';
import { makeSearchVideos } from './searchVideos';
import { extractThumbnailFromVideo } from './createVideoThumbnail';
import { createUpdateAudioId } from './updateAudioId';
import { createUpdateStorageId } from './updateStorageId'; 

import { VideoDB } from '../interfaces/db/video';
import { S3Uploader } from '../interfaces/uploader/AWSUploader';
import { VideoConverter } from '../interfaces/converter/VideoConverter';
import { S3Downloader } from '../interfaces/downloader/S3Downloader';
import { npmKeywordExtractor } from '../interfaces/keywordExtractor/npm-keyword-extractor';
import { npmExtractThumbnailFromVideo } from '../interfaces/thumnailGenerator/convertVideoToThumbnail';

export const addVideo = makeAddVideo(VideoDB);
export const uploadVideoToS3 = uploadVideoToSource(S3Uploader);
export const videoToAudioConverter = convertVideoToAudio(VideoConverter);
export const downloadS3VideoTranscript = downloadVideoTranscript(S3Downloader);
export const npmConvertTranscriptToKeywords = convertTranscriptToKeywords(npmKeywordExtractor);
export const searchVideos = makeSearchVideos(VideoDB);
export const extractThumbnail = extractThumbnailFromVideo(npmExtractThumbnailFromVideo);
export const updateStorageId = createUpdateStorageId(VideoDB);
export const updateAudioId = createUpdateAudioId(VideoDB);