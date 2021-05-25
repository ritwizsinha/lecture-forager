import { AWS_BUCKET_NAME } from '../../constants/config';
import { s3 } from '../../constants/awsInit';
import { Uploader } from './contract';
import * as fs from 'fs';

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