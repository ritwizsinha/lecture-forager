import { buildEntityVideo } from './video';
import { v4 as uuidv4 } from 'uuid';


const createId = (x: string) => uuidv4();
export const createNewVideo = buildEntityVideo(createId);