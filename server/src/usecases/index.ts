import { makeAddVideo } from './addVideo';
import { VideoDB } from '../db/video';

export const addVideo = makeAddVideo(VideoDB);