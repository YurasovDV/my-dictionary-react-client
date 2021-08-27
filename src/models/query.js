export class Query
{
    constructor(skip = 0, take = 20, topic = null, searchTerm = null){
        this.skip = skip;
        this.take = take;
        this.topic = topic;
        this.searchTerm = searchTerm;
    }
}