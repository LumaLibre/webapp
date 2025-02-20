export class NewsPostContainer {

    title: string;
    thumbnail: string;
    author: string;
    date: string;
    content: string;

    constructor(title: string, thumbnail: string, author: string, date: string, content: string) {
        this.title = title;
        this.thumbnail = thumbnail;
        this.author = author;
        this.date = date;
        this.content = content;
    }
}