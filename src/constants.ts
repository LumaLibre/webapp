export const HOST: string = 'https://dev.lumamc.net'; // Change to lumamc.net when deploying!

export const LUMA_DISCORD_GUILD_ID: string = '1188316962258948149';
export const DISCORD_INV_SHORT: string = 'lumamc.net/chat';
export const DISCORD_INV: string = `https://${DISCORD_INV_SHORT}`;
export const LUMA_IP_ADDRESS: string = 'pla?y.lumamc.net';

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

// Apis
export const API_ENDPOINT: string = `${HOST}/api`;
// TODO: Nest Topvoter's endpoint inside normal API endpoint
export const LUMA_TOPVOTER_ENDPOINT: string = `http://170.205.24.90:7070/`; // https://topvoter.lumamc.net/
export const HELM_API: string = 'https://minotar.net/helm/';
export const BODY_RENDER_API: string = 'https://crafatar.com/renders/body/';
