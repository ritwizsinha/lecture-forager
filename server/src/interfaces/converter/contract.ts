export interface Converter {
    convert(inputPath: string, outputPath: string): Promise<string>;
}