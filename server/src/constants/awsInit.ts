import * as AWS from 'aws-sdk';
import { AWS_ACCESS_ID, AWS_USER_SECRET_KEY } from '../constants/config';

AWS.config.update({
    accessKeyId: AWS_ACCESS_ID,
    secretAccessKey: AWS_USER_SECRET_KEY,
    signatureVersion: 'v4'
});
export const s3 = new AWS.S3();