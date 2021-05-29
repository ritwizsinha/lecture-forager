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

    async updateStorageId({
        id,
        storage_id
    }) {
        const query = `UPDATE ${this.tablename}
        SET storage_id = $1
        WHERE id = $2`;
        return DBWrapper.pool.query(query, [storage_id, id]);
    }

    async updateAudioId({
        id,
        audio_id
    }) {
        const query = `UPDATE ${this.tablename}
        SET audio_id = $1
        WHERE id = $2`;
        return DBWrapper.pool.query(query, [audio_id, id]);
    }

    async mockInsert({
        title,
        description,
        fileName,
        keywords
    }) {
        const query = `INSERT INTO ${this.tablename} (title, description, filename, keywords)
        VALUES ($1, $2, $3, $4)`;
        return DBWrapper.pool.query(query, [title, description, fileName, keywords]);
    }

    async getVideosMetadataMatchingSearch(searchText) {
        const query = `
        SELECT id, title, description, filename, keywords
        FROM videos
        WHERE document_with_weights @@ plainto_tsquery('english', coalesce($1, ''))
        ORDER BY ts_rank(document_with_weights, plainto_tsquery('english', coalesce($1, ''))) DESC;`

        return DBWrapper.pool.query(query, [searchText]);
    }
     
    async getAll() {
        const query = `SELECT * FROM ${this.tablename}`;
        return DBWrapper.pool.query(query);
    }
}

export const VideoDB = new VideoTable();