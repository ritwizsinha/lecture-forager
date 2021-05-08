
import * as AWS from 'aws-sdk';
import * as multer from "multer"
import * as multerS3 from "multer-s3";
import {Request} from 'express';
import { v4 as uuidv4 } from 'uuid';
import { AWS_ACCESS_ID, AWS_USER_SECRET_KEY, AWS_BUCKET_NAME } from '../constants/config';

AWS.config.update({
    accessKeyId: AWS_ACCESS_ID,
    secretAccessKey: AWS_USER_SECRET_KEY,
    signatureVersion: 'v4'
});

export const S3 = new AWS.S3();

const getUniqFileName = (originalname: string) => {
    const name = uuidv4();
    const ext = originalname.split('.').pop();
    return `${name}.${ext}`;
}

export const handleUploadMiddleware = multer({
    storage: multerS3({
        s3: S3,
        bucket: AWS_BUCKET_NAME,
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function (req: Request, file: any, cb) {
            const fileName = getUniqFileName(file.originalname);
            const s3_inner_directory = 'videos';
            const finalPath = `${s3_inner_directory}/${fileName}`;

            file.newName = fileName;

            cb(null, finalPath );
        }
    })
});