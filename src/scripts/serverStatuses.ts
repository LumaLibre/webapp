const ipAddress = 'play.lumamc.net';
const guildId = '1188316962258948149';

// Maybe have this return a string instead for a more detailed report?
async function fetchServerStatus(): Promise<number> {
    const url = `https://api.mcsrvstat.us/2/${ipAddress}`;

    try {
        // Fetch data from the API
        const response = await fetch(url);

        // Check if the response is successful
        if (!response.ok) {
            console.error('Failed to fetch server status:', response.statusText);
            return 0;
        }
        const data = await response.json();
        if (data.online) { // are we online?
            return data.players.online;
        } else {
            return 0;
        }
    } catch (error) {
        console.error('Error fetching MC server status:', error);
        return 0;
    }
}

async function fetchDiscordStatus(): Promise<number> {
    const url = `https://discord.com/api/guilds/${guildId}/embed.json`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error('Failed to fetch Discord status:', response.statusText);
            return 0;
        }
        const data = await response.json();
        return data.presence_count;
    } catch (error) {
        console.error('Error fetching Discord status:', error);
        return 0;
    }
}
