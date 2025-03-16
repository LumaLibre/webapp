import {BODY_RENDER_API} from "@/constants.ts";

export class RecordedVoter {

    uuid: string;
    votes: number;
    name?: string;

    constructor(uuid: string, votes: number, name?: string) {
        this.uuid = uuid;
        this.votes = votes;
        this.name = name;
    }

    public getBodyRenderURL(): string {
        return `${BODY_RENDER_API}${this.uuid}?overlay=true`;
    }
}