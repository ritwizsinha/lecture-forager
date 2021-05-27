import { IResponse } from "../entities/video";
import { Errors } from '../entities/error';

export const makeSearchVideos = (db) => {
    return async function addVideo(search: string): Promise<IResponse> {
        try {
            if (search.length === 0) return {
                status: 'success',
                data: {
                    videos: []
                }
            }
            const { rows } = await db.getVideosMetadataMatchingSearch(search);
            return {
                status: 'success',
                data: {
                    videos: rows
                }
            }
        } catch (err) {
                return {
                    status: 'failure',
                    error: err.message ? err.message : err
                }
        }
    }
}