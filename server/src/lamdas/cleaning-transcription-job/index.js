const aws = require('aws-sdk');
const S3 = new aws.S3();

exports.handler = async (event, context, callback) => {
    const sourceS3 = event.Records[0].s3;
    const srcBucket = sourceS3.bucket.name;
    const sourceTree = sourceS3.object.key.split('/');
    const srcKey = sourceTree[sourceTree.length - 1].split('.')[0];

    const dstBucket = srcBucket;
    const destKey = `clean-transcriptions/${srcKey}.txt`;
    // Getting the content of the file
    try {
        const params = {
            Bucket: srcBucket,
            Key: srcKey,
        }

        const response = await S3.getObject(params).promise();
        const jsonObject = JSON.parse(response.Body.toString());
        const transcriptPara = jsonObject.results.transcripts[0];
    
        const buffer = transcriptPara.transcript;
        console.log(buffer);
        const destParams = {
            Bucket: dstBucket,
            Key: destKey,
            Body: buffer,
        }
        console.log("Uploading transcript text to S3");
        await S3.putObject(destParams).promise();
    } catch (err) {
        console.log(err);
        return;
    }
}