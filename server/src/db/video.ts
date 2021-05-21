import { DBWrapper } from './db';

export interface IVideo {
    storage_id: string;
    title: string;
    description: string;
}

class VideoTable extends DBWrapper {
    tablename = 'Videos';
    async init() {
        const query = `CREATE TABLE IF NOT EXISTS Videos (
            id varchar PRIMARY KEY,
            video_id varchar DEFAULT NULL,
            transcription_id varchar DEFAULT NULL,
            audio_id varchar DEFAULT_NULL,
            comprehension_id varchar DEFAULT NULL,
            title varchar,
            description varchar,
            filename varchar,
            posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;
        try {
            await DBWrapper.pool.query(query);
        } catch (err) {
            console.log(err);
        }
    }

    async insert ({
        id,
        title,
        description,
        filename
    }) {
        const query = `INSERT INTO ${this.tablename} (id, title, description, filename)
        VALUES ($1, $2, $3, $4)`;
        return DBWrapper.pool.query(query, [id, title, description, filename]);
    }

    async getAll() {
        const query = `SELECT * FROM ${this.tablename}`;
        return DBWrapper.pool.query(query);
    }
}

export const VideoDB = new VideoTable();