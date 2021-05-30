import { Downloader } from '../interfaces/downloader/contract';

export function downloadVideoTranscript(downloader: Downloader) {
    return async (key: string): Promise<string> => {
        const data = await downloader.download(key);
        const jsonTranscriptdata = JSON.parse(data.toString());
        return jsonTranscriptdata.results.transcripts[0].transcript;
    }
}