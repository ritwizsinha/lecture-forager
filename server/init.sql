CREATE TABLE IF NOT EXISTS videos (
    id  varchar PRIMARY KEY,
    filename varchar NOT NULL ,
    storage_id varchar UNIQUE ,
    audio_id varchar UNIQUE ,
    title varchar NOT NULL ,
    description varchar NOT NULL ,
    posted_at TIMESTAMP DEFAULT current_timestamp,
    keywords text,
    document_with_weights tsvector
);


CREATE INDEX storage_id_idx
ON videos(storage_id);

CREATE INDEX audio_id_idx
ON videos(audio_id);

CREATE INDEX document_idx_weights
ON videos
USING GIN (document_with_weights);

CREATE FUNCTION videos_tsvector_trigger() RETURNS TRIGGER AS $$
begin
    new.document_with_weights :=
    setweight(to_tsvector('english', coalesce(new.title, '')), 'A')
    || setweight(to_tsvector('english', coalesce(new.description, '')), 'B')
    || setweight(to_tsvector('english', coalesce(new.keywords, '')), 'C');
    return new;
end
$$ LANGUAGE plpgsql;

CREATE TRIGGER tsvectorupdate BEFORE INSERT OR UPDATE
    ON videos FOR EACH ROW EXECUTE PROCEDURE videos_tsvector_trigger()