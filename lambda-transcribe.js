const uuid = require('uuid');
const

    exports.handler = async(event) => {
        const record = event['Records'][0];
        const s3bucket = record['s3']['bucket']['name'];
        const s3object = record['s3']['object']['key'];

        const s3Path = `s3://${s3bucket}/audios/${s3object}`;
        const jobname = `${s3object}-${str(uuid.))}`
    };
