import * as constants from '../constants';

const statusesCache = 
{
    0: constants.ADDED,
    1: constants.LEARNING,
    2: constants.LEARNED,
};

export const repetitionStatus = 
{
    success : 0,
    failOnce: 1,
    failedMultipleTimes: 2
};

export function statusToString(statusInt){
    return statusesCache[statusInt] || constants.UNKNOWN;
}
export class WordDto{
    constructor(term, topic, translations){
        this.term = term;
        this.topic = topic;
        this.translations = translations;
    }
}
export class WordRepetitionModel{
    constructor(term, repetitionStatus){
        this.term = term;
        this.repetitionStatus = repetitionStatus;
    }
}