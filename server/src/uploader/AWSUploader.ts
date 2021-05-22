import * as AWS from 'aws-sdk';
import { AWS_ACCESS_ID, AWS_USER_SECRET_KEY, AWS_BUCKET_NAME } from '../constants/config';
import { Uploader } from './contract';
import * as fs from 'fs';

AWS.config.update({
    accessKeyId: AWS_ACCESS_ID,
    secretAccessKey: AWS_USER_SECRET_KEY,
    signatureVersion: 'v4'
});
const s3 = new AWS.S3();


export const S3Uploader: Uploader = {
    upload: async function(path: string, key: string): Promise<any> {
        let data;
        if (fs.existsSync(path)) {
            data = fs.readFileSync(path);
        } else {
            throw new Error('invalid path');
        }

        const params = {
            Bucket: AWS_BUCKET_NAME,
            Key: key,
            Body: data
        }

        return s3.upload(params).promise();
    }
}