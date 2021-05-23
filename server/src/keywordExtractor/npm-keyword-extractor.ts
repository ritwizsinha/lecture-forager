import * as extractor from 'keyword-extractor';
import { KeyWordExtractor } from './contract';

export const npmKeywordExtractor: KeyWordExtractor = {
    extract: function (document: string) : Array<string> {
        return extractor.extract(document, {
            language: "english",
            remove_digits: true,
            return_changed_case:true,
            remove_duplicates: true,
        });
    }
}