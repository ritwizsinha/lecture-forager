export interface Uploader {
    upload(path: string, key: string ): Promise<any>
}

