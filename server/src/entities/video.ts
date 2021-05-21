import { Errors, IError} from './error';

export interface IVideo {
    id: string,
    video_id?: string,
    audio_id?: string,
    transcription_id: string,
    comprehension_id: string,
    title: string;
    description: string;
    filename: string;
    postedAt: Date;
    postedBy: string;
}
export interface IResponse {
    data?: any;
    error?: IError;
    status: 'success' | 'failure' | 'waiting'
}

export const buildEntityVideo = (createFileStorageId: (x: string) => string) => {
    return (data: Partial<IVideo>): IResponse => {
        let { filename, title, description } = data;
        let message = '';
        filename = filename.trim();
        title = title.trim();
        description = description.trim();

        if (!filename) message = 'Filename cannot be empty';
        if (!title) message = 'Title cannot be empty';
        if (!description) message = 'Description cannot be empty'

        if (message) return {
            status: 'failure',
            error: {
                message,
                type: Errors.InvalidVariable
            }
        }

        const fileStorageId = createFileStorageId(filename);

        return {
            status: 'success',
            data: {
                fileStorageId,
                filename,
                title,
                description,
            }
        }

    }
}