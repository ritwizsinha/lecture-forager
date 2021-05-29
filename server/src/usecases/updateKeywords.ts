export const createUpdateKeywords = (db) => {
    return (id, keywords) => {
        return db.updateKeywords({
            id,
            keywords,
        });
    }
}