import { Errors, IError} from './error';

export interface IVideo {
    id: string,
    video_id?: string,
    audio_id?: string,
    transcription_id: string,
    comprehension_id: string,
    title: string;
    description: string;
    fileName: string;
    postedAt: Date;
    postedBy: string;
}
export interface IResponse {
    data?: any;
    error?: IError;
    status: 'success' | 'failure' | 'waiting'
}

export const buildEntityVideo = (createFileId: (x: string) => string) => {
    return (data: Partial<IVideo>): IResponse => {
        let { fileName, title, description } = data;
        let message = '';
        fileName = fileName.trim();
        title = title.trim();
        description = description.trim();

        if (!fileName) message = 'fileName cannot be empty';
        if (!title) message = 'Title cannot be empty';
        if (!description) message = 'Description cannot be empty'

        if (message) return {
            status: 'failure',
            error: {
                message,
                type: Errors.InvalidVariable
            }
        }

        const id = createFileId(fileName);

        return {
            status: 'success',
            data: {
                id,
                fileName,
                title,
                description,
            }
        }

    }
}