import { downloadS3VideoTranscript, npmConvertTranscriptToKeywords, updateKeywords } from '../../usecases';
export default async (job)  => {
    const { id, fileName } = job.data;
    console.log(id, fileName);
    const actualFileName = fileName.slice(0, fileName.lastIndexOf('.'));
    const key = `transcriptions/${id + actualFileName}.json`;
    try {
        const transcriptString = await downloadS3VideoTranscript(key);
        console.log(transcriptString);


        const keywords = npmConvertTranscriptToKeywords(transcriptString);
        console.log(keywords);
        await updateKeywords(id, keywords.join(','));
        return Promise.resolve({
            id,
            fileName,
            keywords
        });
    } catch (err) {
        console.log(err);
        return Promise.reject();
    }


}