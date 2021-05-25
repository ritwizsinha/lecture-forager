export interface Downloader {
    download(key: string): Promise<Buffer>
}