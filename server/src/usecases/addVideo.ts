import { createNewVideo } from "../entities";
import { IResponse } from "../entities/video";
import { Errors } from '../entities/error';

export const makeAddVideo = (db) => {
    return async function addVideo(videoInfo): Promise<IResponse> {
        const response = createNewVideo(videoInfo);
        if (response.error) return response;
        try {
            const { rowCount } = await db.insert(response.data);
            if (rowCount < 1) return {
                status: 'failure',
                error: {
                    type: Errors.InvalidInsert,
                    message: 'Insert Failed'
                }
            }
            else {
                return {
                    ...response,
                    status: 'success',                }
            }
        } catch (err) {
            return {
                status: 'failure',
                error: {
                    type: Errors.InvalidInsert,
                    message: err && err.message ? err.message : err
                }
            }
        }
    }
}