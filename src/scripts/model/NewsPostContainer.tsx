import {MINOTAR_HELM_API} from "../../constants.ts";
import {JSX} from "react";
import ReactMarkdown from 'react-markdown';

export class NewsPostContainer {

    static MAX_CHARACTERS_POSTCARD_LINE: number = 40;
    static MAX_POSTCARD_LINES: number = 7;

    id: string;
    title: string;
    thumbnail: string;
    author: string;
    timestamp: number;
    content: string;

    constructor(id: string, title: string, thumbnail: string, author: string, timestamp: number, content: string) {
        this.id = id;
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

    public renderContentSmall(): JSX.Element {
        const newContent = this.content.replace(/\n/g, '');

        const lines: string[] = [];
        let currentLine = '';
        let builtWord = '';
        for (const character of newContent) {
            if (lines.length >= NewsPostContainer.MAX_POSTCARD_LINES) {
                lines[NewsPostContainer.MAX_POSTCARD_LINES - 1] += '...';
                break;
            }

            if (currentLine.length >= NewsPostContainer.MAX_CHARACTERS_POSTCARD_LINE) {
                // Go back until we find a space, remove the word + space and add it to the next line
                if (!currentLine.includes(' ') || currentLine.endsWith(' ')) {
                    lines.push(currentLine);
                    currentLine = '';
                }

                for (const localChar of currentLine.split('').reverse()) {
                    if (localChar === ' ') {
                        break;
                    }
                    builtWord += localChar;
                }

                builtWord = builtWord.split('').reverse().join('');
                currentLine = currentLine.substring(0, currentLine.length - builtWord.length);
                lines.push(currentLine);
            }

            if (builtWord.length > 0) {
                currentLine = builtWord;
                builtWord = '';
            }
            currentLine += character;
        }

        const done = lines.join('\n');

        // Convert \n to <br />
        const markdownWithBreaks = done.replace(/\n/g, '  \n');

        return <ReactMarkdown>{markdownWithBreaks}</ReactMarkdown>;
    }


}