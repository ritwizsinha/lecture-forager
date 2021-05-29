
import * as AWS from 'aws-sdk';
import { response } from 'express';
import { AWS_ACCESS_ID, AWS_USER_SECRET_KEY, AWS_BUCKET_NAME } from '../constants/config';
AWS.config.update({
    accessKeyId: AWS_ACCESS_ID,
    secretAccessKey: AWS_USER_SECRET_KEY,
    signatureVersion: 'v4'
});

const S3 = new AWS.S3();

async function getObject() {
    const params = {
        Bucket: 'lecture-forager',
        Key: 'transcriptions/transcription.json'
    }

    try {
        const response = await S3.getObject(params).promise();
        const jsonObject = JSON.parse(response.Body.toString());
        const transcriptPara = jsonObject.results.transcripts[0];
        const body = JSON.stringify(transcriptPara);
    } catch (err) {
        console.log(err);
        return;
    }

    // S3.getObject(params, (err, data) => {
    //     if (err) console.log(err);
    //     else console.log(JSON.parse(data.Body.toString()));
    // })

    // console.log(response);
}

getObject().then(() => console.log("DONE"));