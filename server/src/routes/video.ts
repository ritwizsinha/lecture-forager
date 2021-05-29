import { Router, Request, Response } from 'express';
import { handleLocalUploadMiddleWare } from '../middleware/localUpload';
import { addVideoToDb } from '../middleware/saveVideoToDb';
import { addToJobQueue } from '../middleware/addS3UploadJob';
import { getVideoListFromSearch } from '../middleware/getVideoListFromSearch';
import * as fs from 'fs';
import * as path from 'path';


export const router = Router();
router.get('/video', (req, res) => {
    const { id } = req.params;
    // Return Video name thumbnail and other properties
});

router.get('/video/multiple', getVideoListFromSearch, (req, res) => {
    // Return Video Metadata for the list of videos specified
    // const { search } = req.params;
    const response = req['response'];
    return res.status(200).json(response);
});


router.post('/video', handleLocalUploadMiddleWare.single('file'), addVideoToDb, addToJobQueue, async (req, res) => {
    const data = req['response'];
    // console.log(fs.existsSync(path.join(__dirname, `../../uploads/${data.fileName}`)))
    return res.status(201).json(data);
});

// async function audioconverter(filename) {
//     const path = `uploads/${filename}`;
//     try {
//         const process = new ffmpeg(path);
//         process.then(function (video) {
//             video.fnExtractSoundToMP3(`./${filename}.mp3`, function (error, file) {
//                 if (!error)
//                     console.log('Audio file: ' + file);
//                 S3Audiouploader(`${filename}.mp3`);
//             });
//         }, function (err) {
//             console.log('Error: ' + err);
//         });
//     } catch (e) {
//         console.log(e);
//         console.log(e.code);
//         console.log(e.msg);
//     }
// }

// function S3Audiouploader(filename) {
//     console.log(filename);
//     const fileContent = fs.readFileSync(filename);
//     const params = {
//         Bucket: AWS_BUCKET_NAME,
//         Key: `audios/${filename}`,
//         Body: fileContent
//     }

    // S3.upload(params, function(err, data) {
    //     if (err) {
    //         throw err
    //     }

    //     console.log('Audio uploaded successfully');
    // })
//     console.log(params);
// }

// function S3VideoUploader(filename) {
//     const fileContent = fs.readFileSync(`uploads/${filename}`);
//     const params = {
//         Bucket: AWS_BUCKET_NAME,
//         Key: `videos/${filename}`,
//         Body: fileContent
//     }
//     console.log(params);
//     S3.upload(params, function(err, data) {
//         if (err) {
//             throw err
//         }

//         console.log('Video uploaded successfully');
//     })
// }