import {NewsPostContainer} from "./model/NewsPostContainer.tsx";
import {API_ENDPOINT} from "../constants.ts";

const endpoint: string = `${API_ENDPOINT}/news/`;

export async function fetchAllNewsPosts(): Promise<NewsPostContainer[]> {
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