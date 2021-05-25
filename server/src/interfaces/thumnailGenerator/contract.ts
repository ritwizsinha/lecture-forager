export interface ThumbnailGenerator {
    extract(path: string, destname: string): Promise<void>;
}