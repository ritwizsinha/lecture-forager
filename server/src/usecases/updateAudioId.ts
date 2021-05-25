export const createUpdateAudioId = (db) => {
    return (id, audio_id) => {
        return db.updateAudioId({ id, audio_id });
    }
}