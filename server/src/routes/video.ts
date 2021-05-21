import { Router, Request, Response } from 'express';
const ffmpeg = require('ffmpeg');
import { Client } from 'pg';
import { handleUploadMiddleware, handleLocalUploadMiddleWare } from '../middleware/upload';
import { VideoDB } from '../db/video';
import { S3 } from '../middleware/upload';
import { AWS_BUCKET_NAME } from '../constants/config';
import * as fs from 'fs';

export const router = Router();
router.get('/video', (req, res) => {
    const { id } = req.params;
    // Return Video name thumbnail and other properties
});

router.get('/video/multiple', (req, res) => {
    // Return Video Metadata for the list of videos specified
});


router.post('/video', handleLocalUploadMiddleWare.single('file'), async (req, res) => {
    const { title, description } = req.body;
    const { localFileStoreId, localFileStoreName } = req as any;
    await VideoDB.insert({
        id: localFileStoreId,
        title,
        description,
        filename: localFileStoreName
    });
    await audioconverter(localFileStoreName);
    S3VideoUploader(`${localFileStoreName}`);
    return res.status(200).json();
});

async function audioconverter(filename) {
    const path = `uploads/${filename}`;
    try {
        const process = new ffmpeg(path);
        process.then(function (video) {
            video.fnExtractSoundToMP3(`./${filename}.mp3`, function (error, file) {
                if (!error)
                    console.log('Audio file: ' + file);
                S3Audiouploader(`${filename}.mp3`);
            });
        }, function (err) {
            console.log('Error: ' + err);
        });
    } catch (e) {
        console.log(e);
        console.log(e.code);
        console.log(e.msg);
    }
}

function S3Audiouploader(filename) {
    console.log(filename);
    const fileContent = fs.readFileSync(filename);
    const params = {
        Bucket: AWS_BUCKET_NAME,
        Key: `audios/${filename}`,
        Body: fileContent
    }

    S3.upload(params, function(err, data) {
        if (err) {
            throw err
        }

        console.log('Audio uploaded successfully');
    })
    console.log(params);
}

function S3VideoUploader(filename) {
    const fileContent = fs.readFileSync(`uploads/${filename}`);
    const params = {
        Bucket: AWS_BUCKET_NAME,
        Key: `videos/${filename}`,
        Body: fileContent
    }
    console.log(params);
    S3.upload(params, function(err, data) {
        if (err) {
            throw err
        }

        console.log('Video uploaded successfully');
    })
}