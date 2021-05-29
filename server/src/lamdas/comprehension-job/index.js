// dependencies
const AWS = require('aws-sdk');
const util = require('util');
const ComprehendAPI = new AWS.Comprehend();

// get reference to S3 client
const s3 = new AWS.S3(); 

exports.handler = async (event, context, callback) => {

  // Read options from the event parameter.
//   console.log("Reading options from event:\n", util.inspect(event, {depth: 5}));
  const srcBucket = event.Records[0].s3.bucket.name;
  // Object key may have spaces or unicode non-ASCII characters.
  const paths = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, " ")).split('/');
  const srcKey = paths[paths.length - 1];
  const srcKeyWithoutExt = srcKey.split('.')[0];
  const dstBucket = srcBucket;
  const dstKey    = `comprehensions/${srcKeyWithoutExt}.json`
  const S3Uri = `s3://${srcBucket}/clean-transcriptions/${srcKey}`
  const params = {
      DataAccessRoleArn: "arn:aws:iam::964926281754:role/S3CRUD",
      LanguageCode: 'en',
      JobName: dstKey,
      InputDataConfig: {
          S3Uri,
      },
      OutputDataConfig: {
          S3Uri: `s3://${dstBucket}/comprehensions`,
      }
  }
  // console.log(params);
    try {
        const response =  await ComprehendAPI.startKeyPhrasesDetectionJob(params).promise();
    console.log(response);   
    } catch (err) {
        console.log(err);
        return;
    }


//   // Download the image from the S3 source bucket. 

//   try {
//       const params = {
//           Bucket: srcBucket,
//           Key: srcKey
//       };
//       var transcription = JSON.parse(await s3.getObject(params).promise());

//   } catch (error) {
//       console.log(error);
//       return;
//   }  
//   const requestParams = {
//     "DataAccessRoleArn": "arn:aws:iam::964926281754:role/allow-comprehend-read",
    
//   }

      
//   console.log('Successfully resized ' + srcBucket + '/' + srcKey +
//       ' and uploaded to ' + dstBucket + '/' + dstKey); 
};
            