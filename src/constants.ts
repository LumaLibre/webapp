export const HOST: string = 'https://dev.lumamc.net'; // Change to lumamc.net when deploying!
export const API_ENDPOINT: string = `${HOST}/api`;

export const LUMA_DISCORD_GUILD_ID: string = '1188316962258948149';
export const DISCORD_INV_SHORT: string = 'lumamc.net/chat';
export const DISCORD_INV: string = `https://${DISCORD_INV_SHORT}`;
export const LUMA_IP_ADDRESS: string = 'play.lumamc.net';

export const LUMA_SERVERSTATS_ENDPOINT: string = `https://api.mcsrvstat.us/2/${LUMA_IP_ADDRESS}`;
export const LUMA_DISCORD_ENDPOINT: string = `https://discord.com/api/guilds/${LUMA_DISCORD_GUILD_ID}/embed.json`;
export const WIKI = 'https://wiki.lumamc.net/lumamc-wiki/';
export const WIKI_LINK = (endpoint: string) => {
    if (endpoint.startsWith('/')) {
        endpoint = endpoint.substring(1);
    }
    return `${WIKI}${endpoint}`;
}

export const STORE = 'https://store.lumamc.net';

export const MINOTAR_HELM_API: string = 'https://minotar.net/helm/';

