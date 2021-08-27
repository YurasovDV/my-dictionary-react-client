
const statusesCache = 
{
    0: 'Added',
    1: 'Learning',
    2: 'Learned',

}

export function statusToString(statusInt){
    return statusesCache[statusInt] || 'unknown';
}
export class WordDto{
    constructor(term, topic, translations){
        this.term = term;
        this.topic = topic;
        this.translations = translations;
    }

}