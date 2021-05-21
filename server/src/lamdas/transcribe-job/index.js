const aws = require('aws-sdk');
const Client = require('pg').Client;
const transcribe = new aws.TranscribeService();
const path = require('path');
const LANGUAGE_CODE = 'en-US'
const OUTPUT_BUCKET = 'lecture-forager';
const folder = 'transcriptions/';

const client = new Client({
    user: 'lectureforager',
    host: 'lectureforager.chkxp6opyrm4.ap-south-1.rds.amazonaws.com',
    database: 'lectureforager',
    password: 'lectureforager',
    port: 5432,
});

exports.handler = (event, context) => {
    const eventRecord = event.Records && event.Records[0],
        inputBucket = eventRecord.s3.bucket.name,
        key = eventRecord.s3.object.key,
        id = context.awsRequestId;

    let extension = path.extname(key);
    extension = extension.substr(1, extension.length);

    console.log('converting from ', `https://${inputBucket}.s3.amazonaws.com/${key}`, extension);

    if (!['mp3', 'mp4', 'wav', 'flac'].includes(extension)) {
        throw 'Invalid file extension, the only supported AWS Transcribe file types are MP3, MP4, WAV, FLAC.';
    }

    const fileUri = `https://${inputBucket}.s3.amazonaws.com/${key}`,
    jobName = `s3-lambda-audio-transcribe-${id}`;
    // const query = `UPDATE Videos
    // SET transcription_filename = $1.json
    // WHERE storage_id = $2`;
    // await client.query(query, [jobName, key]);
    const params = {
        LanguageCode: LANGUAGE_CODE,
        Media: {
            MediaFileUri: fileUri
        },
        MediaFormat: extension,
        OutputKey: folder,
        TranscriptionJobName: jobName,
        OutputBucketName: OUTPUT_BUCKET
    };
    return transcribe.startTranscriptionJob(params).promise();
};
