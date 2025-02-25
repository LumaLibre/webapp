import {LUMA_DISCORD_ENDPOINT, LUMA_SERVERSTATS_ENDPOINT} from "../constants.ts";

export async function fetchServerStatus(): Promise<string> {
    const failed = 'Failed to fetch server status';

    try {
        // Fetch data from the API
        const response = await fetch(LUMA_SERVERSTATS_ENDPOINT);

        // Check if the response is okay
        if (!response.ok) {
            console.error('Failed to fetch server status:', response.statusText);
            return failed;
        }
        const data = await response.json();
        if (data.online) { // are we online?
            return data.players.online.toString();
        } else {
            return '0';
        }
    } catch (error) {
        console.error('Error fetching Luma\'s server status:', error);
        return failed;
    }
}

export async function fetchDiscordStatus(): Promise<string> {
    const failed = 'Failed to fetch Discord status';

    try {
        const response = await fetch(LUMA_DISCORD_ENDPOINT);
        if (!response.ok) {
            console.error('Failed to fetch Discord status:', response.statusText);
            return failed;
        }
        const data = await response.json();
        return data.presence_count.toString();
    } catch (error) {
        console.error('Error fetching Discord status:', error);
        return failed;
    }
}
