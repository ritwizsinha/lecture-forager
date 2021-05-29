import { s3 } from '../../constants/awsInit';
import { AWS_BUCKET_NAME } from '../../constants/config';
import { Downloader } from './contract';

export const S3Downloader: Downloader = {
    download: async function(key: string) : Promise<Buffer> {
        const params = {
            Bucket: AWS_BUCKET_NAME,
            Key: key,
        }
        return (await s3.getObject(params).promise()).Body as Buffer;
    }
}

// S3Downloader.download('transcriptions/s3-lambda-audio-transcribe-36805321-8f7f-45e5-9db75c80e8bc9c1d.json');