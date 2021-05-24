import { makeAddVideo } from './addVideo';
import { uploadVideoToSource } from './uploadVideoToSource';
import { convertVideoToAudio } from './convertVideoToAudio';
import { downloadVideoTranscript } from './downloadVideoTranscript'; 
import { convertTranscriptToKeywords } from './convertTranscriptToKeyword';

import { VideoDB } from '../db/video';
import { S3Uploader } from '../uploader/AWSUploader';
import { VideoConverter } from '../converter/VideoConverter';
import { S3Downloader } from '../downloader/S3Downloader';
import { npmKeywordExtractor } from '../keywordExtractor/npm-keyword-extractor';

export const addVideo = makeAddVideo(VideoDB);
export const uploadVideoToS3 = uploadVideoToSource(S3Uploader);
export const videoToAudioConverter = convertVideoToAudio(VideoConverter);
export const downloadS3VideoTranscript = downloadVideoTranscript(S3Downloader);
export const npmConvertTranscriptToKeywords = convertTranscriptToKeywords(npmKeywordExtractor);
