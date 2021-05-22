import { DBWrapper } from './db';

export interface IVideo {
    storage_id: string;
    title: string;
    description: string;
}

class VideoTable extends DBWrapper {
    tablename = 'Videos';
    
    async insert ({
        id,
        title,
        description,
        fileName
    }) {
        const query = `INSERT INTO ${this.tablename} (id, title, description, filename)
        VALUES ($1, $2, $3, $4)`;
        return DBWrapper.pool.query(query, [id, title, description, fileName]);
    }

    async getAll() {
        const query = `SELECT * FROM ${this.tablename}`;
        return DBWrapper.pool.query(query);
    }
}

export const VideoDB = new VideoTable();