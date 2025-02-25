export class NewsPostContainer {

    title: string;
    thumbnail: string;
    author: string;
    timestamp: number;
    content: string;

    constructor(title: string, thumbnail: string, author: string, timestamp: number, content: string) {
        this.title = title;
        this.thumbnail = thumbnail;
        this.author = author;
        this.timestamp = timestamp;
        this.content = content;
    }
}