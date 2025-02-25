import {NewsPostContainer} from "./model/NewsPostContainer.ts";

const endpoint: string = "http://localhost:7070/api/news/";

export function fetchNewsPosts(): Promise<NewsPostContainer[]> {
    return fetch(endpoint)
        .then(response => response.json())
        .then(newsPosts => newsPosts.map((newsPost: {
            title: string;
            thumbnail: string;
            author: string;
            timestamp: number;
            content: string; }) =>
            new NewsPostContainer(newsPost.title, newsPost.thumbnail, newsPost.author, newsPost.timestamp, newsPost.content)));
}

export async function fetchNewsPost(id: string): Promise<NewsPostContainer> {
    return fetch(endpoint + id)
        .then(response => response.json())
        .then(newsPost => new NewsPostContainer(newsPost.title, newsPost.thumbnail, newsPost.author, newsPost.timestamp, newsPost.content));
}

export async function fetchNewsPostNow(id: string): Promise<NewsPostContainer> {
    let newsPost: NewsPostContainer = await fetch(endpoint + id)
        .then(response => response.json())
        .then(data => newsPost = new NewsPostContainer(data.title, data.thumbnail, data.author, data.timestamp, data.content));
    return newsPost;
}