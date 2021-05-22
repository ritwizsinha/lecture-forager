CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    filename varchar,
    storage_id varchar,
    audio_id varchar,
    title varchar,
    description varchar,
    posted_at TIMESTAMP DEFAULT current_timestamp,
    keywords text
);