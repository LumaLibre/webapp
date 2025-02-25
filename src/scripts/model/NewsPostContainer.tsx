import {MINOTAR_HELM_API} from "../../constants.ts";
import {JSX} from "react";
import ReactMarkdown from 'react-markdown';

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

    private getAuthorAvatarURL(size: number): string {
        return `${MINOTAR_HELM_API}${this.author}/${size}.png`;
    }

    public getAuthorAvatar(size: number): JSX.Element {
        return <img src={this.getAuthorAvatarURL(size)} alt={this.author} />;
    }

    public formatTimestampWithOrdinal(): string {
        const date = new Date(this.timestamp);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();

        // Function to add ordinal suffix to the day
        const getOrdinalSuffix = (day: number) => {
            if (day > 3 && day < 21) return 'th'; // Special case for numbers 11-13
            switch (day % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        };

        return `${month} ${day}${getOrdinalSuffix(day)}, ${year}`;
    }

    public renderContent(): JSX.Element {
        return <ReactMarkdown>{this.content}</ReactMarkdown>;
    }
}