import { KeyWordExtractor } from '../keywordExtractor/contract';

export function convertTranscriptToKeywords(extractor: KeyWordExtractor) {
    return (document: string) : Array<string> => {
        return extractor.extract(document).filter(keyword => keyword.length > 3);
    }
}