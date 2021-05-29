export const createGetVideoDetails = (db) => {
    return async function (id)  {
        return db.getVideo(id);
    }
}