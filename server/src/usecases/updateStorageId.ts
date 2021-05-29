export const createUpdateStorageId = (db) => {
    return (id, storage_id) => {
        return db.updateStorageId({ id, storage_id });
    }
}