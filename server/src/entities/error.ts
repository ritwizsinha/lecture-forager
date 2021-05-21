// Type for handling error types

export enum Errors {
    InvalidVariable = 'empty variable not allowed',
    InvalidInsert = 'Invalid Insert to the databas',
}

export interface IError {
    type: Errors;
    message: string;
}

