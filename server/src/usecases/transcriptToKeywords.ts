import { Downloader } from '../downloader/contract';

export function downloadVideoTranscript(downloader: Downloader) {
    return  async (id: string) : Promise<string> => {
        const key = `transcriptions/s3-lambda-audio-transcribe-${id}.json`;
            const data = await downloader.download(key);
            const jsonTranscriptdata = JSON.parse(data.toString());
            return jsonTranscriptdata.results.transcripts[0].transcript;
    }
}